import csv
# from app_speech.models import Sentence
# from app_speech.code import sentclass


def decode_utf8(input_iterator):
    for l in input_iterator:
        yield l.decode('utf-8')


def splitdata(data_in):
    # 讀取 CSV 檔案內容
    sentences = data_in.decode('utf-8').splitlines()
    data = []
    for sent in sentences:
        data.append(sent)
    for num in range(len(data)):
        if data[num][0] != "\"":
            sent_content = data[num].split('.,')[0]
            sent_src = data[num].split('.,')[1].split(',')[0]
            sent_date = data[num].split('.,')[1].split(',')[
                1].replace('/', '-')
        else:
            data[num] = data[num].replace('\"', '')
            sent_content = data[num].split('.,')[0]
            sent_src = data[num].split('.,')[1].split(',')[0]
            sent_date = data[num].split('.,')[1].split(',')[
                1].replace('/', '-')
        sent_id = len(Sentence.objects.all()) + 1
        sent_level = sentclass.classifylevel(sent_content)
        if checkdata(sent_content) == True:
            break
            info = "Have duplicate data"
            return info
        p = Sentence(id=sent_id, sent_level=sent_level,
                     content=sent_content, sources=sent_src, dates=sent_date)
        p.save()
    info = "upload success"
    return info


def checkdata(sent_in):
    db_data_sum = len(Sentence.objects.all())
    for num in range(db_data_sum):
        sentobj = Sentence.objects.get(id=(num + 1))
        if sent_in == sentobj.content:
            return True
    return False
