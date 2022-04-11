# 這是spaCy的conllu

import spacy
from spacy_conll import ConllFormatter

nlp = spacy.load('en_core_web_sm')
conllformatter = ConllFormatter(nlp)
nlp.add_pipe(conllformatter, after='parser')

#conll = doc._.conll
doc = nlp('They bought Jim the gift he always wanted.')  #填入句子
print(doc._.conll_str)