import requests
import requests.packages.urllib3
import pymysql
import json
import sys
import spacy
from spacy.symbols import nsubj, VERB, nsubjpass, root, expl, AUX

requests.packages.urllib3.disable_warnings()
nlp = spacy.load("en_core_web_sm")
db = pymysql.connect(host='163.18.10.123', port=3306, user='EPuser',
                     passwd='e507@mis', db='entries', charset='utf8mb4')

def flatten_tree(tree):
     return ''.join([token.text_with_ws for token in list(tree)]).strip()

def CompleteSentence(sentence, id_num):
    doc = nlp(sentence)
    print("Sentence ", "==>", doc)
    a_sentence = False
    i = 0
    rowstring = []
    muliRoot = 0
    
    for word2 in doc:
        if (word2.dep_ == "ROOT"):
            muliRoot += 1
    
    for token in doc:
        rowstring = [doc[i].text, token.tag_, token.pos_, token.dep_, flatten_tree(doc[i].subtree)]
        subtree_text = rowstring[4]
        
        if len(subtree_text.split()) > 1:  # 判斷至少是複數的單詞組合
            if sentence.split() == subtree_text.split():
                for word in doc:
                    if (word.dep_ == "nsubj" or word.dep_ == "nsubjpass" or word.dep_ == "expl") and (word.head.pos == VERB or word.head.tag_ == "VB" or word.head.tag_ == "VBD" or word.head.pos_ == "VBG" or word.head.pos_ == "VBN" or word.head.pos_ == "VBP", word.head.pos_ == "VBZ"):
                        a_sentence = True
            elif muliRoot > 1:
                for word in doc:
                    if word.dep == nsubj and word.head.pos == AUX:
                        a_sentence = True 
        i += 1
    if a_sentence == True:
        sql = f"UPDATE sent SET sent.CompleteSentence = 1 WHERE id = {id_num}"
    elif a_sentence == False:
        sql = f"UPDATE sent SET sent.CompleteSentence = 0 WHERE id = {id_num}"
    cursor.execute(sql)
    db.commit()
    #return a_sentence, id_num
    return sql