import requests
import requests.packages.urllib3
import spacy
import pymysql
import json
import sys
from dbutils.pooled_db import PooledDB
from translate import Translator as pytrans
from googletrans import Translator as googletrans
from google.cloud import translate_v2 as google_translate
from html import unescape
import os
from google_trans_new import google_translator  

nlp = spacy.load("en_core_web_md")
POOL = PooledDB(
    creator=pymysql,
    maxconnections=6,
    mincached=2,
    maxcached=5,
    maxshared=3,
    blocking=True,
    maxusage=None,
    setsession=[],
    ping=0,
    host='163.18.10.123',
    port=3306,
    user='EPuser',
    password='e507@mis',
    database='entries',
    charset='utf8mb4'
)
db = POOL.connection()
cursor = db.cursor()

def google_tran(tar, inputsent):
    SaveDirectory = os.getcwd()
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = SaveDirectory + "/gentle-mapper-273215-cfa22db72b63.json"
    translate_client = google_translate.Client()
    output = translate_client.translate(
        inputsent,
        target_language=tar
    )
    return output['translatedText']


def translation(sent):
    #detector = googletrans()
    detector = google_translator()
    language = detector.detect(sent)
    #if language.lang == 'en':
    if 'en' in language:
        detect_lang = '英文'
        #translator = pytrans(from_lang="en", to_lang="zh-tw")
        #translation = translator.translate(sent)
        #translation = ibm_tran("en-us", "zh-tw", sent)
        translation = google_tran('zh-tw', sent)
    #elif language.lang == 'zh-CN' or language.lang == 'zh-tw':
    elif 'zh-CN' in language or 'zh-tw' in language:
        detect_lang = '中文'
        #translator = pytrans(from_lang="zh-CN", to_lang="en")
        #translation = translator.translate(sent)
        #translation = ibm_tran("zh-TW", "en-us", sent)
        translation = google_tran('en', sent)
    else:
        detect_lang = 'unable'
        translation = 'Sorry,We can not detect this language'

    payload = {
        'lang': detect_lang,
        'translate': unescape(translation)
    }
    return payload

def get_translate(sentence):
    r = translation(sentence)
    response_data = r['translate']  #選取翻譯後的結果
    return response_data

def write_data(sentence, id_num):
    sentence1 = sentence
    translateSentence = get_translate(sentence1)
    sentence2 = get_translate(translateSentence).replace('\"', '\\"').replace('\'', '\\\'')
    doc1 = nlp(sentence1)
    doc2 = nlp(sentence2)
    final_similarity = doc1.similarity(doc2)
    final_similarity = str(final_similarity)
    sql = f"UPDATE sent SET sent.Chinese = \"{translateSentence}\" ,  sent.Translate_Eng = \"{sentence2}\" , sent.Similarity = '{final_similarity}' WHERE id = {id_num}"
    cursor.execute(sql)
    try:
        db.commit()
    except:
        db.rollback()

def main():
    sql = 'select Id,content from sent where chinese is null limit 700;'  #20000~200000
    cursor.execute(sql)
    result = cursor.fetchall()
    for col in result:
        write_data(col[1], col[0])
        print("OK :" + str(col[0]))
    print('Sucess')
    db.close()