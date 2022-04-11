import os,string
from app_speech.code import accuracy as acc
import eng_to_ipa 
import pymysql
#post DialogFlow project bot normal
def detect_intent_texts(session_id, texts, language_code):
    """Returns the result of detect intent with texts as inputs.

    Using the same `session_id` between requests allows continuation
    of the conversation."""
    #普通版IMPORT這個
    import dialogflow as dialogflow
    #拿取GOOGLE服務金鑰
    SaveDirectory = os.getcwd()
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = SaveDirectory + '/index/code' +\
        "/chatbotToken.json"
    
    #設定你的dialogFlow projectId
    project_id = "listenenglishspeakenglish-qktu"
    #實體化SessionClient
    session_client = dialogflow.SessionsClient()
    
    #設定你的對話要存在哪個session或讀取之前哪個session
    session = session_client.session_path(project_id, session_id)
    print('Session path: {}\n'.format(session))
    
    #輸入你要傳給DialogFlow bot 的語句
    text_input = dialogflow.types.TextInput(
        text=texts, language_code=language_code)
    
    #實體化查詢
    query_input = dialogflow.types.QueryInput(text=text_input)
    
    #對ChatBot發出請求
    response = session_client.detect_intent(
        session=session, query_input=query_input)
    
    #回傳結果
    detected_intent = '{} (confidence: {})\n'.format(
        response.query_result.intent.display_name,
        response.query_result.intent_detection_confidence)
    #自訂義return
    data = {
    	'QueryText' : response.query_result.query_text,
    	'Detected intent' : detected_intent,
    	'FulfillmentText' : response.query_result.fulfillment_text
    }
    return data

#post DialogFlow project bot with knowledgebase
def detect_intent_knowledge(session_id, language_code,texts):
    """Returns the result of detect intent with querying Knowledge Connector.

    Args:
    project_id: The GCP project linked with the agent you are going to query.
    session_id: Id of the session, using the same `session_id` between requests
              allows continuation of the conversation.
    language_code: Language of the queries.
    knowledge_base_id: The Knowledge base's id to query against.
    texts: A list of text queries to send.
    """
    #使用knowledgebase請import這個
    import dialogflow_v2beta1 as dialogflow
    SaveDirectory = os.getcwd()
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = SaveDirectory + '/index/code' +\
        "/chatbotToken.json"
    project_id = "listenenglishspeakenglish-qktu"
    knowledge_base_id = "Mjc3MjU3OTA5ODEzNDgzOTI5Ng"
    session_client = dialogflow.SessionsClient()

    session_path = session_client.session_path(project_id, session_id)
    print('Session path: {}\n'.format(session_path))

    
    text_input = dialogflow.types.TextInput(
        text=texts, language_code=language_code)

    query_input = dialogflow.types.QueryInput(text=text_input)
    
    #輸入knowledgebase的Id
    knowledge_base_path = dialogflow.knowledge_bases_client \
        .KnowledgeBasesClient \
        .knowledge_base_path(project_id, knowledge_base_id)
        
    #設定查詢參數
    query_params = dialogflow.types.QueryParameters(
        knowledge_base_names=[knowledge_base_path])

    response = session_client.detect_intent(
        session=session_path, query_input=query_input,
        query_params=query_params)
    detected_intent = '{} (confidence: {})\n'.format(
        response.query_result.intent.display_name,
        response.query_result.intent_detection_confidence)
    data = {
    	'QueryText' : response.query_result.query_text,
    	'Detected intent' : detected_intent,
    	'FulfillmentText' : response.query_result.fulfillment_text,
    	'knowledge_answer' : []
    }
    print('Knowledge results:')
    knowledge_answers = response.query_result.knowledge_answers
    for answers in knowledge_answers.answers:
        data['knowledge_answer'].append(answers.answer)
     
    return data

#自訂義Chatbot程式，使用自訂的流程。
def detect_LESE(level,true_count,fail_count,random_question,user_answer,session_id,language_code):
    #CERF等級列表
    levelList = ['A1','A2','B1','B2','C1','C2']
    #輸入為012345
    level = levelList.index(level) + 1
    #去除特殊符號
    for w in string.punctuation:
        random_question = random_question.replace(w," ")
        user_answer = user_answer.replace(w," ")
    #判斷題目跟使用者回答是否相同
    vef = acc.stringVef(random_question,user_answer)
    if vef['similarity'] > 0.75:  # 粗略判斷是否一樣
        true_count += 1
        if true_count == 3:
            Status = 'correct3time'
            result_answer = detect_intent_knowledge(session_id,language_code,Status) 
            if level != 5:
                level += 1
            if level > 5 :
                level = 5
            true_count = 0
            fail_count = 0
        else:
            Status = 'correct'
            result_answer = detect_intent_knowledge(session_id,language_code,Status)  
    else:
        if (fail_count < 3):
            Status = 'error'
            result_answer = detect_intent_knowledge(session_id,language_code,Status)
            fail_count += 1
        else:
            Status = 'error3time'
            result_answer = detect_intent_knowledge(session_id,language_code,Status)
            true_count = 0
            fail_count = 0
            if level != 1:
                level -= 1
            if level < 1 : 
                level = 1
    
    errorSentenceArray = []
    
    db = pymysql.connect(host='163.18.10.123', port=3306,
                         user='EPuser', passwd='e507@mis', db='entries', charset='utf8mb4')
    cursor = db.cursor()
    
    for word in vef['Error']:
        sql = f"select s.Content,t.topicName,s.Chinese,s.Translate_Eng,s.Similarity from senthasword as w join TopicList as t,sent as s,senttopictemp as st where w.word = '{word}' and w.sentId = s.Id and st.sentId = w.sentId and st.topicId = t.Id and s.Chinese is not null;"
        cursor.execute(sql)
        result = cursor.fetchone()
        if result != None:
            sent = {
                'Content' : result[0],
                'sentTopic' : result[1],
                'Chinese' : result[2],
                'Translate_Eng' : result[3],
                'Similarity' : result[4]
            }
            errorSentenceArray.append(sent)
        else:
            errorSentenceArray.append('None')
    
    db.close()
    
    data = {
        'issueIPA' : eng_to_ipa.convert(random_question),
        'issueText' : random_question,
        'AnswerIPA' : eng_to_ipa.convert(user_answer),
        'replyText': result_answer,
        'AnswerText' : user_answer,
        'true_count' : true_count,
        'fail_count' : fail_count,
        'level' : levelList[level-1],
        'Status' : Status,
        'vef' : vef['similarity'],
        'ErrorWord' : vef['Error'],
        'errorSentenceArray' : errorSentenceArray
    }
    return data