import pymysql

def getData(level,source):
    #建立DB連結
    db = pymysql.connect(host='163.18.10.123', port=3306,
                     user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    #建立DB指標
    cursor = db.cursor()
    #使用SQL查詢語句獲取資料
    #f-string中大括弧中的變數會自動帶入字串資料
    #Exampe Level = A1 , source = WordNet
    #sql = select Id,content from A1sent where source = "WordNet";
    sql = f'select Id,content from sent where source = "{source}" and Level = "{level}";'
    #寫完SQL查詢語句記得執行
    cursor.execute(sql)
    #獲取查詢結果，多行資料使用fetchall() ，單行資料使用fetchone()。
    result = cursor.fetchall()
    #沒有使用DB時記得關閉
    db.close()
    #自訂義回傳資料
    data = {}
    content = []
    Id = []
    for col in result:
        Id.append(col[0])
        content.append(col[1])
    data['Content'] = content
    data['Id'] = Id
    return data 

def getRand():
	db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
	cursor = db.cursor()
    #使用此語句拿取亂數才不會讓資料庫查詢產生死結
	sql = 'SELECT content FROM sent AS a JOIN (SELECT MAX(ID) AS ID FROM sent) AS b ON (a.ID >= FLOOR(b.ID * RAND())) LIMIT 100'
	cursor.execute(sql)
	result = cursor.fetchall()
	db.close()
	data = []
	for col in result:
		data.append(col[0])
	return data 

def getWord():
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = 'select word,sentCount from newDict where sentCount is not null;'
    cursor.execute(sql)
    result = cursor.fetchall()
    db.close()
    word = []
    sentCount = []
    for col in result:
        word.append(col[0])
        sentCount.append(col[1])
    data = {
        'Word' : word,
        'sentCount' : sentCount
    }
    return data

def getSentByWord(Word):
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = f"select s.Content,t.topicName,s.Chinese,s.Translate_Eng,s.Similarity from senthasword as w join TopicList as t,sent as s,senttopictemp as st where w.word = '{Word}' and w.sentId = s.Id and st.sentId = w.sentId and st.topicId = t.Id and s.Chinese is not null;"
    cursor.execute(sql)
    result = cursor.fetchall()
    sql = f"select count(w.Id) from senthasword as w join sent as s where w.word = '{Word}' and s.Chinese is not null and w.sentId = s.Id;"
    cursor.execute(sql)
    count = cursor.fetchone()
    db.close()
    sent = []
    sentTopic = []
    Chinese = []
    Translate_Eng = []
    Similarity = []
    if result :
        for col in result:
            sent.append(col[0])
            sentTopic.append(col[1])
            Chinese.append(col[2])
            Translate_Eng.append(col[3])
            Similarity.append(col[4])
    data = {
        'Sent' : sent,
        'sentTopic' : sentTopic,
        'Chinese' : Chinese,
        'Translate_Eng' : Translate_Eng,
        'Similarity' : Similarity,
        'ComplitCount' : count[0]
    }
    return data

def getSentChinese(sent):
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = f'select Chinese from sent where Content like "{sent}";'
    cursor.execute(sql)
    result = cursor.fetchone()
    db.close()
    data = {'Chinese' : result[0]}
    return data

def getTopics():
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = "select class from topicList group by class;"
    cursor.execute(sql)
    result = cursor.fetchall()
    db.close()
    topics = []
    for col in result:
        topics.append(col[0])
    data = {'topics' : topics}
    return data

def getSentByTopic(topic):
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = f"select Id,content from sent where sentTopic in(select Id from topicList where class = '{topic}');"
    cursor.execute(sql)
    result = cursor.fetchall()
    db.close()
    sentId = []
    sent = []
    for col in result:
        sentId.append(col[0])
        sent.append(col[1])
    data = {'Id' : sentId,
           'Content' : sent,
           'Topic' : topic}
    return data

def getSentById(Id):
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = f'select * from sent where Id = "{Id}";'
    cursor.execute(sql)
    result = cursor.fetchone()
    db.close()
    colName = ['Id', 'Date', 'Level', 'Length', 'Content', 'Source', 'SentenceTypes', 'SentenceStructure', 'SentencePurpose', 'sentTopic', 'ipa', 'posDep', 'Chinese', 'Translate_Eng', 'Similarity']
    data = {}
    for i in range(len(colName)):
        data[colName[i]] = result[i]
    return data











