import pymysql


def getEmojiByName(name):
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    sql = f'select code,name from emojiList where name like "%{name}%";'
    cursor.execute(sql)
    result = cursor.fetchall()
    db.close()
    if len(result) == 0:
        return False
    emoji = []
    for col in result:
        temp = {
            'name' : col[1].replace('\r',''),
            'code' : col[0]
        }
        emoji.append(temp)
    return emoji