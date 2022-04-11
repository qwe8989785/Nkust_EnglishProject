import pymysql


def getSentbyChar(count,level):
    count = int(count)
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = f'select a.Id,a.content,a.Chinese from {level}sent as a join (select MAX(Id) as max_Id from {level}sent) as b on (a.Id >= FLOOR(b.max_Id * RAND())) where a.Length ={count} and Similarity > 0.9 limit 2;'
    cursor.execute(sql)
    result = cursor.fetchall()
    db.close()
    if result:
        Id = []
        content = []
        chinese = []
        for col in result:
            Id.append(col[0])
            content.append(col[1])
            chinese.append(col[2])
        data = {
            'Id' : Id,
            'Content' : content,
            'Length' : count,
            'Chinese' : chinese
        }
        return data
    else:
        return False
    
def getSentbyLevel(level):
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = f"select a.Id,a.content,a.Chinese from {level}sent as a join (select MAX(Id) as max_Id from {level}sent) as b on (a.Id >= FLOOR(b.max_Id * RAND())) where a.Length >= 6 and Similarity > 0.9 limit 2;"
    cursor.execute(sql)
    result = cursor.fetchall()
    db.close()
    if result:
        Id = []
        content = []
        chinese = []
        for col in result:
            Id.append(col[0])
            content.append(col[1])
            chinese.append(col[2])
        data = {
            'Id' : Id,
            'Content' : content,
            'Level' : level,
            'Chinese' : chinese
        }
        return data
    else:
        return False
    
def getPracticeSent(topic,level):
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = f"select Id,content,Chinese from {level}sent where sentTopic in(select Id from topicList where class = '{topic}') limit 5;"
    cursor.execute(sql)
    result = cursor.fetchall()
    db.close()
    sent = []
    for col in result:
        data = {
            'Id' : col[0],
            'Content' : col[1],
            'Chinese' : col[2]
        }
        sent.append(data)
    return data