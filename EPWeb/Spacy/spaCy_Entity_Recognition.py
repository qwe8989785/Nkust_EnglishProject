# 以下提供3種Named Entity的方式

#第一種
#一般的Named Entity
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.")

for ent in doc.ents:
    print(ent.text, '\t', ent.label_)

#第二種
#可視化的Named Entity
import spacy
from spacy import displacy

text = "When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously."

nlp = spacy.load("en_core_web_sm")
doc = nlp(text)
displacy.render(doc, style="ent")

#第三種
#BIOES的Named Entity
#B(Begin)表示實體開始，I(Inside)表示內部，O(Outside)表示外部，E(End)表示實體結束
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.")

for X in doc:
    if (X.ent_type_):
        entity_type = f'-{X.ent_type_}'
    else:
        entity_type = ''
    print(*[f'token: {X}\tner: {X.ent_iob_}{entity_type}'])