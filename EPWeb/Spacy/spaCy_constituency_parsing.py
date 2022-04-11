import spacy
from nltk.tree import Tree

nlp = spacy.load('en_core_web_sm')
doc = nlp("I like New York in Autumn.")

def token_format(token):
    return "-> ".join([token.orth_, token.tag_, token.dep_])

def to_nltk_tree(node):
    if node.n_lefts + node.n_rights > 0:        
        return Tree(token_format(node), [to_nltk_tree(child) for child in node.children])
    else:
        return token_format(node)

for sent in doc.sents:
    to_nltk_tree(sent.root).pretty_print(nodedist=4)  #unicodelines=True

to_nltk_tree(sent.root).draw()