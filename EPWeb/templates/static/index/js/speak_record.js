var textBox; // 最終的辨識訊息 text input
var final_transcript = ""; // 最終的辨識訊息的變數
var startStopButton; // 「辨識/停止」按鈕
var recognizing = false; // 是否辨識中
var intext1 = document.getElementById("originbox");
var intext2 = document.getElementById("exercisebox");

/* -----audio record code-----*/
let log = console.log.bind(console), //audio宣告
    id = (val) => document.getElementById(val),
    ul = id("ul"),
    gUMbtn = id("gUMbtn"),
    start = id("start"),
    stop = id("stop"),
    stream,
    recorder,
    counter = 1,
    chunks,
    media;

let mv = id("mediaVideo"), //音訊檔的基本要素
    mediaOptions = {
        audio: {
            tag: "audio",
            //type: thetype,
            type: "audio/mp3",
            //ext: testext,
            ext: ".mp3",
            gUM: { audio: true },
        },
    };
media = mv.checked ? mediaOptions.audio : mediaOptions.audio;
navigator.mediaDevices
    .getUserMedia(media.gUM)
    .then((_stream) => {
        stream = _stream;
        id("gUMArea").style.display = "none";
        id("btns").style.display = "inherit";
        start.removeAttribute("disabled");
        //start.removeAttribute("disabled");
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
            chunks.push(e.data);
            if (recorder.state == "inactive") makeLink();
        };
        log("got media successfully");
    })
    .catch(log);
//}

function makeLink() {
    let blob = new Blob(chunks, { type: media.type }),
        url = URL.createObjectURL(blob),
        li = document.createElement("li"), //新增元件li
        mt = document.createElement(media.tag), //新增元件(media.tag)，也就是"audio"
        hf = document.createElement("a"); //新增元件a
    mt.controls = true;
    mt.src = url;
    hf.href = url;
    hf.download = `${counter++}${media.ext}`;
    hf.innerHTML = `donwload ${hf.download}`;
    li.appendChild(mt); //於li新增元素mt(audio url)
    li.appendChild(hf); //於li新增元素hf(檔案名稱、url等)

    /* audio player */
    audio = document.getElementById("localAudio");
    audio.src = `${li.appendChild(hf)}`; //音訊來源為音訊的url(blob://http.....)
    audio.controls = true;
}

function PlayBack() {
    audio = document.getElementById("localAudio");
    audio.play();
}

function read() {
    var msg = new SpeechSynthesisUtterance(`${intext1.value}`);
    language = document.getElementById("left-input").textContent;
    if (language === '英文') {
        msg.lang = "en-US";
    } else if (language === '中文') {
        msg.lang = "zh-TW";
    } else {
        alert('langCombo error');
    }
    window.speechSynthesis.speak(msg);
}

function readforrecord() {
    var msg = new SpeechSynthesisUtterance(`${intext2.value}`);
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
}

function startButton_record(event) {
    textBox = document.getElementById("exercisebox"); // 取得最終的辨識訊息控制項 textBox
    langCombo = "en-US";
    textBox.value = ""; // 清除最終的辨識訊息
    final_transcript = ""; // 最終的辨識訊息變數
    recognition_record.lang = langCombo.value; // 設定辨識語言
    recognition_record.start(); // 開始辨識
}

function identifylevel() {
    sent_api_url = '/classify';
    record_sent = document.getElementById("originbox").value;
    level_content = document.getElementById("keywordslistbox");
    console.log(record_sent);

    jQuery.ajax({
        type: "POST",
        url: sent_api_url,
        data: {
            'sent_in': record_sent
        },
        success: function(received_data) {
            const level = received_data['level'];
            level_content.innerHTML = "A1:" + level.A1 + "\n" + "A2:" + level.A2 + "\n" + "B1:" +
                level.B1 + "\n" + "B2:" + level.B2 + "\n" + "C1:" + level.C1 + "\n" + "This sentence Level: " + level.level;
        },
        Error: function() {
            level_content.innerHTML = "Error";
        }
    });
}

