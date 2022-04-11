import spacy
from spacy import displacy


#doc = nlp("She did not cheat on the test, for it was the wrong thing to do.")

def sentenceType(sent):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sent)
    compound_sentence = False
    complex_sentence = False
    simple_sentence = False
    compound_complex_sentence = False
    mult_predicate = False
    dependent_type = False
    sconj = False
    nsubj_num = 0
    sentence_structure = ""
    
    for token in doc:
        if (token.pos_ == "VERB" or token.pos_ == "AUX") and (token.dep_ == "conj" or token.dep_ == "ccomp") or token.text == ";":
            mult_predicate = True
        if (token.pos_ == "VERB" or token.pos_ == "AUX") and (token.dep_ == "advcl"):
            dependent_type = True
        if (token.pos_ == "SCONJ") and (token.dep_ == "mark"):
            sconj = True
        if token.dep_ == "nsubj":
            nsubj_num += 1
    
    if (mult_predicate == True) and (nsubj_num > 1):   
        sentence_structure = "compound_sentence"
    elif (dependent_type == True) and (nsubj_num > 1) or (sconj == True):
        sentence_structure = "complex_sentence"
    elif compound_sentence == True and complex_sentence == True:  
        sentence_structure = "compound_complex_sentence"
    elif nsubj_num == 1:
        sentence_structure = "simple_sentence"
        
    return sentence_structure