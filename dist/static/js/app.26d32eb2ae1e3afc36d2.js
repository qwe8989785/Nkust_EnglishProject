webpackJsonp([1],{"1IDh":function(t,e){},"8b+9":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Home row"},[t._m(0),t._v(" "),s("div",{staticClass:"showoff col"},[s("div",{staticClass:"homeText"},[s("h1",[t._v(t._s(t.title))]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.content)}},[t._v(t._s(t.content))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bookcontainer col"},[e("img",{staticClass:"book",attrs:{src:s("al3g"),alt:"book"}})])}]};var a=s("VU/8")({name:"Home",props:["title","content"],data:function(){return{}},methods:{}},i,!1,function(t){s("1IDh")},null,null).exports;window.onload=function(){var t=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;document.querySelector(".loadingTime").innerHTML="Page load time is "+t/1e3+"s"};var o={name:"App",data:function(){return{currentClassify:"Learn",currentpage:{title:"H",text:"Home"},classifyList:[{classify:"Learn"},{classify:"Review"},{classify:"Test"}],nowintroduction:{watchmark:"H",url:"/Home",title:"Home",content:"Hello!! Welcome to learn English website.",sub:[],classify:"Learn"},introduction:[{watchmark:"H",url:"/Home",title:"Home",content:"Hello!! Welcome to learn English website.",sub:[],classify:"Learn"},{watchmark:"LS",url:"/EnglishChatbot",title:"Listen & Speak",content:"透過和English chatbot對答的方式練習英語聽力及發音根據使用者的英語聽說能力給予最合適的練習語句",sub:[],classify:"Learn"},{watchmark:"EX",url:"/Exercise",title:"Exercise",content:"Exercise",sub:[],classify:"Learn"},{watchmark:"T",url:"/Translate",title:"Translate",content:"提供中英轉換的翻譯功能且支援語音輸入將使用者輸入的文本翻譯為對應的語言",sub:[],classify:"Learn"},{watchmark:"V",url:"/Vocabulary",title:"Vocabulary",content:"提供查詢單字的功能內容包括音標、例句、同義詞、上位詞和下為詞等資訊",sub:[],classify:"Learn"},{watchmark:"S",url:"/",title:"Sentence",content:"Practice:提供隨機100句句子，可播放語音、翻譯中文<br/>\n          Browsing:可以瀏覽所有已收錄句子，分類為Topics, Level\n          ",classify:"Learn",sub:[{watchmark:"P",url:"/Sentence",title:"Practice"},{watchmark:"B",url:"/Topics",title:"Browsing"}]}]}},methods:{classifyHandler:function(t){this.currentClassify=t},mousehoverHandload:function(t){this.nowintroduction.watchmark=this.introduction[t].watchmark,this.nowintroduction.title=this.introduction[t].title,this.nowintroduction.content=this.introduction[t].content},clickHandler:function(t){this.currentpage.title=this.introduction[t].watchmark,this.currentpage.text=this.introduction[t].title}},computed:{},components:{Home:a}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("nav",[s("ul",t._l(t.classifyList,function(e,n){return s("li",{key:n,on:{click:function(s){return t.classifyHandler(e.classify)}}},[t._v("\n        "+t._s(e.classify)+"\n      ")])}),0)]),t._v(" "),s("div",{staticClass:"loadingTime"}),t._v(" "),s("div",{staticClass:"row appContent"},[s("div",{staticClass:"navbar col"},[s("div",{staticClass:"watchmark"},[t._v(t._s(t.nowintroduction.watchmark))]),t._v(" "),s("div",{staticClass:"bookmark"},[s("div",{staticClass:"bookmark-circle"},[t._v(t._s(t.currentpage.title))]),t._v(" "),s("div",{staticClass:"bookmark-text"},[t._v(t._s(t.currentpage.text))])]),t._v(" "),s("ul",[t._l(t.introduction,function(e,n){return s("li",{directives:[{name:"show",rawName:"v-show",value:e.classify===t.currentClassify,expression:"items.classify === currentClassify"}],key:n,on:{click:function(e){return t.clickHandler(n)},mouseover:function(e){return t.mousehoverHandload(n)}}},[s("router-link",{attrs:{to:e.url}},[t._v(t._s(e.title)+"\n            "),s("transition",{attrs:{name:"fade"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:"Sentence"===t.currentpage.text,expression:"currentpage.text === 'Sentence'"}]},t._l(e.sub,function(e,n){return s("li",{key:n,staticClass:"subItem"},[s("router-link",{attrs:{to:e.url}},[t._v(t._s(e.title))])],1)}),0)])],1)],1)}),t._v(" "),t._m(0)],2)]),t._v(" "),s("router-view",{attrs:{title:t.nowintroduction.title,content:t.nowintroduction.content}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://sels.nkfust.edu.tw/userindex"}},[this._v("BackEnd")])])}]};var c=s("VU/8")(o,r,!1,function(t){s("8b+9")},null,null).exports,l=s("/ocq"),h=s("c/Tr"),u=s.n(h),d=s("mvHQ"),v=s.n(d),p={name:"EnglishChatbot",data:function(){return{annotation:[{text:"初級(Elementary) 相當於國中畢業"},{text:"中級(Intermediate) 相當於高中畢業"},{text:"中高級(High-Intermediate) 相當於大學畢業"},{text:"高級(Advanced) 相當於大學主修英語畢業或英語系國家進修取得學位者"},{text:"優級(Superior) 相當於受過高等教育之母語人士，各種場合均能使用適當策略做最有效的溝通"}],nowInput:"",message:[{userName:"chatbot",inputText:"Hello!</br></br>\n          To start talking: Click the blue microphone icon and then speak into your microphone.</br></br>\n          To stop talking: Click the red microphone icon.</br></br>"},{userName:"chatbot",inputText:"Say   [ Yes ]  when you are ready !"}],chatBotStart:!1,firstChat:!1,micBtn:!0,synth:window.speechSynthesis,userSpeech:new window.SpeechSynthesisUtterance,recognition:new window.webkitSpeechRecognition,userLevel:1,LevelText:"A1",exit:!1,random_question:"",user_answer:"",FulfillmentText:"",LESE_vef:0,correct:0,incorrect:0,getSentbyLevel:new FormData,runtimeTranscription_:"",transcription_:[],lang_:"en-US",isShowMode:!0}},mounted:function(){localStorage.getItem("userLevel")&&(this.userLevel=parseInt(localStorage.getItem("userLevel")));var t=void 0;switch(this.userLevel){case 1:t="A1";break;case 2:t="A2";break;case 3:t="B1";break;case 4:t="B2";break;case 5:t="C1"}this.LevelText=t,this.getSentbyLevel.append("Level",t)},methods:{chatUserSent:function(t){("yes"===this.nowInput&&!1===this.exit||"yes"===this.runtimeTranscription_)&&(this.chatBotStart=!0),this.user_answer=this.nowInput,""!==this.nowInput&&""!==this.nowInput.trim()?(this.message.push({userName:"user",inputText:this.nowInput}),this.nowInput="",this.scrollTop()):""!==this.runtimeTranscription_&&""!==this.runtimeTranscription_.trim()?(this.message.push({userName:"user",inputText:this.runtimeTranscription_}),this.nowInput="",this.scrollTop()):(this.nowInput="",!0===this.exit&&!1===this.chatBotStart?(this.chatbotStartInput("Whether to save this record ? yes / no"),this.chatbotSpeech("Whether to save this record ? yes / no")):this.chatbotSpeech("Say   [ Yes ]  when you are ready !")),(this.chatBotStart||this.exit)&&(this.getSent(this.userLevel),console.log("ss")),this.scrollTop()},scrollTop:function(){var t=this;this.$nextTick(function(){t.$refs.chatLogs.scrollTop=t.$refs.chatLogs.scrollHeight})},goaway:function(){this.exit=!0,this.chatBotStart=!1,this.chatbotStartInput("Whether to save this record ? yes / no"),this.chatbotSpeech("Whether to save this record ? yes / no")},chatbotStartInput:function(t){this.message.push({userName:"chatbot",inputText:t}),this.scrollTop(),this.chatbotSpeech("")},chatbotSpeech:function(t){window.speechSynthesis.cancel(),this.userSpeech.text=t,this.userSpeech.lang=this.lang_,this.userSpeech.rate=.8,this.synth.speak(this.userSpeech)},getSent:function(t){var e=this;if(!0===this.exit&&"yes"===this.user_answer?(console.log("ss"),localStorage.setItem("userLevel",this.userLevel),this.chatbotStartInput("Will save this record thank you"),this.chatbotSpeech("Will save this record thank you"),this.firstChat=!1,this.exit=!1):1==this.exit&&"no"==this.user_answer&&(this.chatbotStartInput("Will not save this record thank you"),this.chatbotSpeech("Will not save this record thank you"),this.firstChat=!1,this.exit=!1),this.chatBotStart&&!0!==this.exit){var s=void 0;switch(this.userLevel){case 1:s="A1";break;case 2:s="A2";break;case 3:s="B1";break;case 4:s="B2";break;case 5:s="C1"}this.getSentbyLevel.set("Level",s),this.axios.post("https://sels.nkfust.edu.tw/getSentbyLevel",this.getSentbyLevel).then(function(t){if(e.firstChat=!0,e.random_question=t.data.data.Content[0].toLowerCase(),"zh-TW"===e.lang_){var s=new FormData;s.set("Sent",e.random_question),console.log(s.get("Sent")),e.axios.post("https://sels.nkfust.edu.tw/getSentChinese",s).then(function(t){""===e.FulfillmentText?(console.log(t.data.Chinese),e.chatbotStartInput(t.data.Chinese),e.chatbotSpeech(t.data.Chinese)):setTimeout(function(){e.lang_="zh-TW",e.chatbotStartInput(t.data.Chinese),e.chatbotSpeech(t.data.Chinese)},1500)})}else""===e.FulfillmentText?(e.chatbotStartInput(t.data.data.Content[0]),e.chatbotSpeech(t.data.data.Content[0])):setTimeout(function(){e.chatbotStartInput(t.data.data.Content[0]),e.chatbotSpeech(t.data.data.Content[0])},1500)})}},checkUserInput:function(t){var e=this;if(!0===this.firstChat&&!1===this.exit){var s={level:this.userLevel,true_count:this.correct,fail_count:this.incorrect,random_question:this.random_question.toLowerCase(),user_answer:this.user_answer,session_id:"123456789",language_code:"en"},n=v()(s);this.axios.post("https://sels.nkfust.edu.tw/LESE_detect",n).then(function(t){console.log(t.data);var s=void 0;switch(t.data.data.level){case 1:s="A1";break;case 2:s="A2";break;case 3:s="B1";break;case 4:s="B2";break;case 5:s="C1"}e.LevelText=s,e.userLevel=t.data.data.level,e.correct=t.data.data.true_count,e.incorrect=t.data.data.fail_count,e.FulfillmentText=t.data.data.Answer.FulfillmentText,e.LESE_vef=t.data.data.vef,e.lang_="en-US",e.chatbotStartInput(e.FulfillmentText),e.chatbotSpeech(e.FulfillmentText),!1===e.isShowMode?e.lang_="zh-TW":e.lang_="en-US"})}},deletelocalStorage:function(){this.LevelText="A1",this.userLevel=1,this.true_count=0,this.fail_count=0},micStart:function(){var t=this;this.micBtn=!this.micBtn,this.recognition.lang=this.lang_,this.recognition.interimResults=!0,this.recognition.addEventListener("result",function(e){var s=u()(e.results).map(function(t){return t[0]}).map(function(t){return t.transcript}).join("");t.runtimeTranscription_=s}),this.recognition.start()},micStop:function(){this.recognition.stop(),this.micBtn=!this.micBtn,console.log("stop record"),this.chatUserSent(),this.user_answer=this.runtimeTranscription_,this.checkUserInput(this.runtimeTranscription_)},modeChange:function(){this.isShowMode=!this.isShowMode,!1===this.isShowMode?this.lang_="zh-TW":this.lang_="en-US"}}};window.speechSynthesis.cancel();var m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"showoff col"},[s("div",{staticClass:"list"},[t._v("\n    Level : "+t._s(t.LevelText)+","+t._s(t.annotation[t.userLevel-1].text)+"，相似度 :\n    "+t._s(t.LESE_vef)+"\n    "),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.chatBotStart,expression:"chatBotStart"}],attrs:{title:"go away"},on:{click:function(e){return t.goaway()}}},[s("i",{staticClass:"fas fa-sign-out-alt"})])]),t._v(" "),s("div",{staticClass:"chatbox"},[s("div",{staticClass:"modeBox"},[t.isShowMode?s("button",{staticClass:"model-button modeButton_enUS",attrs:{title:"Mode"},on:{click:t.modeChange}},[t._v("\n        英\n      ")]):s("button",{staticClass:"model-button modeButton_Chi",attrs:{title:"Mode"},on:{click:t.modeChange}},[t._v("\n        中\n      ")])]),t._v(" "),s("div",{ref:"chatLogs",staticClass:"chatlogs"},t._l(t.message,function(e){return s("div",["chatbot"==e.userName?s("div",[s("div",{staticClass:"chat chatbot"},[s("p",{staticClass:"chatMessage",domProps:{innerHTML:t._s(e.inputText)}})])]):t._e(),t._v(" "),"user"==e.userName?s("div",[s("div",{staticClass:"chat user"},[s("p",{staticClass:"chatMessage"},[t._v(t._s(e.inputText))])])]):t._e()])}),0),t._v(" "),s("div",{staticClass:"chatprompt"}),t._v(" "),s("div",{staticClass:"chat-form"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.micBtn,expression:"micBtn"}],staticClass:"micstart-button model-button",attrs:{title:"Voice on",id:"micstart-button"},on:{click:function(e){return t.micStart()}}},[s("i",{staticClass:"fas fa-microphone"})]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.micBtn,expression:"!micBtn"}],staticClass:"micstop-button model-button",attrs:{title:"Voice off",id:"micstop-button"},on:{click:function(e){return t.micStop()}}},[s("i",{staticClass:"fas fa-microphone"})])])])])},staticRenderFns:[]};var g=s("VU/8")(p,m,!1,function(t){s("Yb5/")},null,null).exports,f={name:"Translate",data:function(){return{isShow:!1,micBtn:!0,leftLang:"英文",rightLang:"中文",inputbox:"",outputbox:"",EngFormData:new FormData,recognition:new window.webkitSpeechRecognition,runtimeTranscription_:""}},created:function(){this.getTranslateDebounced=_.debounce(this.getTranslate,400)},methods:{getTranslateDebounced:function(){},clearInput:function(){this.inputbox="",this.outputbox="",this.isShow=!1},getTranslate:function(){var t=this;""!==this.inputbox?this.isShow=!0:this.isShow=!1,this.EngFormData.set("sent_input",this.inputbox),this.axios.post("https://sels.nkfust.edu.tw/sent_translate",this.EngFormData).then(function(e){console.log(e.data),"Sorry,We can not detect this language"!==e.data.translate?t.outputbox=e.data.translate:t.outputbox="","中文"===e.data.lang?(t.leftLang="中文",t.rightLang="英文"):"英文"===e.data.lang&&(t.leftLang="英文",t.rightLang="中文")})},TramslateChange:function(){var t=this.leftLang;this.leftLang=this.rightLang,this.rightLang=t,this.inputbox=this.outputbox,this.getTranslate()},micStart:function(){var t=this;this.micBtn=!this.micBtn,this.recognition.lang="中文"===this.leftLang?"zh-tw":"en-US",this.recognition.interimResults=!0,this.recognition.addEventListener("result",function(e){var s=u()(e.results).map(function(t){return t[0]}).map(function(t){return t.transcript}).join("");t.runtimeTranscription_=s}),this.recognition.start()},micStop:function(){this.recognition.stop(),this.micBtn=!this.micBtn,this.isShow=!0,this.inputbox=this.runtimeTranscription_,this.getTranslate(),console.log("stop record")}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"showoff col"},[s("div",{staticClass:"translatebox"},[s("div",{staticClass:"inputbox"},[s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputbox,expression:"inputbox",modifiers:{trim:!0}}],attrs:{placeholder:"Enter or paste text here"},domProps:{value:t.inputbox},on:{keydown:t.getTranslateDebounced,input:function(e){e.target.composing||(t.inputbox=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"closeBtn",on:{click:t.clearInput}},[s("i",{staticClass:"fas fa-times"})])]),t._v(" "),s("div",{staticClass:"exchangebox"},[s("span",[t._v(t._s(t.leftLang))]),t._v(" "),s("button",{on:{click:t.TramslateChange}},[s("i",{staticClass:"fas fa-exchange-alt"})]),t._v(" "),s("span",[t._v(t._s(t.rightLang))])]),t._v(" "),s("div",{staticClass:"outputbox"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.outputbox,expression:"outputbox"}],attrs:{readonly:""},domProps:{value:t.outputbox},on:{input:function(e){e.target.composing||(t.outputbox=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"micbox"},[t.micBtn?s("button",{on:{click:t.micStart}},[s("i",{staticClass:"fas fa-microphone micStart"})]):s("button",[s("i",{staticClass:"fas fa-microphone micStop",on:{click:t.micStop}})])])])])},staticRenderFns:[]},S=s("VU/8")(f,w,!1,null,null,null).exports,b={name:"Vocabulary",data:function(){return{isShow:!1,inputbox:"",VgWordFormdata:new FormData,origin:"null",Meaning:"null",Level:"null",POS:"null",phonetic:"null",examplesList:new Array,synonymsList:new Array,antonymsList:new Array,hyponymsList:new Array,hypernymsList:new Array,engMeaningList:new Array}},methods:{getVocabulary:function(){var t=this;this.VgWordFormdata.set("word",this.inputbox),this.axios.post("https://sels.nkfust.edu.tw/getVgWord",this.VgWordFormdata).then(function(e){t.examplesList=null,t.synonymsList=null,t.antonymsList=null,t.hyponymsList=null,t.hypernymsList=null,t.engMeaningList=null,console.log(e.data.data.engMeaning[1]),t.origin=t.inputbox,t.Level=e.data.data.Level,t.phonetic=e.data.data.phonetic,t.Meaning=e.data.data.result[0].Meaning,t.POS=e.data.data.result[0].POS,t.synonymsList=e.data.data.synonyms,t.antonymsList=e.data.data.antonyms,t.hyponymsList=e.data.data.hyponyms,t.hypernymsList=e.data.data.hypernyms,t.engMeaningList=e.data.data.engMeaning[1],t.isShow=!0})}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"showoff col"},[s("div",{staticClass:"vocabularybox"},[s("div",{staticClass:"inputbox"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputbox,expression:"inputbox"}],attrs:{placeholder:"Enter or paste vocbulary here"},domProps:{value:t.inputbox},on:{input:function(e){e.target.composing||(t.inputbox=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"searchbox"},[s("button",{on:{click:function(e){return t.getVocabulary()}}},[s("i",{staticClass:"fas fa-search"}),t._v("search\n      ")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"outputbox"},[s("div",{staticClass:"vocabularyOutput"},[s("h4",[t._v(t._s(t.origin))]),t._v(" "),s("h5",[t._v(t._s(t.Meaning))]),t._v(" "),s("h6",[t._v(t._s(t.POS))]),t._v(" "),s("h6",[t._v("US "+t._s(t.phonetic))]),t._v(" "),s("div",{staticClass:"level"},[t._v(t._s(t.Level))])]),t._v(" "),s("div",{staticClass:"otherPOS vocabularyOutput"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.synonymsList.length,expression:"synonymsList.length != 0"}]},[s("h4",[t._v("synonyms")]),t._v(" "),t._l(t.synonymsList,function(e){return s("span",{staticClass:"synonyms"},[t._v(t._s(e))])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.antonymsList.length,expression:"antonymsList.length != 0"}]},[s("h4",[t._v("antonyms")]),t._v(" "),t._l(t.antonymsList,function(e){return s("span",{staticClass:"antonyms"},[t._v(t._s(e))])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.hyponymsList.length,expression:"hyponymsList.length != 0"}]},[s("h4",[t._v("hyponyms")]),t._v(" "),t._l(t.hyponymsList,function(e){return s("span",{staticClass:"hyponyms"},[t._v(t._s(e))])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.hypernymsList.length,expression:"hypernymsList.length != 0"}]},[s("h4",[t._v("hypernyms")]),t._v(" "),t._l(t.hypernymsList,function(e){return s("span",{staticClass:"hypernyms"},[t._v(t._s(e))])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.engMeaningList.length,expression:"engMeaningList.length != 0"}]},[s("h4",[t._v("Explanation")]),t._v(" "),t._l(t.engMeaningList,function(e){return s("div",{staticClass:"explanation"},[t._v("\n            "+t._s(e)+"\n          ")])})],2)])])])])},staticRenderFns:[]},x=s("VU/8")(b,L,!1,null,null,null).exports,y=s("Gu7T"),C=s.n(y),k=s("ZZvs"),T=s.n(k);s("SYh3");n.a.use(T.a);var E={components:{Translate:S},name:"Sentence",data:function(){return{isLoading:!1,mode:"out-in",synth:window.speechSynthesis,userSpeech:new window.SpeechSynthesisUtterance,show:!0,isShow:!0,SentencesList:[],ChiSentence:"",CurrentSentence:0,EngFormData:new FormData}},created:function(){var t=this,e=this.$loading.show({canCancel:!1,color:"#0984e3",loader:"dots",width:50,height:50,backgroundColor:"#ffffff",isFullPage:!1,container:this.$refs.loadingContainer,opacity:.5});this.axios.post("https://sels.nkfust.edu.tw/getRandSent").then(function(s){e.hide(),t.SentencesList=[].concat(C()(s.data.data)),t.EngFormData.set("sent_input",t.SentencesList[t.CurrentSentence]),t.axios.post("https://sels.nkfust.edu.tw/sent_translate",t.EngFormData).then(function(e){t.ChiSentence=e.data.translate})})},mounted:function(){window.speechSynthesis.cancel()},computed:{NextDisableHandler:function(){return this.CurrentSentence<99?this.NextBtnDisable=!1:this.NextBtnDisable=!0},PreviousDisableHandler:function(){return this.CurrentSentence>0?this.PreviousBtnDisable=!1:this.PreviousBtnDisable=!0}},methods:{Nexthandler:function(){this.CurrentSentence+=1},Previoushandler:function(){this.CurrentSentence-=1},SentenceSpeaker:function(){window.speechSynthesis.cancel(),this.userSpeech.text=this.SentencesList[this.CurrentSentence],this.userSpeech.lang="en-US",this.userSpeech.rate=.6,this.synth.speak(this.userSpeech)},TranslateHandler:function(){var t=this;this.EngFormData.set("sent_input",this.SentencesList[this.CurrentSentence]),this.axios.post("https://sels.nkfust.edu.tw/sent_translate",this.EngFormData).then(function(e){t.ChiSentence=e.data.translate})}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"showoff col"},[t._m(0),t._v(" "),s("div",{ref:"loadingContainer",staticClass:"sentencebox vld-parent"},[s("div",{staticClass:"sentence",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.show=!t.show}}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.show?s("h4",{key:"Eng"},[t._v("\n          "+t._s(t.SentencesList[t.CurrentSentence])+"\n        ")]):s("h4",{key:"Chi"},[t._v(t._s(t.ChiSentence))])])],1)]),t._v(" "),s("div",{staticClass:"SentenceBtnBar"},[s("button",{attrs:{disabled:t.PreviousDisableHandler},on:{click:function(e){t.Previoushandler(),t.TranslateHandler()}}},[s("i",{staticClass:"fas fa-caret-left"})]),t._v(" "),s("p",{staticClass:"CurrentNumber"},[t._v("\n      "+t._s(t.CurrentSentence+1)+" / "+t._s(t.SentencesList.length)+"\n    ")]),t._v(" "),s("button",{attrs:{disabled:t.NextDisableHandler},on:{click:function(e){t.Nexthandler(),t.TranslateHandler()}}},[s("i",{staticClass:"fas fa-caret-right"})]),t._v(" "),s("div",{staticClass:"SpeakerBtn",on:{click:t.SentenceSpeaker}},[s("i",{staticClass:"fas fa-volume-up"})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"prompt"},[e("i",{staticClass:"fas fa-mouse"}),this._v(" "),e("p",[this._v("點擊卡片切換中文")])])}]},B=s("VU/8")(E,D,!1,null,null,null).exports,I=s("fZjL"),H=s.n(I),N={name:"Topics",data:function(){return{rightListisShow:!1,rightSentisShow:!1,rightDeatilsisShow:!1,selectTitle:"",currentList:"List",isLevel:!1,rightList:[],rightSentList:[],DeatilsLevel:null,DeatilsContent:null,DeatilsChinese:null,DeatilsLength:null,DeatilsSimilarity:null}},mounted:{test:function(){var t=new FormData;t.set("Source","all"),this.axios.post("https://sels.nkfust.edu.tw/getSentCount",t).then(function(t){console.log(t.data.data.Topic)})}},methods:{topicListHandler:function(){var t=this;this.axios.post("https://sels.nkfust.edu.tw/getTopics").then(function(e){t.rightList=e.data.topics,t.rightListisShow=!0,t.rightSentisShow=!1,t.rightDeatilsisShow=!1,t.isLevel=!1,t.currentList="List"})},levelListHandler:function(){this.rightList=["A1","A2","B1","B2","C1","C2"],this.rightListisShow=!0,this.rightSentisShow=!1,this.rightDeatilsisShow=!1,this.isLevel=!0,this.currentList="List"},getSentTopics:function(t){var e=this;if(this.rightSentList=[],this.selectTitle=t,!0===this.isLevel){var s=new FormData;s.set("level",t),s.set("source","WordNet"),this.axios.post("https://sels.nkfust.edu.tw/getSent",s).then(function(t){console.log(t.data),e.rightSentList=H()(t.data.Content).map(function(e){return[t.data.Id[e],t.data.Content[e]]}),console.log(e.rightSentList),e.rightListisShow=!1,e.rightSentisShow=!0,e.rightDeatilsisShow=!1,e.currentList="Sent"})}else{var n=new FormData;n.set("topic",t),console.log(n);this.axios.post("https://sels.nkfust.edu.tw/getSentbyTopic",n).then(function(t){console.log(t.data),e.rightSentList=H()(t.data.Content).map(function(e){return[t.data.Id[e],t.data.Content[e]]}),console.log(e.rightSentList),e.rightListisShow=!1,e.rightSentisShow=!0,e.rightDeatilsisShow=!1,e.currentList="Sent"})}},getSentbyId:function(t){var e=this,s=new FormData;s.set("Id",t),this.axios.post("https://sels.nkfust.edu.tw/getSentById",s).then(function(t){e.DeatilsLevel=t.data.Level,e.DeatilsContent=t.data.Content,e.DeatilsChinese=t.data.Chinese,e.DeatilsLength=t.data.Length,e.DeatilsSimilarity=t.data.Similarity,e.rightListisShow=!1,e.rightSentisShow=!1,e.rightDeatilsisShow=!0,e.currentList="Deatils"})},returnHandler:function(){"Sent"===this.currentList?(this.rightListisShow=!0,this.rightSentisShow=!1,this.rightDeatilsisShow=!1,this.currentList="List"):"Deatils"===this.currentList&&(this.rightListisShow=!1,this.rightSentisShow=!0,this.rightDeatilsisShow=!1,this.currentList="Sent")}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"showoff col"},[s("div",{staticClass:"topicbox"},[s("div",{staticClass:"leftList"},[s("ul",[s("p",[t._v("Classify")]),t._v(" "),s("li",{on:{click:function(e){return t.topicListHandler()}}},[t._v("Topics")]),t._v(" "),s("li",{attrs:{title:"根據CERF等級分類為A1,A2,B1,B2,C1,C2"},on:{click:function(e){return t.levelListHandler()}}},[t._v("\n          Level\n        ")])])]),t._v(" "),s("div",{staticClass:"rightList"},[s("div",{staticClass:"rightListNav"},[s("button",{directives:[{name:"show",rawName:"v-show",value:"List"!==t.currentList,expression:"currentList !== 'List'"}],on:{click:function(e){return t.returnHandler()}}},[s("i",{staticClass:"fas fa-arrow-left"})])]),t._v(" "),s("div",{staticClass:"rightListConetnt"},[s("ol",{directives:[{name:"show",rawName:"v-show",value:t.rightListisShow,expression:"rightListisShow"}]},[s("span",[t._v("\n            根據不同的Classify產生不同的細項分類，點選進入該細項分類的句子。\n          ")]),t._v(" "),t._l(t.rightList,function(e){return s("li",{key:e,on:{click:function(s){return t.getSentTopics(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])})],2),t._v(" "),s("ol",{directives:[{name:"show",rawName:"v-show",value:t.rightSentisShow,expression:"rightSentisShow"}]},[s("span",[t._v(t._s(t.selectTitle)+"此分類細項句子總數為："+t._s(t.rightSentList.length))]),t._v(" "),t._l(t.rightSentList,function(e){return s("li",{key:e[0],on:{click:function(s){return t.getSentbyId(e[0])}}},[t._v("\n            "+t._s(e[1])+"\n          ")])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.rightDeatilsisShow,expression:"rightDeatilsisShow"}],staticClass:"sentDeatils"},[s("h6",[t._v("Content: "+t._s(t.DeatilsContent))]),t._v(" "),s("h6",[t._v("Level: "+t._s(t.DeatilsLevel))]),t._v(" "),s("p",[t._v("Chinese:"+t._s(t.DeatilsChinese))]),t._v(" "),s("p",[t._v("Lenght: "+t._s(t.DeatilsLength))]),t._v(" "),s("p",[t._v("Similarity: "+t._s(t.DeatilsSimilarity))])])])])])])},staticRenderFns:[]},M=s("VU/8")(N,F,!1,null,null,null).exports,A=(s("R870"),{name:"Exercise",data:function(){return{nowInput:"",message:[{userName:"chatbot",inputText:"Hello!</br></br>\n          Please select the level you want to Exercise"}],levelOption:["A1","A2","B1","B2","C1","C2"],isdisabled:!0,ExerciseStart:!1,micBtn:!0,synth:window.speechSynthesis,userSpeech:new window.SpeechSynthesisUtterance,recognition:new window.webkitSpeechRecognition,userLevel:"",ExerciseArray:[],user_answer:"",FulfillmentText:"",currentSent:0,correct:0,incorrect:0,getSentbyLevel:new FormData,runtimeTranscription_:"",transcription_:[],lang_:"en-US",isShowMode:!0}},methods:{ExerciseStartToggle:function(){this.ExerciseStart=!0},ExerciseGetSent:function(){for(var t=this,e=3;e<27;){console.log("ss");var s=new FormData;s.set("Char",e),s.set("Level",this.userLevel),this.axios.post("https://sels.nkfust.edu.tw/getSentbyChar",s).then(function(e){console.log(e.data.Content[0]),t.ExerciseArray.push(e.data.Content[0],e.data.Content[1]),t.ExerciseArray.length>=16&&(t.ExerciseArray.sort(function(t,e){return t.length-e.length}),t.ExerciseOutput())}),e+=3}},ExerciseOutput:function(){this.chatbotStartInput(this.ExerciseArray[this.currentSent]),this.chatbotSpeech(this.ExerciseArray[this.currentSent]),this.isdisabled=!1},ExercoseUserInput:function(t){var e=this;console.log(t);var s={level:this.userLevel,true_count:0,fail_count:0,random_question:this.ExerciseArray[this.currentSent].toLowerCase(),user_answer:t,session_id:"123456789",language_code:"en"},n=v()(s);this.axios.post("https://sels.nkfust.edu.tw/LESE_detect",n).then(function(t){console.log(t.data);t.data.data.Answer.FulfillmentText;e.chatbotStartInput("Similarity:"+t.data.data.vef),e.lang_="en-US",e.currentSent++,e.ExerciseOutput()})},scrollTop:function(){var t=this;this.$nextTick(function(){t.$refs.chatLogs.scrollTop=t.$refs.chatLogs.scrollHeight})},chatbotStartInput:function(t){this.message.push({userName:"chatbot",inputText:t}),this.scrollTop(),this.chatbotSpeech("")},chatUserSent:function(){this.message.push({userName:"user",inputText:this.runtimeTranscription_}),this.nowInput="",this.scrollTop()},chatbotSpeech:function(t){window.speechSynthesis.cancel(),this.userSpeech.text=t,this.userSpeech.lang=this.lang_,this.userSpeech.rate=.7,this.synth.speak(this.userSpeech)},checkUserInput:function(t){!0===this.firstChat&&this.exit},micStart:function(){var t=this;this.micBtn=!this.micBtn,this.recognition.lang=this.lang_,this.recognition.interimResults=!0,this.recognition.addEventListener("result",function(e){var s=u()(e.results).map(function(t){return t[0]}).map(function(t){return t.transcript}).join("");t.runtimeTranscription_=s}),this.recognition.start()},micStop:function(){this.recognition.stop(),this.micBtn=!this.micBtn,console.log("stop record"),this.chatUserSent(),this.user_answer=this.runtimeTranscription_,this.ExercoseUserInput(this.runtimeTranscription_)},modeChange:function(){this.isShowMode=!this.isShowMode,!1===this.isShowMode?this.lang_="zh-TW":this.lang_="en-US"}}});window.speechSynthesis.cancel();var U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"showoff col"},[s("div",{staticClass:"chatbox"},[s("div",{ref:"chatLogs",staticClass:"chatlogs"},[t._l(t.message,function(e){return s("div",["chatbot"==e.userName?s("div",[s("div",{staticClass:"chat chatbot"},[s("p",{staticClass:"chatMessage",domProps:{innerHTML:t._s(e.inputText)}})])]):t._e(),t._v(" "),"user"==e.userName?s("div",[s("div",{staticClass:"chat user"},[s("p",{staticClass:"chatMessage"},[t._v(t._s(e.inputText))])])]):t._e()])}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.ExerciseStart,expression:"!ExerciseStart"}]},[s("v-select",{attrs:{options:t.levelOption},model:{value:t.userLevel,callback:function(e){t.userLevel=e},expression:"userLevel"}}),t._v(" "),s("button",{staticClass:"startButton",class:{startButtonDisable:""===t.userLevel||null===t.userLevel},attrs:{disabled:""===t.userLevel},on:{click:function(e){t.ExerciseStartToggle(),t.ExerciseGetSent()}}},[t._v("\n          Start\n        ")])],1)],2),t._v(" "),s("div",{staticClass:"chatprompt"}),t._v(" "),s("div",{staticClass:"chat-form"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.micBtn,expression:"micBtn"}],staticClass:"micstart-button model-button",attrs:{title:"Voice on",id:"micstart-button",disabled:t.isdisabled},on:{click:function(e){return t.micStart()}}},[s("i",{staticClass:"fas fa-microphone"})]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.micBtn,expression:"!micBtn"}],staticClass:"micstop-button model-button",attrs:{title:"Voice off",id:"micstop-button",disabled:t.isdisabled},on:{click:function(e){return t.micStop()}}},[s("i",{staticClass:"fas fa-microphone"})])])])])},staticRenderFns:[]};var V=s("VU/8")(A,U,!1,function(t){s("VODV")},null,null).exports;n.a.use(l.a);var P=new l.a({mode:"history",routes:[{path:"/",name:"/",component:a},{path:"/Home",name:"/",component:a},{path:"/EnglishChatbot",name:"/EnglishChatbot",component:g},{path:"/Translate",name:"/Translate",component:S},{path:"/Vocabulary",name:"Voccabulary",component:x},{path:"/Sentence",name:"Sentence",component:B},{path:"/Topics",name:"Topics",component:M},{path:"/Exercise",name:"Exercise",component:V}]}),W=s("mtWM"),$=s.n(W),R=s("DWlv"),O=s.n(R),q=s("T1ft"),z=s.n(q);s("M4fF");n.a.config.productionTip=!1,n.a.use(O.a,$.a),n.a.component("v-select",z.a),new n.a({el:"#app",router:P,components:{App:c},template:"<App/>"})},R870:function(t,e){},SYh3:function(t,e){},VODV:function(t,e){},"Yb5/":function(t,e){},al3g:function(t,e,s){t.exports=s.p+"static/img/book2.286ccc4.png"}},["NHnr"]);
//# sourceMappingURL=app.26d32eb2ae1e3afc36d2.js.map