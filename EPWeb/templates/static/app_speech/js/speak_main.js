//JQuery

// demo sentence
function getRandSent() {
    let ans, random_en
    $.ajax({
        type: "POST",
        url: "/getRandSent",
        success: function(response) {
            ans = response['data']
            random_en = Math.floor((Math.random() * ans.length));
            record_sent = ans[random_en];
            $('#originbox').val(record_sent);
        },
        complete: function() {
            return SearchFunc()
        },
    });

}

function call_sentance(en_content) {
    $("#right-output").text('中文');
    $("#left-input").text('英文');
    sent_api_url = '/sent';
    jQuery.ajax({
        type: "POST",
        url: sent_api_url,
        success: function(received_data) {
            const eng_content = en_content;
            console.log(eng_content)
                // const ch_content = received_data['transans']['translate'];
            const level = received_data['level'];
            document.getElementById("originbox").value = eng_content;
            // document.getElementById("translationbox").value = ch_content;
            level_content = document.getElementById("keywordslistbox");
            level_content.value = "A1:" + level.A1 + "\n" + "A2:" + level.A2 + "\n" + "B1:" +
                level.B1 + "\n" + "B2:" + level.B2 + "\n" + "C1:" + level.C1 + "\n" + "C2:" + level.C2 + "\n" + "Other:" + level.Other + "\n" + "This sentence Level: " + level.level;
            call_word_sum();
            console.log(level);
        },
        beforeSend: function() {
            $('.loadingwrap').show()
        },
        complete: function() {
            $('.loadingwrap').hide()
        },
        Error: function() {
            alert('Demo Error')
        }
    })
}

// word count
function call_word_sum() {
    sum_api_url = '/sent_sum'
    sent_in = document.getElementById('originbox').value;
    jQuery.ajax({
        type: "POST",
        url: sum_api_url,
        data: {
            'sent_in': sent_in
        },
        success: function(received_data) {
            sum = received_data['char'];
            $('#wordcount').text(sum + '/500');
        },
        Error: function() {
            alert('call_word_sum error');
        }
    })
}

// sent_translate to chinse
trans_api_url = '/sent_translate';
var globalTimeout = null;
$('#originbox').on('keyup', function() {
    if ($('#originbox').val().length > 0) {
        call_word_sum();
        if (globalTimeout != null) clearTimeout(globalTimeout);
        globalTimeout = setTimeout(SearchFunc, 1000);

    } else if ($('#originbox').val().length === 0) {
        document.getElementById("translationbox").text = "翻譯";
    }
});

function SearchFunc() {
    globalTimeout = null;
    result = document.getElementById('originbox').value;
    //ajax code
    jQuery.ajax({
        type: "POST",
        url: trans_api_url,
        data: {
            'sent_input': result,
            // 'lang-in':lang
        },
        success: function(received_data) {
            const ans = received_data['translate'];
            const detect_lang = received_data['lang'];
            lang = document.getElementById('left-input').textContent;
            identifylevel();
            if (lang !== detect_lang) {
                changelanguage();
            }
            document.getElementById("translationbox").value = ans;
        },
        Error: function() {
            console.log('trans-error');
        }
    });
}

$('#originbox').on('keydown keyup keypress', function() {
    if ($('#originbox').val().length === 0) {
        cleartext();
        call_word_sum();
    }
});
// sentence words level
function identifylevel() {
    sent_api_url = '/classify';
    record_sent = document.getElementById("originbox").value;
    level_content = document.getElementById("keywordslistbox");
    jQuery.ajax({
        type: "POST",
        url: sent_api_url,
        data: {
            'sent_in': record_sent
        },
        success: function(received_data) {
            const level = received_data['level'];
            level_content.value = "A1:" + level.A1 + "\n" + "A2:" + level.A2 + "\n" + "B1:" +
                level.B1 + "\n" + "B2:" + level.B2 + "\n" + "C1:" + level.C1 + "\n" + "C2:" + level.C2 + "\n" + "Other:" + level.Other + "\n" + "This sentence Level: " + level.level;
        },
        Error: function() {
            level_content.innerHTML = "Error";
        }
    });
}
// sentence accuracy and words
function accuracy() {
    sent_api_url = '/acc'
    sent1 = document.getElementById('originbox').value;
    sent2 = document.getElementById('exercisebox').value;
    jQuery.ajax({
        type: "POST",
        url: sent_api_url,
        data: {
            'sent1': sent1,
            'sent2': sent2,
        },
        success: function(received_data) {
            const exercise_sent = received_data['exercise_sent'];
            const similarity = received_data['similarity'];
            const errorinfo = received_data['Error'];
            const result = exercise_sent + "\nSimilarity: " + similarity * 100 + "%" + "\nError Words: " + errorinfo;
            document.getElementById('exercisebox').value = result;
        },
        Error: function() {
            level_content.innerHTML = "Error";
        }
    });
}

//call download
function call_download() {
    sent_api_url = '/download'
    sent = document.getElementById('exercisebox').value;
    jQuery.ajax({
        type: "POST",
        url: sent_api_url,
        data: {
            'info': sent,
        },
        Error: function() {
            alert("data Error");
        }
    });
}