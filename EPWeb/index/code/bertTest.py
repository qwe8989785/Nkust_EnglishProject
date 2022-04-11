#!/usr/bin/env python
# coding: utf-8

# In[1]:


import torch
from transformers import BertTokenizer



def precition(text):
	PRETRAINED_MODEL_NAME = "bert-base-cased"  # 指定繁簡中文 BERT-BASE 預訓練模型
	# 取得此預訓練模型所使用的 tokenizer
	tokenizer = BertTokenizer.from_pretrained(PRETRAINED_MODEL_NAME)
	vocab = tokenizer.vocab
	tokens = tokenizer.tokenize(text)
	ids = tokenizer.convert_tokens_to_ids(tokens)
	position = ids.index(103)
	"""
	這段程式碼載入已經訓練好的 masked 語言模型並對有 [MASK] 的句子做預測
	"""
	from transformers import BertForMaskedLM

	# 除了 tokens 以外我們還需要辨別句子的 segment ids
	tokens_tensor = torch.tensor([ids])  # (1, seq_len)
	segments_tensors = torch.zeros_like(tokens_tensor)  # (1, seq_len)
	maskedLM_model = BertForMaskedLM.from_pretrained(PRETRAINED_MODEL_NAME)

	# 使用 masked LM 估計 [MASK] 位置所代表的實際 token 
	maskedLM_model.eval()
	with torch.no_grad():
	    outputs = maskedLM_model(tokens_tensor, segments_tensors)
	    predictions = outputs[0]
	    # (1, seq_len, num_hidden_units)
	del maskedLM_model

	# 將 [MASK] 位置的機率分佈取 top k 最有可能的 tokens 出來
	masked_index = position
	k = 5
	probs, indices = torch.topk(torch.softmax(predictions[0, masked_index], -1), k)
	predicted_tokens = tokenizer.convert_ids_to_tokens(indices.tolist())
	result = {
		'input' : tokens,
		'predictions' : predicted_tokens,
		'Accuracy' : []
	}
	for p in probs:
		result['Accuracy'].append(p.item()*100)
	return result

