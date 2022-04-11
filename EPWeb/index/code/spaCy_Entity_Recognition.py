
#一般的Named Entity
import spacy
from spacy import displacy
from io import BytesIO, StringIO
import base64
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
from pathlib import Path


def getData(sent):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sent)
    data = []
    for X in doc:
        if (X.ent_type_):
            temp = {'text': X.text, 'label': X.ent_type_}
            data.append(temp)
        else:
            temp = {'text': X.text, 'label': "NULL"}
            data.append(temp)
    return data
