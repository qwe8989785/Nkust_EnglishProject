import json
#拿取單字向量
def getData(level):
	if level != 'all':
		with open(f'./templates/static/app_backend/json/{level}.json', 'r', encoding='utf-8') as f:
			return json.load(f)
	else:
		levelList = ['A1','A2','B1','B2','C1']
		data = []
		for lv in levelList:
			with open(f'./templates/static/app_backend/json/{lv}.json', 'r', encoding='utf-8') as f:
				data.append(json.load(f))
		return data