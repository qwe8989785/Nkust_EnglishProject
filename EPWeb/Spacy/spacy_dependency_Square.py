import spacy
from spacy import displacy
nlp = spacy.load("en_core_web_sm")
#doc = nlp("Autonomous cars shift insurance liability toward manufacturers")
doc = nlp('Wall Street Journal just published an interesting piece on crypto currencies')

#for token in doc:
#    print(token.text, token.dep_, token.head.text, token.head.pos_,
#            [child for child in token.children])

options = {"compact": True, "bg": "#09a3d5","distance":90,"collapse_phrases":True,"add_lemma":True,
           "color": "white", "font": "Source :Sans Pro","offset_x":80, "arrow_spacing":20}
print(displacy.render(doc, style='dep', jupyter=False, options= options))