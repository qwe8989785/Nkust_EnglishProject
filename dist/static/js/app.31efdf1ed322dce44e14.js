webpackJsonp([1],{HnSj:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home row"},[t._m(0),t._v(" "),n("div",{staticClass:"showoff col"},[n("div",{staticClass:"homeText"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("span",[t._v(t._s(t.content))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bookcontainer col"},[e("img",{staticClass:"book",attrs:{src:n("al3g"),alt:"book"}})])}]};var a=n("VU/8")({name:"Home",props:["title","content"],data:function(){return{}},methods:{}},i,!1,function(t){n("P3+p")},null,null).exports;window.onload=function(){var t=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;document.querySelector(".loadingTime").innerHTML="Page load time is "+t/1e3+"s"};var o={name:"App",data:function(){return{msg:"sss",currentpage:{title:"H",text:"Home"},nowintroduction:{watchmark:"H",title:"Home",content:"Hello!! Welcome to learn English website."},introduction:[{watchmark:"H",title:"Home",content:"Hello!! Welcome to learn English website."},{watchmark:"LS",title:"Listen & Speak",content:"透過和English chatbot對答的方式練習英語聽力及發音根據使用者的英語聽說能力給予最合適的練習語句"},{watchmark:"T",title:"Translate",content:"提供中英轉換的翻譯功能且支援語音輸入將使用者輸入的文本翻譯為對應的語言"},{watchmark:"V",title:"Vocabulary",content:"提供查詢單字的功能內容包括音標、例句、同義詞、上位詞和下為詞等資訊"},{watchmark:"S",title:"Sentence",content:"提供隨機100句句子，可播放語音、翻譯中文"},{watchmark:"TC",title:"Topic",content:"Topic"},{watchmark:"B",title:"Backend",content:"使用者可以由此查看更多更詳細的後端分析資訊"}]}},methods:{mousehoverHandload:function(t){this.nowintroduction.watchmark=this.introduction[t].watchmark,this.nowintroduction.title=this.introduction[t].title,this.nowintroduction.content=this.introduction[t].content},clickHandler:function(t){this.currentpage.title=this.introduction[t].watchmark,this.currentpage.text=this.introduction[t].title}},computed:{},components:{Home:a}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"loadingTime"}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"navbar col"},[n("div",{staticClass:"watchmark"},[t._v(t._s(t.nowintroduction.watchmark))]),t._v(" "),n("div",{staticClass:"bookmark"},[n("div",{staticClass:"bookmark-circle"},[t._v(t._s(t.currentpage.title))]),t._v(" "),n("div",{staticClass:"bookmark-text"},[t._v(t._s(t.currentpage.text))])]),t._v(" "),n("ul",{staticClass:"pb-5"},[n("li",{on:{click:function(e){return t.clickHandler(0)},mouseover:function(e){return t.mousehoverHandload(0)}}},[n("router-link",{attrs:{to:"/Home"}},[t._v("Home")])],1),t._v(" "),n("li",{on:{click:function(e){return t.clickHandler(1)},mouseover:function(e){return t.mousehoverHandload(1)}}},[n("router-link",{attrs:{to:"/EnglishChatbot"}},[t._v("Listen & Speak")])],1),t._v(" "),n("li",{on:{click:function(e){return t.clickHandler(2)},mouseover:function(e){return t.mousehoverHandload(2)}}},[n("router-link",{attrs:{to:"/Translate"}},[t._v("Translate")])],1),t._v(" "),n("li",{on:{click:function(e){return t.clickHandler(3)},mouseover:function(e){return t.mousehoverHandload(3)}}},[n("router-link",{attrs:{to:"/Vocabulary"}},[t._v("Vocabulary")])],1),t._v(" "),n("li",{on:{click:function(e){return t.clickHandler(4)},mouseover:function(e){return t.mousehoverHandload(4)}}},[n("router-link",{attrs:{to:"/sentence"}},[t._v("Sentence")])],1),t._v(" "),n("li",{on:{click:function(e){return t.clickHandler(5)},mouseover:function(e){return t.mousehoverHandload(5)}}},[n("router-link",{attrs:{to:"/Topic"}},[t._v("Topic")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"https://sels.nkfust.edu.tw/userindex"},on:{click:function(e){return t.clickHandler(6)},mouseover:function(e){return t.mousehoverHandload(6)}}},[t._v("Backend")])])])]),t._v(" "),n("router-view",{attrs:{title:t.nowintroduction.title,content:t.nowintroduction.content}})],1)])},staticRenderFns:[]};var c=n("VU/8")(o,r,!1,function(t){n("YWEy")},null,null).exports,l=n("/ocq"),h=n("c/Tr"),u=n.n(h),d=n("mvHQ"),v=n.n(d),p={name:"EnglishChatbot",data:function(){return{annotation:[{text:"初級(Elementary) 相當於國中畢業"},{text:"中級(Intermediate) 相當於高中畢業"},{text:"中高級(High-Intermediate) 相當於大學畢業"},{text:"高級(Advanced) 相當於大學主修英語畢業或英語系國家進修取得學位者"},{text:"優級(Superior) 相當於受過高等教育之母語人士，各種場合均能使用適當策略做最有效的溝通"}],nowInput:"",message:[{userName:"chatbot",inputText:"Hello!</br></br>\n          To start talking: Click the blue microphone icon and then speak into your microphone.</br></br>\n          To stop talking: Click the red microphone icon.</br></br>"},{userName:"chatbot",inputText:"Say   [ Yes ]  when you are ready !"}],chatBotStart:!1,firstChat:!1,micBtn:!0,synth:window.speechSynthesis,userSpeech:new window.SpeechSynthesisUtterance,recognition:new window.webkitSpeechRecognition,userLevel:1,LevelText:"A1",exit:!1,random_question:"",user_answer:"",FulfillmentText:"",LESE_vef:0,correct:0,incorrect:0,getSentbyLevel:new FormData,runtimeTranscription_:"",transcription_:[],lang_:"en-US",isShowMode:!0}},mounted:function(){localStorage.getItem("userLevel")&&(this.userLevel=parseInt(localStorage.getItem("userLevel")));var t=void 0;switch(this.userLevel){case 1:t="A1";break;case 2:t="A2";break;case 3:t="B1";break;case 4:t="B2";break;case 5:t="C1"}this.LevelText=t,this.getSentbyLevel.append("Level",t)},methods:{chatUserSent:function(t){("yes"===this.nowInput&&!1===this.exit||"yes"===this.runtimeTranscription_)&&(this.chatBotStart=!0),this.user_answer=this.nowInput,""!==this.nowInput&&""!==this.nowInput.trim()?(this.message.push({userName:"user",inputText:this.nowInput}),this.nowInput="",this.scrollTop()):""!==this.runtimeTranscription_&&""!==this.runtimeTranscription_.trim()?(this.message.push({userName:"user",inputText:this.runtimeTranscription_}),this.nowInput="",this.scrollTop()):(this.nowInput="",!0===this.exit&&!1===this.chatBotStart?(this.chatbotStartInput("Whether to save this record ? yes / no"),this.chatbotSpeech("Whether to save this record ? yes / no")):this.chatbotSpeech("Say   [ Yes ]  when you are ready !")),(this.chatBotStart||this.exit)&&(this.getSent(this.userLevel),console.log("ss")),this.scrollTop()},scrollTop:function(){var t=this;this.$nextTick(function(){t.$refs.chatLogs.scrollTop=t.$refs.chatLogs.scrollHeight})},goaway:function(){this.exit=!0,this.chatBotStart=!1,this.chatbotStartInput("Whether to save this record ? yes / no"),this.chatbotSpeech("Whether to save this record ? yes / no")},chatbotStartInput:function(t){this.message.push({userName:"chatbot",inputText:t}),this.scrollTop(),this.chatbotSpeech("")},chatbotSpeech:function(t){window.speechSynthesis.cancel(),this.userSpeech.text=t,this.userSpeech.lang=this.lang_,this.userSpeech.rate=.8,this.synth.speak(this.userSpeech)},getSent:function(t){var e=this;if(!0===this.exit&&"yes"===this.user_answer?(console.log("ss"),localStorage.setItem("userLevel",this.userLevel),this.chatbotStartInput("Will save this record thank you"),this.chatbotSpeech("Will save this record thank you"),this.firstChat=!1,this.exit=!1):1==this.exit&&"no"==this.user_answer&&(this.chatbotStartInput("Will not save this record thank you"),this.chatbotSpeech("Will not save this record thank you"),this.firstChat=!1,this.exit=!1),this.chatBotStart&&!0!==this.exit){var n=void 0;switch(this.userLevel){case 1:n="A1";break;case 2:n="A2";break;case 3:n="B1";break;case 4:n="B2";break;case 5:n="C1"}this.getSentbyLevel.set("Level",n),this.axios.post("https://sels.nkfust.edu.tw/getSentbyLevel",this.getSentbyLevel).then(function(t){if(e.firstChat=!0,e.random_question=t.data.data.toLowerCase(),"zh-TW"===e.lang_){var n=new FormData;n.set("Sent",e.random_question),console.log(n.get("Sent")),e.axios.post("https://sels.nkfust.edu.tw/getSentChinese",n).then(function(t){""===e.FulfillmentText?(console.log(t.data.Chinese),e.chatbotStartInput(t.data.Chinese),e.chatbotSpeech(t.data.Chinese)):setTimeout(function(){e.lang_="zh-TW",e.chatbotStartInput(t.data.Chinese),e.chatbotSpeech(t.data.Chinese)},1500)})}else""===e.FulfillmentText?(e.chatbotStartInput(t.data.data),e.chatbotSpeech(t.data.data)):setTimeout(function(){e.chatbotStartInput(t.data.data),e.chatbotSpeech(t.data.data)},1500)})}},checkUserInput:function(t){var e=this;if(!0===this.firstChat&&!1===this.exit){var n={level:this.userLevel,true_count:this.correct,fail_count:this.incorrect,random_question:this.random_question.toLowerCase(),user_answer:this.user_answer,session_id:"123456789",language_code:"en"},s=v()(n);this.axios.post("https://sels.nkfust.edu.tw/LESE_detect",s).then(function(t){console.log(t.data);var n=void 0;switch(t.data.data.level){case 1:n="A1";break;case 2:n="A2";break;case 3:n="B1";break;case 4:n="B2";break;case 5:n="C1"}e.LevelText=n,e.userLevel=t.data.data.level,e.correct=t.data.data.true_count,e.incorrect=t.data.data.fail_count,e.FulfillmentText=t.data.data.Answer.FulfillmentText,e.LESE_vef=t.data.data.vef,e.lang_="en-US",e.chatbotStartInput(e.FulfillmentText),e.chatbotSpeech(e.FulfillmentText),!1===e.isShowMode?e.lang_="zh-TW":e.lang_="en-US"})}},deletelocalStorage:function(){this.LevelText="A1",this.userLevel=1,this.true_count=0,this.fail_count=0},micStart:function(){var t=this;this.micBtn=!this.micBtn,this.recognition.lang=this.lang_,this.recognition.interimResults=!0,this.recognition.addEventListener("result",function(e){var n=u()(e.results).map(function(t){return t[0]}).map(function(t){return t.transcript}).join("");t.runtimeTranscription_=n}),this.recognition.start()},micStop:function(){this.recognition.stop(),this.micBtn=!this.micBtn,console.log("stop record"),this.chatUserSent(),this.user_answer=this.runtimeTranscription_,this.checkUserInput(this.runtimeTranscription_)},modeChange:function(){this.isShowMode=!this.isShowMode,!1===this.isShowMode?this.lang_="zh-TW":this.lang_="en-US"}}};window.speechSynthesis.cancel();var m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"showoff col"},[n("div",{staticClass:"list"},[t._v("\n    Level : "+t._s(t.LevelText)+","+t._s(t.annotation[t.userLevel-1].text)+" "),n("br"),t._v("\n    相似度 :\n    "+t._s(t.LESE_vef)+"\n    "),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.chatBotStart,expression:"chatBotStart"}],attrs:{title:"go away"},on:{click:function(e){return t.goaway()}}},[n("i",{staticClass:"fas fa-sign-out-alt"})])]),t._v(" "),n("div",{staticClass:"chatbox"},[n("div",{staticClass:"modeBox"},[t.isShowMode?n("button",{staticClass:"model-button modeButton_enUS",attrs:{title:"Mode"},on:{click:t.modeChange}},[t._v("\n        英\n      ")]):n("button",{staticClass:"model-button modeButton_Chi",attrs:{title:"Mode"},on:{click:t.modeChange}},[t._v("\n        中\n      ")])]),t._v(" "),n("div",{ref:"chatLogs",staticClass:"chatlogs"},t._l(t.message,function(e){return n("div",["chatbot"==e.userName?n("div",[n("div",{staticClass:"chat chatbot"},[n("p",{staticClass:"chatMessage",domProps:{innerHTML:t._s(e.inputText)}})])]):t._e(),t._v(" "),"user"==e.userName?n("div",[n("div",{staticClass:"chat user"},[n("p",{staticClass:"chatMessage"},[t._v(t._s(e.inputText))])])]):t._e()])}),0),t._v(" "),n("div",{staticClass:"chatprompt"}),t._v(" "),n("div",{staticClass:"chat-form"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.micBtn,expression:"micBtn"}],staticClass:"micstart-button model-button",attrs:{title:"Voice on",id:"micstart-button"},on:{click:function(e){return t.micStart()}}},[n("i",{staticClass:"fas fa-microphone"})]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.micBtn,expression:"!micBtn"}],staticClass:"micstop-button model-button",attrs:{title:"Voice off",id:"micstop-button"},on:{click:function(e){return t.micStop()}}},[n("i",{staticClass:"fas fa-microphone"})])])])])},staticRenderFns:[]};var g=n("VU/8")(p,m,!1,function(t){n("HnSj")},null,null).exports,f={name:"Translate",data:function(){return{isShow:!1,micBtn:!0,leftLang:"英文",rightLang:"中文",inputbox:"",outputbox:"",EngFormData:new FormData,recognition:new window.webkitSpeechRecognition,runtimeTranscription_:""}},created:function(){this.getTranslateDebounced=_.debounce(this.getTranslate,400)},methods:{getTranslateDebounced:function(){},clearInput:function(){this.inputbox="",this.outputbox="",this.isShow=!1},getTranslate:function(){var t=this;""!==this.inputbox?this.isShow=!0:this.isShow=!1,this.EngFormData.set("sent_input",this.inputbox),this.axios.post("https://sels.nkfust.edu.tw/sent_translate",this.EngFormData).then(function(e){console.log(e.data),"Sorry,We can not detect this language"!==e.data.translate?t.outputbox=e.data.translate:t.outputbox="","中文"===e.data.lang?(t.leftLang="中文",t.rightLang="英文"):"英文"===e.data.lang&&(t.leftLang="英文",t.rightLang="中文")})},TramslateChange:function(){var t=this.leftLang;this.leftLang=this.rightLang,this.rightLang=t,this.inputbox=this.outputbox,this.getTranslate()},micStart:function(){var t=this;this.micBtn=!this.micBtn,this.recognition.lang="中文"===this.leftLang?"zh-tw":"en-US",this.recognition.interimResults=!0,this.recognition.addEventListener("result",function(e){var n=u()(e.results).map(function(t){return t[0]}).map(function(t){return t.transcript}).join("");t.runtimeTranscription_=n}),this.recognition.start()},micStop:function(){this.recognition.stop(),this.micBtn=!this.micBtn,this.isShow=!0,this.inputbox=this.runtimeTranscription_,this.getTranslate(),console.log("stop record")}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"showoff col"},[n("div",{staticClass:"translatebox"},[n("div",{staticClass:"inputbox"},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputbox,expression:"inputbox",modifiers:{trim:!0}}],attrs:{placeholder:"Enter or paste text here"},domProps:{value:t.inputbox},on:{keydown:t.getTranslateDebounced,input:function(e){e.target.composing||(t.inputbox=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"closeBtn",on:{click:t.clearInput}},[n("i",{staticClass:"fas fa-times"})])]),t._v(" "),n("div",{staticClass:"exchangebox"},[n("span",[t._v(t._s(t.leftLang))]),t._v(" "),n("button",{on:{click:t.TramslateChange}},[n("i",{staticClass:"fas fa-exchange-alt"})]),t._v(" "),n("span",[t._v(t._s(t.rightLang))])]),t._v(" "),n("div",{staticClass:"outputbox"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.outputbox,expression:"outputbox"}],attrs:{readonly:""},domProps:{value:t.outputbox},on:{input:function(e){e.target.composing||(t.outputbox=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"micbox"},[t.micBtn?n("button",{on:{click:t.micStart}},[n("i",{staticClass:"fas fa-microphone micStart"})]):n("button",[n("i",{staticClass:"fas fa-microphone micStop",on:{click:t.micStop}})])])])])},staticRenderFns:[]},S=n("VU/8")(f,w,!1,null,null,null).exports,b={name:"Vocabulary",data:function(){return{isShow:!1,inputbox:"",VgWordFormdata:new FormData,origin:"null",Meaning:"null",Level:"null",POS:"null",phonetic:"null",examplesList:new Array,synonymsList:new Array,antonymsList:new Array,hyponymsList:new Array,hypernymsList:new Array,engMeaningList:new Array}},methods:{getVocabulary:function(){var t=this;this.VgWordFormdata.set("word",this.inputbox),this.axios.post("https://sels.nkfust.edu.tw/getVgWord",this.VgWordFormdata).then(function(e){t.examplesList=null,t.synonymsList=null,t.antonymsList=null,t.hyponymsList=null,t.hypernymsList=null,t.engMeaningList=null,console.log(e.data.data.engMeaning[1]),t.origin=t.inputbox,t.Level=e.data.data.Level,t.phonetic=e.data.data.phonetic,t.Meaning=e.data.data.result[0].Meaning,t.POS=e.data.data.result[0].POS,t.synonymsList=e.data.data.synonyms,t.antonymsList=e.data.data.antonyms,t.hyponymsList=e.data.data.hyponyms,t.hypernymsList=e.data.data.hypernyms,t.engMeaningList=e.data.data.engMeaning[1],t.isShow=!0})}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"showoff col"},[n("div",{staticClass:"vocabularybox"},[n("div",{staticClass:"inputbox"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputbox,expression:"inputbox"}],attrs:{placeholder:"Enter or paste vocbulary here"},domProps:{value:t.inputbox},on:{input:function(e){e.target.composing||(t.inputbox=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"searchbox"},[n("button",{on:{click:function(e){return t.getVocabulary()}}},[n("i",{staticClass:"fas fa-search"}),t._v("search\n      ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"outputbox"},[n("div",{staticClass:"vocabularyOutput"},[n("h4",[t._v(t._s(t.origin))]),t._v(" "),n("h5",[t._v(t._s(t.Meaning))]),t._v(" "),n("h6",[t._v(t._s(t.POS))]),t._v(" "),n("h6",[t._v("US "+t._s(t.phonetic))]),t._v(" "),n("div",{staticClass:"level"},[t._v(t._s(t.Level))])]),t._v(" "),n("div",{staticClass:"otherPOS vocabularyOutput"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.synonymsList.length,expression:"synonymsList.length != 0"}]},[n("h4",[t._v("synonyms")]),t._v(" "),t._l(t.synonymsList,function(e){return n("span",{staticClass:"synonyms"},[t._v(t._s(e))])})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.antonymsList.length,expression:"antonymsList.length != 0"}]},[n("h4",[t._v("antonyms")]),t._v(" "),t._l(t.antonymsList,function(e){return n("span",{staticClass:"antonyms"},[t._v(t._s(e))])})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.hyponymsList.length,expression:"hyponymsList.length != 0"}]},[n("h4",[t._v("hyponyms")]),t._v(" "),t._l(t.hyponymsList,function(e){return n("span",{staticClass:"hyponyms"},[t._v(t._s(e))])})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.hypernymsList.length,expression:"hypernymsList.length != 0"}]},[n("h4",[t._v("hypernyms")]),t._v(" "),t._l(t.hypernymsList,function(e){return n("span",{staticClass:"hypernyms"},[t._v(t._s(e))])})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.engMeaningList.length,expression:"engMeaningList.length != 0"}]},[n("h4",[t._v("Explanation")]),t._v(" "),t._l(t.engMeaningList,function(e){return n("div",{staticClass:"explanation"},[t._v("\n            "+t._s(e)+"\n          ")])})],2)])])])])},staticRenderFns:[]},y=n("VU/8")(b,L,!1,null,null,null).exports,C=n("Gu7T"),x=n.n(C),k=n("ZZvs"),T=n.n(k);n("SYh3");s.a.use(T.a);var D={components:{Translate:S},name:"Sentence",data:function(){return{isLoading:!1,mode:"out-in",synth:window.speechSynthesis,userSpeech:new window.SpeechSynthesisUtterance,show:!0,isShow:!0,SentencesList:[],ChiSentence:"",CurrentSentence:0,EngFormData:new FormData}},created:function(){var t=this,e=this.$loading.show({canCancel:!1,color:"#0984e3",loader:"dots",width:50,height:50,backgroundColor:"#ffffff",isFullPage:!1,container:this.$refs.loadingContainer,opacity:.5});this.axios.post("https://sels.nkfust.edu.tw/getRandSent").then(function(n){e.hide(),t.SentencesList=[].concat(x()(n.data.data)),t.EngFormData.set("sent_input",t.SentencesList[t.CurrentSentence]),t.axios.post("https://sels.nkfust.edu.tw/sent_translate",t.EngFormData).then(function(e){t.ChiSentence=e.data.translate})})},mounted:function(){window.speechSynthesis.cancel()},computed:{NextDisableHandler:function(){return this.CurrentSentence<99?this.NextBtnDisable=!1:this.NextBtnDisable=!0},PreviousDisableHandler:function(){return this.CurrentSentence>0?this.PreviousBtnDisable=!1:this.PreviousBtnDisable=!0}},methods:{Nexthandler:function(){this.CurrentSentence+=1},Previoushandler:function(){this.CurrentSentence-=1},SentenceSpeaker:function(){window.speechSynthesis.cancel(),this.userSpeech.text=this.SentencesList[this.CurrentSentence],this.userSpeech.lang="en-US",this.userSpeech.rate=.6,this.synth.speak(this.userSpeech)},TranslateHandler:function(){var t=this;this.EngFormData.set("sent_input",this.SentencesList[this.CurrentSentence]),this.axios.post("https://sels.nkfust.edu.tw/sent_translate",this.EngFormData).then(function(e){t.ChiSentence=e.data.translate})}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"showoff col"},[t._m(0),t._v(" "),n("div",{ref:"loadingContainer",staticClass:"sentencebox vld-parent"},[n("div",{staticClass:"sentence",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.show=!t.show}}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.show?n("h4",{key:"Eng"},[t._v("\n          "+t._s(t.SentencesList[t.CurrentSentence])+"\n        ")]):n("h4",{key:"Chi"},[t._v(t._s(t.ChiSentence))])])],1)]),t._v(" "),n("div",{staticClass:"SentenceBtnBar"},[n("button",{attrs:{disabled:t.PreviousDisableHandler},on:{click:function(e){t.Previoushandler(),t.TranslateHandler()}}},[n("i",{staticClass:"fas fa-caret-left"})]),t._v(" "),n("p",{staticClass:"CurrentNumber"},[t._v("\n      "+t._s(t.CurrentSentence+1)+" / "+t._s(t.SentencesList.length)+"\n    ")]),t._v(" "),n("button",{attrs:{disabled:t.NextDisableHandler},on:{click:function(e){t.Nexthandler(),t.TranslateHandler()}}},[n("i",{staticClass:"fas fa-caret-right"})]),t._v(" "),n("div",{staticClass:"SpeakerBtn",on:{click:t.SentenceSpeaker}},[n("i",{staticClass:"fas fa-volume-up"})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"prompt"},[e("i",{staticClass:"fas fa-mouse"}),this._v(" "),e("p",[this._v("點擊卡片切換中文")])])}]},B=n("VU/8")(D,H,!1,null,null,null).exports,E=n("fZjL"),F=n.n(E),I={name:"Topic",data:function(){return{rightListisShow:!1,rightSentisShow:!1,rightDeatilsisShow:!1,currentList:"List",rightList:[],rightSentList:[],DeatilsLevel:null,DeatilsContent:null,DeatilsChinese:null,DeatilsLength:null,DeatilsSimilarity:null}},methods:{topicListHandler:function(){var t=this;this.axios.post("https://sels.nkfust.edu.tw/getTopics").then(function(e){t.rightList=e.data.topics,t.rightListisShow=!0,t.rightSentisShow=!1,t.rightDeatilsisShow=!1,t.currentList="List"})},levelListHandler:function(){this.rightList=["A1","A2","B1","B2","C1","C2"],this.rightListisShow=!0,this.rightSentisShow=!1,this.rightDeatilsisShow=!1,this.currentList="List"},getSentTopics:function(t){var e=this,n=new FormData;n.set("topic",t),this.axios.post("https://sels.nkfust.edu.tw/getSentbyTopic",n).then(function(t){e.rightSentList=F()(t.data.Content).map(function(e){return[t.data.Id[e],t.data.Content[e]]}),console.log(e.rightSentList),e.rightListisShow=!1,e.rightSentisShow=!0,e.rightDeatilsisShow=!1,e.currentList="Sent"})},getSentbyId:function(t){var e=this,n=new FormData;n.set("Id",t),this.axios.post("https://sels.nkfust.edu.tw/getSentById",n).then(function(t){e.DeatilsLevel=t.data.Level,e.DeatilsContent=t.data.Content,e.DeatilsChinese=t.data.Chinese,e.DeatilsLength=t.data.Length,e.DeatilsSimilarity=t.data.Similarity,e.rightListisShow=!1,e.rightSentisShow=!1,e.rightDeatilsisShow=!0,e.currentList="Deatils"})},returnHandler:function(){"Sent"===this.currentList?(this.rightListisShow=!0,this.rightSentisShow=!1,this.rightDeatilsisShow=!1,this.currentList="List"):"Deatils"===this.currentList&&(this.rightListisShow=!1,this.rightSentisShow=!0,this.rightDeatilsisShow=!1,this.currentList="Sent")}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"showoff col"},[n("div",{staticClass:"topicbox"},[n("div",{staticClass:"leftList"},[n("ul",[n("li",{on:{click:function(e){return t.topicListHandler()}}},[t._v("Topic")]),t._v(" "),n("li",{on:{click:function(e){return t.levelListHandler()}}},[t._v("Level")])])]),t._v(" "),n("div",{staticClass:"rightList"},[n("div",{staticClass:"rightListNav"},[n("button",{directives:[{name:"show",rawName:"v-show",value:"List"!==t.currentList,expression:"currentList !== 'List'"}],on:{click:function(e){return t.returnHandler()}}},[n("i",{staticClass:"fas fa-arrow-left"})])]),t._v(" "),n("div",{staticClass:"rightListConetnt"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.rightListisShow,expression:"rightListisShow"}]},t._l(t.rightList,function(e){return n("li",{key:e,on:{click:function(n){return t.getSentTopics(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])}),0),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.rightSentisShow,expression:"rightSentisShow"}]},t._l(t.rightSentList,function(e){return n("li",{key:e[0],on:{click:function(n){return t.getSentbyId(e[0])}}},[t._v("\n            "+t._s(e[1])+"\n          ")])}),0),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.rightDeatilsisShow,expression:"rightDeatilsisShow"}],staticClass:"sentDeatils"},[n("h6",[t._v("Content: "+t._s(t.DeatilsContent))]),t._v(" "),n("h6",[t._v("Level: "+t._s(t.DeatilsLevel))]),t._v(" "),n("p",[t._v("Chinese:"+t._s(t.DeatilsChinese))]),t._v(" "),n("p",[t._v("Lenght: "+t._s(t.DeatilsLength))]),t._v(" "),n("p",[t._v("Similarity: "+t._s(t.DeatilsSimilarity))])])])])])])},staticRenderFns:[]},M=n("VU/8")(I,N,!1,null,null,null).exports;s.a.use(l.a);var W=new l.a({mode:"history",routes:[{path:"/",name:"/",component:a},{path:"/Home",name:"/",component:a},{path:"/EnglishChatbot",name:"/EnglishChatbot",component:g},{path:"/Translate",name:"/Translate",component:S},{path:"/Vocabulary",name:"Voccabulary",component:y},{path:"/Sentence",name:"Sentence",component:B},{path:"/Topic",name:"Topic",component:M}]}),U=n("mtWM"),V=n.n(U),A=n("DWlv"),P=n.n(A);n("M4fF");s.a.config.productionTip=!1,s.a.use(P.a,V.a),new s.a({el:"#app",router:W,components:{App:c},template:"<App/>"})},"P3+p":function(t,e){},SYh3:function(t,e){},YWEy:function(t,e){},al3g:function(t,e,n){t.exports=n.p+"static/img/book2.286ccc4.png"}},["NHnr"]);
//# sourceMappingURL=app.31efdf1ed322dce44e14.js.map