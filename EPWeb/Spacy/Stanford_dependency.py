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
nlp = stanza.Pipeline()
doc = nlp("They bought Jim the gift he always wanted.")

import deplacy
deplacy.render(doc)  #顯示單詞關係
deplacy.serve(doc, port=None)  #顯示conll-u格式

import graphviz
graphviz.Source(deplacy.dot(doc))  #視覺化，deplacy.dot(doc)是可視化的資料

import stanza

nlp = stanza.Pipeline(lang='en', processors='tokenize,mwt,pos')
doc = nlp('Barack Obama was born in Hawaii.')
print(*[f'word: {word.text}\tupos: {word.upos}\txpos: {word.xpos}\tfeats: {word.feats if word.feats else "_"}' for sent in doc.sentences for word in sent.words], sep='\n')