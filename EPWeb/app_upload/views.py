from django.shortcuts import render
from django.utils.datastructures import MultiValueDictKeyError
from app_speech.models import Sentence
from app_upload.code import csvproccess as csv_pcs
# from app_speech.code import sentclass
# Create your views here.


def uploadsentence(request):
    try:
        upload_file = request.FILES['document']
        csv_pcs.splitdata(upload_file.read())
    except BaseException:
        upload_file = False
    sentobj = Sentence.objects.all()
    payload = {
        'sentobj': sentobj,
    }
    return render(request, 'app_upload/sentence.html', payload)
