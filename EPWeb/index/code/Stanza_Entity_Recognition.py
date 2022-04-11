# 以下提供3種Named Entity的方式

#第一種
#這個方法是直接讀取文檔的Named Entity
import stanza

def getData(sent,_type_):
	if _type_ == '1':
		nlp = stanza.Pipeline(lang='en', processors='tokenize,ner')
		doc = nlp(sent)
		data = []
		for ent in doc.ents:
			temp = {
				'entity' : ent.text,
				'type' : ent.type
			}
			data.append(temp)
		return data
		#print(*[f'entity: {ent.text}\ttype: {ent.type}' for ent in doc.ents], sep='\n')
	elif _type_ == '2':
		#第二種
		#這個方法是通過句子來分析Named Entity

		nlp = stanza.Pipeline(lang='en', processors='tokenize,ner')
		doc = nlp(sent)
		data = []
		for sent in doc.sentences :
			for ent in sent.ents:
				temp = {
					'entity' : ent.text,
					'type' : ent.type
				}
				data.append(temp)
		return data
		#print(*[f'entity: {ent.text}\ttype: {ent.type}' for sent in doc.sentences for ent in sent.ents], sep='\n')
	else:
		#第三種
		#這個方法使用更清楚的BIOES標示方法
		#B(Begin)表示實體開始，I(Inside)表示內部，O(Outside)表示外部，E(End)表示實體結束

		nlp = stanza.Pipeline(lang='en', processors='tokenize,ner')
		doc = nlp(sent)
		data = []
		for sent in doc.sentences :
			for token in sent.tokens:
				temp = {
					'text' : token.text,
					'ner' : token.ner
				}
				data.append(temp)
		return data
		