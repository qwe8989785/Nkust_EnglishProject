from nltk.corpus import wordnet as wn
import pymysql,string,json

#從DB查詢單字字典
def syn(word):
    #查詢EP的dict資料表拿取中文資料
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='EP', charset='utf8mb4')
    cursor = db.cursor()
    sql = f'select POS_1,POS_2,POS_3,POS_4,POS_5,Meaning_1,Meaning_2,Meaning_3,Meaning_4,Meaning_5,wordLevel,wordType from dict where Word = "{word}";'
    cursor.execute(sql)
    result = cursor.fetchone()
    db.close()
    data = {'result': [], 'synonyms': [], 'antonyms': [],
            'hypernyms': [], 'hyponyms': [], 'examples': [],'engMeaning':[]}
    if result != None:
        for i in range(5):
            temp = {}
            if result[i] != None:
                temp['POS'] = result[i]
            if result[5+i] != None:
                temp['Meaning'] = result[5+i]
            if len(temp) != 0:
                data['result'].append(temp)
        data['Level'] = result[10]
        data['Topic'] = result[11]
    #查詢entries的NewDict資料表拿取讀音
    db = pymysql.connect(host='163.18.10.123', port=3306, user='EPuser',
                         passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = 'select phonetic from Newdict where Word = \'%s\';' % word
    cursor.execute(sql)
    result = cursor.fetchone()
    if result != None:
        data['phonetic'] = result[0]
    #再從WordNet拿取同義字反義字等等資料
    for synset in wn.synsets(word):
        for lm in synset.lemmas():
            if lm.name() != word:
                data['synonyms'].append(lm.name())
            if lm.antonyms():
                data['antonyms'].append(lm.antonyms()[0].name())
        if synset.hypernyms():
            for hyperset in synset.hypernyms():
                for lm in hyperset.lemmas():
                    data['hypernyms'].append(lm.name())
        if synset.hyponyms():
            for hyposet in synset.hyponyms():
                for lm in hyposet.lemmas():
                    data['hyponyms'].append(lm.name())
        if synset.examples():
            for sent in synset.examples():
                sent = sent.capitalize()
                if sent[-1] not in string.punctuation:
                    sent = sent + '.'
                data['examples'].append(sent)
    #從newDictMeaning拿取英文詞性及定義
    sql = f"select partOfSpeech,definition from newDictMeaning where Word = '{word}';"
    cursor.execute(sql)
    result = cursor.fetchall()
    if result != None:
        pos = []
        meaning = []
        for col in result:
            pos.append(col[0])
            meaning.append(col[1])
        data['engMeaning'].append(pos)
        data['engMeaning'].append(meaning)       
    db.close()
    return data

#拿取資料庫內單字數量
def getWordCount():
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='EP', charset='utf8mb4')
    cursor = db.cursor()
    levelList = ['A1','A2','B1','B2','C1','C2','ALL']
    result = {}
    for level in levelList:
        if level != 'ALL':
            sql = f'select count(word) from dict where wordLevel = "{level}";'
        else:
            sql = 'select count(word) from dict;'
        cursor.execute(sql)
        temp = cursor.fetchone()
        result[level] = temp[0]
    levelList = ['a1','a2','b1','b2','c1']
    for level in levelList:
        sql = f'select count(word) from {level}dict;'
        cursor.execute(sql)
        temp = cursor.fetchone()
        result[level] = temp[0]
    db.close()
    return result

#拿取資料庫內句子數量
def getSentCount(Source):
    with open('templates/static/sentCount.json', 'r', encoding='utf-8') as f:
        sentCount = json.load(f)
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    if Source != 'all':
        sql = f'select count(content) from sent where Source = "{Source}";'
        cursor.execute(sql)
        result = cursor.fetchone()
        sentCount['Source'] = int(result[0])
    else:
        sql = 'select count(content) from sent;'
        cursor.execute(sql)
        result = cursor.fetchone()
        sentCount['All'] = int(result[0])
    db.close()
    return sentCount