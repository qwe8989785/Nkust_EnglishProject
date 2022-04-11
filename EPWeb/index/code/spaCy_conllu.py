# 這是spaCy的conllu
#This module allows you to parse text into CoNLL-U format.
#https://pypi.org/project/spacy-conll/

import spacy
from spacy_conll import ConllFormatter

def getData(sent):
	nlp = spacy.load('en_core_web_sm')
	conllformatter = ConllFormatter(nlp)
	nlp.add_pipe(conllformatter, after='parser')
	#conll = doc._.conll
	doc = nlp(sent)  #填入句子
	data = []
	for dic in doc._.conll:
		for inside in dic:
			temp = {
				'Id' : inside['id'],
				'form' : inside['form'],
				'lemma' : inside['lemma'],
				'upostag' : inside['upostag'],
				'xpostag' : inside['xpostag'],
				'feats' : inside['feats'],
				'head' : inside['head'],
				'deprel' : inside['deprel'],
				'deps' : inside['deps'],
				'misc' : inside['misc']
			}
			data.append(temp)
	return data