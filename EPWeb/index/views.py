from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json,requests
from index.code import synword
# from index.code import spacy_code
from index.code import stanford_code
from index.code import getSentData
from index.code import VocabularyGraphical as VG
from index.code import (Dependency_Image ,spaCy_conllu,spaCy_Entity_Recognition
    ,Stanford_dependency ,Stanza_Entity_Recognition,spacypipeline,
    wordembeddingwhatlies,spacy_dependency_Square,chatbotBack,spaCy_displacy,wiktionary,sentstructure,spacy_code,bertTest)
from index.code import chatbotBack
from speechPratice.code import sent
import string

# Create your views here.

#/userindex
def loadindex(request):
    return render(request, 'index/userindex.html', locals())

#/vocabulary
def vocabulary(request):
    return render(request, 'index/vocabulary.html', locals())

#/sentence
def sentence(request):
    return render(request, 'index/sentence.html', locals())

#/spaCy
def spaCy(request):
    return render(request, 'index/spaCy.html', locals())

#/stanford'
def stanford(request):
    return render(request, 'index/stanford.html', locals())

#/chatbot
def chatbot(request):
    return render(request, 'index/chatbot.html', locals())

#/bert
def bert(request):
    return render(request, 'index/bert.html', locals())

#/test
def test(request):
    return render(request, 'index/test.html', locals())

#/dependency_parsing
def dependency_parsing(request):
    return render(request, 'index/dependency_parsing.html',locals())

#/vocabulary_graphical
def vocabulary_graphical(request):
    return render(request, 'index/vocabulary_graphical.html',locals())

#/sentence_segmentation
def sentence_segmentation(request):
    return render(request, 'index/sentence_segmentation.html',locals())

#/tokenization
def tokenization(request):
    return render(request, 'index/tokenization.html',locals())

#/part_of_speech_tagging
def part_of_speech_tagging(request):
    return render(request, 'index/part_of_speech_tagging.html',locals())

#/named_entity_recognition
def named_entity_recognition(request):
    return render(request, 'index/named_entity_recognition.html',locals())

#/shallow_parsing
def shallow_parsing(request):
    return render(request, 'index/shallow_parsing.html',locals())

#/constituency_parsing
def constituency_parsing(request):
    return render(request,'index/constituency_parsing.html',locals())

#/chatbot
def chatbot(request):
    return render(request,'index/chatbot.html',locals())

#/strcutre
def strcutre(request):
    return render(request,'index/strcutre.html',locals())

#/words
def words(request):
    return render(request,'index/words.html',locals())
  
#/getVgWord
@csrf_exempt
def getSyn(request):
    #判斷傳輸方式
    if request.method == 'POST':
        #獲取傳輸資料
        word = request.POST.get('word',False)
        #若無資料回傳error
        if word == False:
            return JsonResponse({'info': 'error'})
        #將資料丟至子程式
        feedback = synword.syn(word)
        #回傳子程式執行結果
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spacy_POS
@csrf_exempt
def spacy_POS(request):
    if request.method == 'POST':
        sentin = request.POST['sent-in']
        feedback = spacy_code.POS(sentin)
        return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/stanford_POS
@csrf_exempt
def stanford_POS(request):
    if request.method == 'POST':
        sentin = request.POST['sent-in']
        feedback = stanford_code.POS(sentin)
        return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/getSent
@csrf_exempt
def getSent(request):
    if request.method == 'POST':
        level = request.POST.get('level',False)
        source = request.POST.get('source',False)
        if level == False or source == False:
            return JsonResponse({'info': 'error'})
        feedback = getSentData.getData(level,source)
        return JsonResponse(feedback)
    return JsonResponse({'info': 'error'})

#/getRandSent
@csrf_exempt
def getRandSent(request):
    if request.method == 'POST':
        feedback = getSentData.getRand()
        return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/getVgData
@csrf_exempt
def getVgData(request):
    if request.method == 'POST':
        level = request.POST.get('level',False)
        levelList = ['A1','A2','B1','B2','C1','C2','All']
        if level == False or level not in levelList:
            return JsonResponse({'info': 'error'})
        feedback = VG.getData(level)
        return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/getWordCount
@csrf_exempt
def getWordCount(request):
    if request.method == 'POST':
        feedback = synword.getWordCount()
        return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/getSentCount
@csrf_exempt
def getSentCount(request):
    if request.method == 'POST':
        Source = request.POST.get('Source',False)
        SourceList = ['WordNet','Tatoeba','all']
        if Source == False or Source not in SourceList:
            return JsonResponse({'info': 'error'})
        feedback = synword.getSentCount(Source)
        return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_dependency
