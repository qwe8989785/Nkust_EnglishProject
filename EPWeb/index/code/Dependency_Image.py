#這份的圖檔會可以轉成.svg，也可以改成.png

import spacy
from spacy import displacy

from pathlib import Path
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
from io import BytesIO,StringIO
import base64
def getImage(sent):
    #載入nlp模型
	nlp = spacy.load("en_core_web_sm")
    #分析句子
	doc = nlp(sent)
	svg2 = ""
    #儲存詞袋各種標籤
	for token in doc:
	    token_text = token.text
	    token_pos = token.pos_  #詞性標籤
	    token_dep = token.dep_  #相關性標籤
	    #print(f"{token_text:<12}{token_pos:<10}{token_dep:<10}")  #數字是空格
	    svg2 += (f"{token_text:<12}{token_pos:<10}{token_dep:<10}\n")
	#displacy.render(doc, style="dep", jupyter=True)
    #使用displacy產生svg圖表
	svg = displacy.render(doc, style="dep")
    #實體化一個StringIO暫存器
	svgIo = StringIO()
    #將剛剛產生的圖表以字串方式寫入暫存
	svgIo.write(svg)
    #指針回到0
	svgIo.seek(0)
    #再實體化一個BytesIO暫存器
	imgIo = BytesIO()
    #將暫存的svg丟入svg2rlg
	drawing = svg2rlg(svgIo)
    #使用drawTofile方法寫入到ImgIo暫存裡並儲存成PNG
	renderPM.drawToFile(drawing, imgIo, fmt='PNG')
    #指針歸零
	imgIo.seek(0)
    #再將PNG轉成base64回傳
	imageB64 = str(base64.b64encode(imgIo.read()))[2:-1]
    #藉由暫存器便不用儲存在本機資料夾
	return imageB64
	#output_path = Path("./testImage.svg")
	#output_path.open("w", encoding="utf-8").write(svg)

	#drawing = svg2rlg('./testImage.svg')
	#renderPM.drawToFile(drawing, './testImage.png', fmt='PNG')

	#output_path2 = Path("./testPOS.svg")
	#output_path2.open("w", encoding="utf-8").write(svg2)