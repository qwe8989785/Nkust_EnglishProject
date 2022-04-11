import spacy
from spacy import displacy
from pathlib import Path
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
from io import BytesIO,StringIO
import base64

#與Dependency_Image.py相同
def getImage(sent):
	nlp = spacy.load("en_core_web_sm")
	#doc = nlp("Autonomous cars shift insurance liability toward manufacturers")
	doc = nlp(sent)

	#for token in doc:
	#    print(token.text, token.dep_, token.head.text, token.head.pos_,
	#            [child for child in token.children])
	options = {"compact": True, "bg": "#09a3d5","distance":90,"collapse_phrases":True,"add_lemma":True,"color": "black", "font": "Times New Roman","Source" :"Sans Pro","offset_x":80, "arrow_spacing":20}
	svg = displacy.render(doc, style='dep', jupyter=False, options= options)
	svgIo = StringIO()
	svgIo.write(svg)
	svgIo.seek(0)
	imgIo = BytesIO()
	drawing = svg2rlg(svgIo)
	renderPM.drawToFile(drawing, imgIo, fmt='PNG')
	imgIo.seek(0)
	imageB64 = str(base64.b64encode(imgIo.read()))[2:-1]
	return imageB64
