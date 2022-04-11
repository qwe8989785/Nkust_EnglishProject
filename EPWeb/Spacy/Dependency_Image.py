#這份的圖檔會可以轉成.svg，也可以改成.png

import spacy
from spacy import displacy

from pathlib import Path
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM

nlp = spacy.load("en_core_web_sm")

doc = nlp("Can you remind me that I need to buy some milk?")
svg2 = ""
for token in doc:
    token_text = token.text
    token_pos = token.pos_  #詞性標籤
    token_dep = token.dep_  #相關性標籤
    print(f"{token_text:<12}{token_pos:<10}{token_dep:<10}")  #數字是空格
    svg2 += (f"{token_text:<12}{token_pos:<10}{token_dep:<10}\n")

#displacy.render(doc, style="dep", jupyter=True)
svg = displacy.render(doc, style="dep")

output_path = Path("./testImage.svg")
output_path.open("w", encoding="utf-8").write(svg)

drawing = svg2rlg('./testImage.svg')
renderPM.drawToFile(drawing, './testImage.png', fmt='PNG')

output_path2 = Path("./testPOS.svg")
output_path2.open("w", encoding="utf-8").write(svg2)