import re
import string
from collections import Counter
from django.db import connection
from app_speech.models import Sentence
import spacy

#去除頭尾特殊符號
#str.strip()功用為去除頭尾指定字元
#string.punctuation為一特殊符號列表
def remove(text):
    text = text.strip(string.punctuation)
    return text

#確認是否有重複的字詞
def checksame(wordlist):
    #將字詞LIST使用計數器記數後進行排序
    data = sorted(Counter(wordlist),
                  key=lambda w: w.lower())  # case insensitive sort
    #返回排序的LIST
    return data

#分割字串
def splitSent(sent):
    for sent in re.split('\d+,', sent):
        if sent != '':
            return str(sent)

#分類等級
def my_custom_sql(sent):
    CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Other']
    info = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Other', 'level']
    Words = []
    #實體化spacy模型
    nlp = spacy.load('en_core_web_sm')
    #將句子丟入分析
    doc = nlp(sent)
    #遞迴每個詞
    for data in doc:
        #如果不是原型的話就取原型加入Words陣列
        if data.lemma_ != '-PRON-':
            Words.append(data.lemma_)
        else:
            Words.append(str(data))
    filterData = []
    #遞迴Words
    for entries in Words :
        #將每個詞轉小寫
        word = entries.lower()
        lexeme = nlp.vocab[word]
        #篩選字詞
        if lexeme.is_stop == False and word not in filterData:
            filterData.append(word)  
    Level = []
    feedback = {
        'A1': [],
        'A2': [],
        'B1': [],
        'B2': [],
        'C1': [],
        'C2': [],
        'Other': [],
        'level': []
    }
    #連接資料庫
    c = connection.cursor()
    try:
        #遞迴剛剛篩選完的詞
        for i in filterData:
            i = remove(i)
            #從資料庫中拿取LEVEL
            sql = 'select wordLevel from dict where Word = \'%s\';' % i.replace(
                '\'', '\\\'')
            c.execute(sql)
            result = c.fetchone()
            #有結果就將它加入要回傳的資料中
            if result != None:
                Level.append(result[0])
                feedback[result[0]].append(i)
            elif i.isalpha():
                feedback['Other'].append(i)
    finally:
        #連接完資料庫要關閉
        c.close()
    temp = []
    #遞迴CEFR等級將剛剛的LEVEL陣列轉換為編號
    for no, value in enumerate(CEFR):
        for i in Level:
            if i == value:
                temp.append(no)
    #如果陣列有東西就加入到要回傳的資料中
    if len(temp) - 1 >= 0:
        feedback['level'].append(CEFR[temp[len(temp) - 1]])
    #將feedback中的資料轉為LIST
    for i in info:
        feedback[i] = list(dict.fromkeys(feedback[i]))
    #確認有無重複資料
    for i in CEFR:
        feedback[i] = checksame(feedback[i])
    return feedback


'''
# check db sent level
def db_data_level():
    for num in range(len(Sentence.objects.all())):
        sentobj = Sentence.objects.get(id=(num + 1))
        level = classifylevel(sentobj.content)
        p = Sentence(id=(num+1), sent_level=level,
                     content=sentobj.content, dates=sentobj.dates, sources=sentobj.sources)
        p.save()
        print(str(num)+" Success upload!")
'''