function stopButton_record(event) {
    console.log("stop record");
    recognition_record.stop();
    identifylevel();
}

function startButton(event) {
    textBox = document.getElementById("originbox"); // 取得最終的辨識訊息控制項 textBox
    language = document.getElementById("left-input").textContent;
    if (language === '英文') {
        langCombo = "en-US";
    } else if (language === '中文') {
        langCombo = "zh-TW";
    } else {
        alert('langCombo error');
    }
    textBox.value = ""; // 清除最終的辨識訊息
    final_transcript = ""; // 最終的辨識訊息變數
    recognition.lang = langCombo; // 設定辨識語言
    recognition.start(); // 開始辨識
}

function stopButton(event) {
    console.log("stop record");
    recognition.stop();
}

if (!("webkitSpeechRecognition" in window)) {
    // 如果找不到 window.webkitSpeechRecognition 這個屬性
    // 就是不支援語音辨識，要求使用者更新瀏覽器。
    alert(
        "本瀏覽器不支援語音辨識，請更換瀏覽器！(Chrome 25 版以上才支援語音辨識)"
    );
} else {
    var recognition = new webkitSpeechRecognition(); // 建立語音辨識物件 webkitSpeechRecognition
    var recognition_record = new webkitSpeechRecognition(); // 建立語音辨識物件 webkitSpeechRecognition 還有錄音

    recognition.continuous = true; // 設定連續辨識模式
    recognition.interimResults = true; // 設定輸出中先結果。
    recognition_record.continuous = true; // 設定連續辨識模式
    recognition_record.interimResults = true; // 設定輸出中先結果。


    recognition.onstart = function() {
        // 開始辨識
        recognizing = true; // 設定為辨識中
    };

    recognition.onend = function() {
        // 辨識完成
        recognizing = false; // 設定為「非辨識中」
    };

    recognition_record.onstart = function() {
        // 開始辨識
        recognizing = true; // 設定為辨識中

        /* -----audio record code 開始錄音-----*/
        start.disabled = true;
        stop.removeAttribute("disabled");
        chunks = [];
        recorder.start();
        /* -----audio record code----- */
    };

    recognition_record.onend = function() {
        // 辨識完成
        recognizing = false; // 設定為「非辨識中」

        /* -----audio record code 錄音結束----- */
        stop.disabled = true;
        recorder.stop();
        start.removeAttribute("disabled");
        /* -----audio record code----- */
    };

    recognition.onresult = function(event) {
        // 辨識有任何結果時
        var interim_transcript = ""; // 中間結果
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            // 對於每一個辨識結果
            if (event.results[i].isFinal) {
                // 如果是最終結果
                final_transcript += event.results[i][0].transcript; // 將其加入最終結果中
                call_word_sum();
            } else {
                // 否則
                interim_transcript += event.results[i][0].transcript; // 將其加入中間結果中
            }
        }
        if (final_transcript.trim().length > 0)
        // 如果有最終辨識文字
            textBox.value = final_transcript; // 顯示最終辨識文字
        trans_api_url = '/sent_translate'; // 進行翻譯
        jQuery.ajax({
            type: "POST",
            url: trans_api_url,
            data: {
                'sent_input': final_transcript,
            },
            success: function(received_data) {
                const ans = received_data['translate'];
                console.log(ans);
                document.getElementById("translationbox").value = ans;
            },
            Error: function() {
                console.log('trans-error');
            }
        });
        634
    };

    recognition_record.onresult = function(event) {
        // 辨識有任何結果時
        var interim_transcript = ""; // 中間結果
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            // 對於每一個辨識結果
            if (event.results[i].isFinal) {
                // 如果是最終結果
                final_transcript += event.results[i][0].transcript; // 將其加入最終結果中
            } else {
                // 否則
                interim_transcript += event.results[i][0].transcript; // 將其加入中間結果中
            }
        }
        if (final_transcript.trim().length > 0)
        // 如果有最終辨識文字
            textBox.value = final_transcript; // 顯示最終辨識文字
    };
}