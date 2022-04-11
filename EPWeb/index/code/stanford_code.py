import stanza

def POS(sent):
    stanza.download('en')
    feedback ={
        'text':[],
        'xpos':[],
        'upos':[]
    }
    nlp = stanza.Pipeline(lang='en',processors='tokenize,mwt,pos')
    doc = nlp(sent)
    for sent in doc.sentences:
        for word in sent.words:
            feedback['text'].append(word.text)
            feedback['xpos'].append(word.xpos) # 詞性標注(UPOS)
            feedback['upos'].append(word.upos) # 詞性標注(XPOS)
        # print("Sentence：" + sent.text) # 斷句 
        # print("UPOS: " + ' '.join(f'{word.upos}' for word in sent.words)) # 詞性標注（UPOS）
        # print("XPOS: " + ' '.join(f'{word.xpos}' for word in sent.words)) # 詞性標注（XPOS）
    return feedback
