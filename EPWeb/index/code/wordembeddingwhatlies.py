# -*- coding: utf-8 -*-
"""WordEmbeddingWhatlies.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/18FwzbUOR_c1F0-LzyC_VUvSAgsWuppCW

# Whatlies: Word Embedding Visualization
Make interactive visualisations to figure out 'what lies' in word embeddings.This small library offers tools to make visualisation easier of both word embeddings as well as operations on them. It has support for spaCy prebuilt models as a first class citizen but also offers support for sense2vec. There's a convenient API to perform linear algebra as well as support for popular transformations like PCA/UMAP/etc.
"""


from io import StringIO
import spacy
from whatlies import EmbeddingSet
from whatlies.language import SpacyLanguage
import json
#from altair_saver import save

def whatliesEmbedding(words,labels):
	lang = SpacyLanguage('en_core_web_md')
	emb = lang[words]
	plot = emb.plot_interactive(labels[0],labels[1])
	jsonIo = StringIO()
	plot.save(jsonIo,format='json')
	return json.loads(jsonIo.getvalue())