@csrf_exempt
def spaCy_dependency(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = Dependency_Image.getImage(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_Conllu
@csrf_exempt
def spaCy_Conllu(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spaCy_conllu.getData(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/stanza_ER
@csrf_exempt
def stanza_ER(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        _type_ = request.POST.get('type',False)
        if sentin == False or _type_ == False:
            return JsonResponse({'info': 'error'})
        feedback = Stanza_Entity_Recognition.getData(sentin,_type_)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_ER
@csrf_exempt
def spaCy_ER(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spaCy_Entity_Recognition.getData(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/stanford_dependency
@csrf_exempt
def stanford_dependency(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = Stanford_dependency.getData(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_splitSent
@csrf_exempt
def spaCy_splitSent(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spacypipeline.splitSent(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_tokenization
@csrf_exempt
def spaCy_tokenization(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spacypipeline.tokenization(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_lemmatization
@csrf_exempt
def spaCy_lemmatization(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spacypipeline.lemmatization(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_splitByPOS
@csrf_exempt
def spaCy_splitByPOS(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spacypipeline.splitByPOS(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_extractPhrase
@csrf_exempt
def spaCy_extractPhrase(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spacypipeline.extractPhrase(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_extractNounChunk
@csrf_exempt
def spaCy_extractNounChunk(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spacypipeline.extractNounChunk(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})
    
#/spaCy_squareDependency
@csrf_exempt
def spaCy_squareDependency(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spacy_dependency_Square.getImage(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_vis
@csrf_exempt
def spaCy_vis(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = spaCy_displacy.annotate(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/whatliesEmbedding
@csrf_exempt
def whatEmb(request):
    if request.method == 'POST':
        inputJson = json.loads(request.body)
        try:
            words = inputJson['words']
            labels = inputJson['labels']
        except Exception as e:
            return JsonResponse({'info': 'error'})
        result = wordembeddingwhatlies.whatliesEmbedding(words,labels)
        return JsonResponse({'data':result})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/dialogDetect
@csrf_exempt
def dialogDetect(request):
    if request.method == 'POST':
        inputJson = json.loads(request.body)
        try:
            session_id = inputJson['session_id']
            texts = inputJson['texts']
            language_code = inputJson['language_code']
        except Exception as e:
            return JsonResponse({'info': 'error'})
        result = chatbotBack.detect_intent_knowledge(session_id,language_code,texts)
        return JsonResponse({'data':result})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/wiktionary
@csrf_exempt
def wikiQuery(request):
    if request.method == 'POST':
        word = request.POST.get('word',False)
        if word == False:
            return JsonResponse({'info': 'error'})
        feedback = wiktionary.getWikiResource(word)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/spaCy_strcutre
@csrf_exempt
def spaCy_strcutre(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = sentstructure.structure(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/bertSpace
@csrf_exempt
def bertSpace(request):
    if request.method == 'POST':
        sentin = request.POST.get('sent-in',False)
        if sentin == False:
            return JsonResponse({'info': 'error'})
        feedback = bertTest.precition(sentin)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/LESE_detect
@csrf_exempt
def LESE_detect(request):
    if request.method == 'POST':
        try:
            inputJson = json.loads(request.body)
            level = inputJson['level']
            true_count = inputJson['true_count']
            fail_count = inputJson['fail_count']
            random_question = inputJson['random_question']  
            user_answer = inputJson['user_answer']
            session_id = inputJson['session_id']
            language_code = inputJson['language_code']
            result_answer = ""
            Status = ""
        except:
            return JsonResponse({'info': 'error'})
        result = chatbotBack.detect_LESE(level,true_count,fail_count,random_question,user_answer,session_id,language_code)
        return JsonResponse({"data": result,
                            "info" : 'sucess'})
    return JsonResponse({'info': 'error'})

#/getWordList
@csrf_exempt
def getWordList(request):
    if request.method == 'POST':
        feedback = getSentData.getWord()
        return JsonResponse(feedback)
    return JsonResponse({'info': 'error'})

#/getSentByWord
@csrf_exempt
def getSentByWord(request):
    if request.method == 'POST':
        Word = request.POST.get('Word',False)
        if Word == False :
            return JsonResponse({'info': 'error'})
        feedback = getSentData.getSentByWord(Word)
        return JsonResponse(feedback)
    return JsonResponse({'info': 'error'})

#/getSentChinese
@csrf_exempt
def getSentChinese(request):
    if request.method == 'POST':
        Sent = request.POST.get('Sent',False)
        if Sent == False:
            return JsonResponse({'info': 'error'})
        feedback = getSentData.getSentChinese(Sent)
        return JsonResponse(feedback)
    return JsonResponse({'info': 'error'})

#/getSentbyTopic
@csrf_exempt
def getSentByTopic(request):
    if request.method == 'POST':
        topic = request.POST.get('topic',False)
        if topic == False:
            return JsonResponse({'info': 'error'})
        feedback = getSentData.getSentByTopic(topic)
        return JsonResponse(feedback)
    return JsonResponse({'info': 'error'})

#/getTopics
@csrf_exempt
def getTopics(request):
    if request.method == 'POST':
        feedback = getSentData.getTopics()
        return JsonResponse(feedback)
    return JsonResponse({'info': 'error'})

#/getSentById
@csrf_exempt
def getSentById(request):
    if request.method == 'POST':
        Id = request.POST.get('Id',False)
        if Id == False:
            return JsonResponse({'info': 'error'})
        feedback = getSentData.getSentById(Id)
        return JsonResponse(feedback)
    return JsonResponse({'info': 'error'})