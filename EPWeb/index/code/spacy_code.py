import spacy
from index.code import wiktionary
import base64
import boto3
import os
from contextlib import closing
import pymysql 
import eng_to_ipa 

#分析詞性
def POS(sent):
    nlp = spacy.load("en_core_web_sm")
    feedback ={
        'text':[],
        'pos':[],
        'dep':[],
        'IPA' : []
    }
    doc = nlp(sent)
    db = pymysql.connect(host='163.18.10.123', port=3306, user='EPuser',
                         passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    for token in doc:
        if str(token) != '.':
            #先從DB中抓取讀音
            sql = f'select ifnull((select phonetic from Newdict where Word = "{str(token)}" limit 1 ), 0);'
            cursor.execute(sql)
            temp = cursor.fetchone()
            #若抓取不到使用eng_to_ipa套件轉換音標並存入DB
            if temp[0] == '0' or None or ' ':
                feedback['IPA'].append(eng_to_ipa.convert(token.text))
                sql = f'update Newdict set phonetic ="{temp[-1]}" where Word = "{str(token)}";'
                try:
                    cursor.execute(sql)
                    db.commit()
                except:
                    db.rollback()
            else:
                feedback['IPA'].append(temp[0])
            #儲存詞性相關資料
            feedback['text'].append(token.text)
            feedback['pos'].append(token.pos_) #詞性標籤
            feedback['dep'].append(token.dep_) #相關性標籤
            
    db.close()
    return feedback