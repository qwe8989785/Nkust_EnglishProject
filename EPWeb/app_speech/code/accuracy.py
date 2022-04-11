from nltk import word_tokenize
from math import sqrt
from decimal import Decimal
from nltk.tokenize import RegexpTokenizer

#計算句子向量
def vector_rep(text, corpus_dict):
    vec = []
    for key in corpus_dict.keys():
        if key in text:
            vec.append((corpus_dict[key], text.count(key)))
        else:
            vec.append((corpus_dict[key], 0))

    vec = sorted(vec, key=lambda x: x[0])

    return vec

#用兩句子的向量計算彼此相似度
def similarity_with_2_sents(vec1, vec2):
    inner_product = 0
    square_length_vec1 = 0
    square_length_vec2 = 0
    for tup1, tup2 in zip(vec1, vec2):
        inner_product += tup1[1]*tup2[1]
        square_length_vec1 += tup1[1]**2
        square_length_vec2 += tup2[1]**2

    return (inner_product/sqrt(square_length_vec1*square_length_vec2))


#比對相似度主程式
def stringVef(s1, s2):
    sents = [s1, s2]
    #將詞袋取出
    texts = [[word for word in word_tokenize(sent)] for sent in sents]
    all_list = []
    #將所有詞彙存入ALL_LIST
    for text in texts:
        all_list += text
    corpus = set(all_list)
    #轉換詞袋陣列為字典
    corpus_dict = dict(zip(corpus, range(len(corpus))))
    #將句子依照所有詞彙計算向量
    vec1 = vector_rep(texts[0], corpus_dict)
    vec2 = vector_rep(texts[1], corpus_dict)
    #將向量精準化為十進制
    cosine_sim = Decimal(str(similarity_with_2_sents(
        vec1, vec2))).quantize(Decimal('0.00'))
    
    #以下為比對兩句之間不同處
    errorArr = []
    #先判斷哪個字串比較長
    if (len(texts[1]) >= len(texts[0])):
        #迴圈比對兩句字彙
        for i in range(len(texts[1])):
            if(texts[1][i] != '.'):
                if(i >= len(texts[0])):
                    if(texts[1][i] not in errorArr and texts[1][i] not in texts[0]):
                        errorArr.append(texts[1][i])
                else:
                    if(texts[1][i] != texts[0][i]):
                        if i+1 < len(texts[1]):
                            if(texts[0][i] == texts[1][i+1]):
                                texts[0].insert(i, 'x')
                        if(texts[1][i] not in errorArr):
                            errorArr.append(texts[1][i])
    else:
        for i in range(len(texts[0])):
            if(texts[0][i] != '.'):
                # if( i >= len(texts[1])):
                # if(texts[0][i] not in errorArr and texts[0][i] not in texts[1]):
                # errorArr.append(texts[0][i])
                # else:
                if(i <= len(texts[1])-1):
                    if(texts[1][i] != '.'):
                        if(texts[1][i] != texts[0][i]):
                            if(i != len(texts[0])):
                                if(texts[1][i] == texts[0][i+1]):
                                    errorArr.append(texts[0][i])
                                    texts[1].insert(i, 'x')
                                else:
                                    if(texts[1][i] not in errorArr):
                                        errorArr.append(texts[1][i])
                else:
                    errorArr.append(texts[0][i])
    result = {
        'exercise_sent': s2,
        'similarity': cosine_sim,
        'Error': errorArr}
    return result

#計算字數
def wordCount(sent):
    #實體化tokenizer
    tokenizer = RegexpTokenizer(r'\w+')
    #使用tokenizer取出詞袋
    corpus = tokenizer.tokenize(sent)
    #計算出字串有多少單字
    corpus_Count = len(corpus)
    char_Count = 0
    #計算字串有多少字符
    char_Count = len(sent)
    # 單純算字不包括符號及空白
    # for i in sent:
    #    if i.isalpha():
    #        char_Count += 1
    result = {
        'words': corpus_Count,
        'char': char_Count
    }
    return result
