# 以下提供3種Named Entity的方式

#第一種
#這個方法是直接讀取文檔的Named Entity
import stanza

nlp = stanza.Pipeline(lang='en', processors='tokenize,ner')
doc = nlp("Chris Manning teaches at Stanford University. He lives in the Bay Area.")
print(*[f'entity: {ent.text}\ttype: {ent.type}' for ent in doc.ents], sep='\n')

#第二種
#這個方法是通過句子來分析Named Entity
import stanza

nlp = stanza.Pipeline(lang='en', processors='tokenize,ner')
doc = nlp("Chris Manning teaches at Stanford University. He lives in the Bay Area.")
print(*[f'entity: {ent.text}\ttype: {ent.type}' for sent in doc.sentences for ent in sent.ents], sep='\n')

#第三種
#這個方法使用更清楚的BIOES標示方法
#B(Begin)表示實體開始，I(Inside)表示內部，O(Outside)表示外部，E(End)表示實體結束
import stanza

nlp = stanza.Pipeline(lang='en', processors='tokenize,ner')
doc = nlp("Chris Manning teaches at Stanford University. He lives in the Bay Area.")
print(*[f'token: {token.text}\tner: {token.ner}' for sent in doc.sentences for token in sent.tokens], sep='\n')