from translate import Translator as pytrans
from googletrans import Translator as googletrans
from ibm_watson import LanguageTranslatorV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from google.cloud import translate_v2 as google_translate
from html import unescape
import os
from google_trans_new import google_translator  

#串接IBM_API的翻譯
def ibm_tran(src, tar, input):
    #實體化IBM會員驗證
    authenticator = IAMAuthenticator(
        '')
    #實體化IBM的翻譯機
    language_translator = LanguageTranslatorV3(
        version='2020-06-24',
        authenticator=authenticator
    )
    #設定翻譯機的IBM_API_URL
    language_translator.set_service_url(
        'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/65fcd9cc-3c90-4b89-9fb3-3438c066c597')
    #將句子丟進去進行翻譯
    translation = language_translator.translate(
        text=input,
        source=src,
        target=tar).get_result()
    #回傳翻譯結果
    return translation['translations'][0]['translation']


def google_tran(tar, inputsent):
    #獲得目前所在目錄
    SaveDirectory = os.getcwd()
    #讀取GOOGLE COULD API 金鑰
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = SaveDirectory + '/app_speech/code' +\
        "/gentle-mapper-273215-cfa22db72b63.json"
    #實體化Translater Client
    translate_client = google_translate.Client()
    #將句子依目標語言進行翻譯
    output = translate_client.translate(
        inputsent,
        target_language=tar
    )
    #回傳結果
    return output['translatedText']


def translation(sent):
    #detector = googletrans()
    #實體化translator
    detector = google_translator()
    #判斷句子語言
    language = detector.detect(sent)
    #if language.lang == 'en':
    #如果是英文就翻成中文
    if 'en' in language:
        detect_lang = '英文'
        #translator = pytrans(from_lang="en", to_lang="zh-tw")
        #translation = translator.translate(sent)
        #translation = ibm_tran("en-us", "zh-tw", sent)
        translation = google_tran('zh-tw', sent)
    #elif language.lang == 'zh-CN' or language.lang == 'zh-tw':
    #如果是中文就翻成英文
    elif 'zh-CN' in language or 'zh-tw' in language:
        detect_lang = '中文'
        #translator = pytrans(from_lang="zh-CN", to_lang="en")
        #translation = translator.translate(sent)
        #translation = ibm_tran("zh-TW", "en-us", sent)
        translation = google_tran('en', sent)
    #如果是其他語言就無法判斷
    else:
        detect_lang = 'unable'
        translation = 'Sorry,We can not detect this language'

    payload = {
        'lang': detect_lang,
        'translate': unescape(translation)
    }
    #回傳結果
    return payload
