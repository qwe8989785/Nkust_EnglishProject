"""EPWeb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app_speech import views as speech_views
from app_upload import views as upload_views
from index import views as index_views
from speechPratice import views as nsp_views

urlpatterns = [
    #path('speakv=1', views.home,),
    #path('speech', views.SpeechWeb),
    path('userindex', index_views.loadindex),
    path('vocabulary', index_views.vocabulary),
    path('sentence', index_views.sentence),
    path('stanford',index_views.stanford),
    path('spaCy', index_views.spaCy),
    path('chatbot', index_views.chatbot),
    path('dependency_parsing', index_views.dependency_parsing),
    path('vocabulary_graphical',index_views.vocabulary_graphical),
    path('sentence_segmentation',index_views.sentence_segmentation),
    path('tokenization',index_views.tokenization),
    path('named_entity_recognition',index_views.named_entity_recognition),
    path('part_of_speech_tagging',index_views.part_of_speech_tagging),
    path('shallow_parsing',index_views.shallow_parsing),
    path('constituency_parsing',index_views.constituency_parsing),
    path('chatbot',index_views.chatbot),
    path('test',index_views.test),
    path('strcutre',index_views.strcutre),
    path('bert',index_views.bert),
    path('words',index_views.words),
    path('', speech_views.Index),
    path('sent_sum', speech_views.sent_len),
    path('sent_translate', speech_views.sent_translate),
    path('sent', speech_views.nextsent),
    path('verfSent', speech_views.accuracy),
    path('classify', speech_views.classifyLevel),
    path('upload', upload_views.uploadsentence),
    path('getSent', index_views.getSent),
    path('getRandSent', index_views.getRandSent),
    path('getVgData', index_views.getVgData),
    path('spaCy_dependency', index_views.spaCy_dependency),
    path('spaCy_Conllu', index_views.spaCy_Conllu),
    path('spaCy_ER', index_views.spaCy_ER),
    path('stanza_ER', index_views.stanza_ER),
    path('stanford_dependency', index_views.stanford_dependency),
    path('spacy_POS',index_views.spacy_POS),
    path('stanford_POS',index_views.stanford_POS),
    path('spaCy_splitSent', index_views.spaCy_splitSent),
    path('spaCy_tokenization', index_views.spaCy_tokenization),
    path('spaCy_lemmatization', index_views.spaCy_lemmatization),
    path('spaCy_splitByPOS', index_views.spaCy_splitByPOS),
    path('spaCy_extractPhrase', index_views.spaCy_extractPhrase),
    path('spaCy_extractNounChunk', index_views.spaCy_extractNounChunk),
    path('getVgWord', index_views.getSyn),
    path('spaCy_squareDependency', index_views.spaCy_squareDependency),
    path('getWordCount', index_views.getWordCount),
    path('getSentCount', index_views.getSentCount),
    path('spaCy_vis', index_views.spaCy_vis),
    path('whatliesEmbedding', index_views.whatEmb),
    path('dialogDetect', index_views.dialogDetect),
    path('wiktionary', index_views.wikiQuery),
    path('spaCy_strcutre', index_views.spaCy_strcutre),
    path('bertSpace', index_views.bertSpace),
    path('LESE_detect', index_views.LESE_detect),
    path('getSentbyChar', nsp_views.getSentByChar),
    path('getWordList', index_views.getWordList),
    path('getSentByWord', index_views.getSentByWord),
    path('getSentChinese', index_views.getSentChinese),
    path('getSentbyTopic', index_views.getSentByTopic),
    path('getTopics', index_views.getTopics),
    path('getSentById', index_views.getSentById),
    path('getSentbyLevel', nsp_views.getSentByLevel),
    path('checkSentGrammar', nsp_views.checkSentGrammar),
    path('checkSentStructure', nsp_views.checkSentStructure),
    path('getPracticeSent', nsp_views.getPracticeSent),
    path('getEmoji', nsp_views.getEmoji)
]
