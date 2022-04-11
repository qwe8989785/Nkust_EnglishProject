import pymysql

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='e507@mis', db='entries', charset='utf8mb4')
cursor = db.cursor()
sql = 'select Id,content from sent where chinese is null limit 800;'
cursor.execute(sql)
result = cursor.fetchall()
charCount = 0
for col in result:
	charCount += len(str(col[1]))

print(charCount)


db.close()