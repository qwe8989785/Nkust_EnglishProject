from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from speechPratice.code import sent,languageTool,sentenceStructure,emoji

#/getSentbyChar
@csrf_exempt
def getSentByChar(request):
    #判斷傳輸方式
    if request.method == 'POST':
        #獲取傳輸資料
        charCount = request.POST.get('Char',False)
        Level = request.POST.get('Level',False)
        #若無資料回傳error
        if charCount == False or Level == False:
            return JsonResponse({'info': 'error'})
        #將資料丟至子程式
        feedback = sent.getSentbyChar(charCount,Level)
        #回傳子程式執行結果
        if feedback == False:
            return JsonResponse({'data':'Cannot find sentence！'})
        else:
            return JsonResponse(feedback)
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/getSentbyLevel
@csrf_exempt
def getSentByLevel(request):
    if request.method == 'POST':
        Level = request.POST.get('Level',False)
        if Level == False:
            return JsonResponse({'info': 'error'})
        feedback = sent.getSentbyLevel(Level)
        if feedback == False:
            return JsonResponse({'data':'Cannot find sentence！'})
        else:
            return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/checkSentGrammar
@csrf_exempt
def checkSentGrammar(request):
    if request.method == 'POST':
        sent = request.POST.get('sent-in',False)
        if sent == False:
            return JsonResponse({'info': 'error'})
        feedback = languageTool.checkGrammar(sent)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/checkSentStructure
@csrf_exempt
def checkSentStructure(request):
    if request.method == 'POST':
        sent = request.POST.get('sent-in',False)
        if sent == False:
            return JsonResponse({'info': 'error'})
        feedback = sentenceStructure.sentenceType(sent)
        return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/getPracticeSent
@csrf_exempt
def getPracticeSent(request):
    if request.method == 'POST':
        Level = request.POST.get('sentenceLevel',False)
        Topic = request.POST.get('topicName',False)
        if Level == False or Topic == False:
            return JsonResponse({'info': 'error'})
        feedback = sent.getPracticeSent(Topic,Level)
        if feedback == False:
            return JsonResponse({'data':'Cannot find sentence！'})
        else:
            return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})

#/getEmoji
@csrf_exempt
def getEmoji(request):
    if request.method == 'POST':
        name = request.POST.get('emojiName',False)
        if name == False :
            return JsonResponse({'info': 'error'})
        feedback = emoji.getEmojiByName(name)
        if feedback == False:
            return JsonResponse({'data':'Cannot find emoji！'})
        else:
            return JsonResponse({'data':feedback})
       #return JsonResponse({'data':feedback})
    return JsonResponse({'info': 'error'})
