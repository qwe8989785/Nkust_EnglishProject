(function () {
    window.speechSynthesis.cancel();
    var prompt;
    $.getJSON('../static/app_backend/json/data.json', function (json) {
        prompt = json;
        prompt.FQA.sort(() => Math.random() - 0.5);
        let chatprompt = `<span>${prompt.FQA[0].text}</span><span>${prompt.FQA[1].text}</span><span>${prompt.FQA[2].text}</span>
        `;
        document.querySelector('.chatprompt').innerHTML = chatprompt;
        let chatpromptSpan = document.querySelectorAll('.chatprompt span');
        console.log(chatpromptSpan);
        chatpromptSpan.forEach((e, index) => {
            e.addEventListener('click', function () {
                // console.log(chatpromptSpan[index].textContent);
                // call_chatbot(chatpromptSpan[index].textContent);
                sent = chatpromptSpan[index].textContent;
                user_output = `
            <div class="chat user">
                <p class="chat-message">${sent}</p>
            </div>
            `;
                $('.chatlogs').append(user_output);
                $('.chatlogs').scrollTop(document.querySelector('.chatlogs').scrollHeight);

                let input_data = {
                    texts: sent,
                    language_code: 'en-US',
                    session_id: '12345',
                };

                window.speechSynthesis.cancel();
                $.ajax({
                    type: 'POST',
                    url: '/dialogDetect',
                    data: JSON.stringify(input_data),
                    success: function (response) {
                        call_chatbot(response['data'].FulfillmentText);
                    },
                    error: function () {
                        console.log('dialogDetect api error');
                    },
                });
            });
        });
    });

    var textBox = ''; // 最終的辨識訊息 text input
    var final_transcript = ''; // 最終的辨識訊息的變數
    var startStopButton; // 「辨識/停止」按鈕
    var recognizing = false; // 是否辨識中

    let userinput_count = 0;
    $('#sent-button').on('click', function () {
        if ($('#sent-textarea').val().trim() !== '') {
            let sent = $('#sent-textarea');
            let user_output = '';
            user_output = `
            <div class="chat user">
                <p class="chat-message">${sent.val()}</p>
            </div>
            `;
            $('.chatlogs').append(user_output);
            $('.chatlogs').scrollTop(document.querySelector('.chatlogs').scrollHeight);
            let input_data = {
                texts: sent.val(),
                language_code: 'en-US',
                session_id: '12345',
            };

            window.speechSynthesis.cancel();
            $.ajax({
                type: 'POST',
                url: '/dialogDetect',
                data: JSON.stringify(input_data),
                success: function (response) {
                    call_chatbot(response['data'].FulfillmentText);
                },
                error: function () {
                    console.log('dialogDetect api error');
                },
            });

            sent.val('');
            sent.focus();
            userinput_count += 1;
        } else {
            $('#sent-textarea').val('');
        }
    });
    window.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            if ($('#sent-textarea').val().trim() !== '') {
                let sent = $('#sent-textarea');
                let user_output = '';
                user_output = `
            <div class="chat user">
                <p class="chat-message">${sent.val()}</p>
            </div>
            `;
                $('.chatlogs').append(user_output);

                $('.chatlogs').scrollTop(document.querySelector('.chatlogs').scrollHeight);
                let input_data = {
                    texts: sent.val(),
                    language_code: 'en-US',
                    session_id: '12345',
                };

                // console.log(JSON.stringify(input_data));
                window.speechSynthesis.cancel();
                $.ajax({
                    type: 'POST',
                    url: '/dialogDetect',
                    data: JSON.stringify(input_data),
                    success: function (response) {
                        call_chatbot(response['data'].FulfillmentText);
                    },
                    error: function () {
                        console.log('dialogDetect api error');
                    },
                });
                // call_chatbot($('#sent-textarea').val());
                sent.val('');
                userinput_count += 1;
            } else {
                $('#sent-textarea').val('');
            }
        }
    });

    function call_chatbot(message) {
        let chatbot_output = '';
        chatbot_output = `
        <div class="chat chatbot">
            <p class="chat-message">${message}</p>
        </div>
        `;

        let chatSpeech = new SpeechSynthesisUtterance(message);

        chatSpeech.rate = document.querySelector('#speedSelect').value;
        // chatSpeech.lang = 'en-US';
        chatSpeech.lang = $('#langSelect').val();
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(chatSpeech);
        $('.chatlogs').append(chatbot_output);
        $('.chatlogs').scrollTop(document.querySelector('.chatlogs').scrollHeight);
    }

    let mic_start = $('#micstart-button');
    let mic_stop = $('#micstop-button');
    mic_start.on('click', () => {
        mic_start.hide();
        mic_stop.show();
        langCombo = 'en-US';
        recognition.lang = langCombo.value; // 設定辨識語言
        final_transcript = '';
        recognition.start(); // 開始辨識
    });
    mic_stop.on('click', () => {
        mic_start.show();
        mic_stop.hide();
        console.log('stop record');
        recognition.stop();
    });

    function mic_sendoutMSG(msg) {
        msg = msg.trim();
        let mic_output = '';
        mic_output = `
        <div class="chat user">

            <p class="chat-message">${msg}</p>
        </div>
        `;
        $('.chatlogs').append(mic_output);
        $('.chatlogs').scrollTop(document.querySelector('.chatlogs').scrollHeight);
        // call_chatbot(msg);

        let input_data = {
            texts: msg,
            language_code: 'en-US',
            session_id: '12345',
        };

        console.log(JSON.stringify(input_data));

        $.ajax({
            type: 'POST',
            url: '/dialogDetect',
            data: JSON.stringify(input_data),
            success: function (response) {
                call_chatbot(response['data'].FulfillmentText);
            },
            error: function () {
                console.log('dialogDetect api error');
            },
        });
    }

    if (!('webkitSpeechRecognition' in window)) {
        // 如果找不到 window.webkitSpeechRecognition 這個屬性
        // 就是不支援語音辨識，要求使用者更新瀏覽器。
        alert('本瀏覽器不支援語音辨識，請更換瀏覽器！(Chrome 25 版以上才支援語音辨識)');
    } else {
        var recognition = new webkitSpeechRecognition(); // 建立語音辨識物件 webkitSpeechRecognition

        recognition.continuous = true; // 設定連續辨識模式
        recognition.interimResults = true; // 設定輸出中先結果。

        recognition.onstart = function () {
            // 開始辨識
            recognizing = true; // 設定為辨識中
        };

        recognition.onend = function () {
            // 辨識完成
            recognizing = false; // 設定為「非辨識中」
        };

        recognition.onresult = function (event) {
            // 辨識有任何結果時
            var interim_transcript = ''; // 中間結果
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
            if (final_transcript.trim().length > 0) {
                // 如果有最終辨識文字
                console.log(final_transcript);
                textBox = final_transcript; // 顯示最終辨識文字
                mic_sendoutMSG(textBox);
            }
        };
    }
})();
