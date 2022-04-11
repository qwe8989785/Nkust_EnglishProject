from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from django.shortcuts import render
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.http import FileResponse
from reportlab.pdfgen import canvas

# backend code
from app_speech.code import accuracy as acc
from app_speech.code import translate
from app_speech.code import sentclass
# from app_speech.models import Sentence
# import models
import random
import timeit
import io

# Create your views here.

# web page
#首頁
#/
def Index(request):
    return render(request, 'app_speech/index.html', locals())

#舊的網頁
def speakWeb(request):
    return render(request, 'app_speech/speak.html', locals())

# api

#翻譯
#/sent_translate
@csrf_exempt
def sent_translate(request):
    #判斷傳輸方法是否為POST
    if request.method == 'POST':
        #獲取request裡包含資料
        sent_in = request.POST['sent_input']
        if sent_in is None:
            return JsonResponse({'data': 0})
        else:
            #將獲取到的句子丟到翻譯程式
            payload = translate.translation(sent_in)
    #回傳結果
    return JsonResponse(payload)


#/sent_sum
@csrf_exempt
def sent_len(request):
    if request.method == 'POST':
        sent_in = request.POST['sent_in']
        #將句子丟入記數程式中
        payload = acc.wordCount(sent_in)
    return JsonResponse(payload)


#無使用
#/sent
@csrf_exempt
def nextsent(request):
    try:
        start = timeit.default_timer()
        idrange_max = len(Sentence.objects.all())
        idrandom = random.randint(1, idrange_max)
        sentobj = Sentence.objects.get(id=idrandom)
        tran_out = translate.translation(sentobj.content)
        sent_level = sentclass.my_custom_sql(sentobj.content)
        print(sent_level)
        stop = timeit.default_timer()
        payload = {
            'id': sentobj.id,
            'sum': len(Sentence.objects.all()),
            'content': sentobj.content,
            'transans': tran_out,
            'request-time': stop - start,
            'level': sent_level
        }
    except ObjectDoesNotExist:
        payload = {
            'id': 'error',
            'content': 'error',
        }
    return JsonResponse(payload)

#/classify
@csrf_exempt
def classifyLevel(request):
    if request.method == 'POST':
        sent = request.POST['sent_in']
        sent_level = sentclass.my_custom_sql(sent)
        payload = {'level': sent_level}
    else:
        payload = {'Error': 'Error'}
    return JsonResponse(payload)

#/verfSent
@csrf_exempt
def accuracy(request):
    if request.method == 'POST':
        sents1 = request.POST['sent1']
        sents2 = request.POST['sent2']
        payload = acc.stringVef(sents1, sents2)
    return JsonResponse(payload)
