import stanza
import deplacy

from pathlib import Path
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM

nlp = stanza.Pipeline()
doc = nlp("They bought Jim the gift he always wanted.")

#deplacy.render(doc)  #顯示單詞關係
deplacy.serve(doc, port=None)  #顯示conll-u格式