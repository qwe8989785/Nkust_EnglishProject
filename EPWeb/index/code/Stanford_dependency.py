# 這是Stanford(Stanza)的Dependency、conllu

'''
import stanza
#下載stanza
stanza.download('en') # This downloads the English models for the neural pipeline# IMPORTANT: The above line prompts you before downloading, which doesn't work well in a Jupyter notebook.# To avoid a prompt when using notebooks, instead use: >>> stanza.download('en', force=True)
nlp = stanza.Pipeline() # This sets up a default neural pipeline in English
doc = nlp("Barack Obama was born in Hawaii. He was elected president in 2008.")
doc.sentences[0].print_dependencies()
'''

import stanza
import deplacy
import graphviz
import stanza
def getData(sent):
	nlp = stanza.Pipeline(lang='en', processors='tokenize,mwt,pos')
	doc = nlp(sent)
	data = []
	for sent in doc.sentences :
		for word in sent.words:
			temp = {
				'text' : word.text,
				'upos' : word.upos,
				'xpos' : word.xpos,
				'feats' : word.feats,

			}
			data.append(temp)
	return data
	#print(*[f'word: {word.text}\tupos: {word.upos}\txpos: {word.xpos}\tfeats: {word.feats if word.feats else "_"}' for sent in doc.sentences for word in sent.words], sep='\n')