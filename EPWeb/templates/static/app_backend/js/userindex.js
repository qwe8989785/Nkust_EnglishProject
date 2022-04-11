(function () {
    $.each($('.item'), function (i, o) {
        $(o).click(function () {
            $.each($('.smenu'), function (x, o) {
                if (i !== x) {
                    $('.smenu').eq(x).slideUp(300);
                }
            });
            $('.smenu').eq(i).slideToggle(300);
        });
    });

    $('#demoselect').change((o) => {
        $('#originbox').val($('#demoselect').val());
    });
})();

let origintxt, translationtxt;

//先判斷是否為 ios 裝置
let initial = false;

function promptIOS() {
    if (
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i)
    ) {
        if (initial) {
            $('.prompt').toggleClass('displaynone');
        } else {
            initial = true;
        }
    }
}

// 暫時的翻譯交換 可以用currentLG跟changeLG判斷現在是中文還是英文
function changelanguage() {
    currentLG = $('#left-input').text();
    changeLG = $('#right-output').text();
    $('#right-output').text(currentLG);
    $('#left-input').text(changeLG);
}

function changetext() {
    origin = document.getElementById('originbox').value;
    trans = document.getElementById('translationbox').value;
    document.getElementById('originbox').value = trans;
    document.getElementById('translationbox').value = origin;
}

function cleartext() {
    $('#originbox').val('');
    $('#translationbox').val('');
    $('.wordcount').text('0/500');
}

// TS speak stop btn change
function TSspeakchange() {
    $('#translate-start').toggleClass('displaynone');
    $('#translate-stop').toggleClass('displaynone');
}

// EX speak stop btn change
function EXspeakchange() {
    $('#record-start').toggleClass('displaynone');
    $('#record-stop').toggleClass('displaynone');
}

// POST
function call_wordsyn() {
    word = document.getElementById('vocabulary-input').value;
    vocab_api = '/wordsyn';
    jQuery.ajax({
        type: 'POST',
        url: vocab_api,
        data: {
            word: word,
        },
        success: function (received_data) {},
        Error: function () {
            alert('call_word_sum error');
        },
    });
}

function demotranslation() {
    trans_api_url = '/sent_translate';
    let result;
    if ($('#originbox').val() !== '') {
        result = $('#originbox').val();
    } else {
        result = $('#demoselect').val();
    }
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: trans_api_url,
        data: {
            sent_input: result,
            // 'lang-in':lang
        },
        success: function (received_data) {
            const ans = received_data['translate'];
            document.getElementById('translationbox').value = ans;
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function call_spacy_POS() {
    sent = document.getElementById('spacy-input').value;
    spacy_api_url = '/spacy_POS';
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: spacy_api_url,
        data: {
            'sent-in': sent,
        },
        success: function (received_data) {
            const ans = received_data['data'];
            $('#spacy-input-T').text('');
            let output;
            ans.text.forEach((item, o) => {
                output +=
                    '<tr>' +
                    '<th>' +
                    ans.text[o] +
                    '</th>' +
                    '<th>' +
                    ans.pos[o] +
                    '</th>' +
                    '<th>' +
                    ans.dep[o] +
                    '</th>' +
                    '</tr>';
            });
            $('#spacy-input-T').append(output);
            spaCy_dependency_POS();
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function spaCy_Conllu() {
    sent = document.getElementById('test_input').value;
    spaCy_Conllu_api_url = '/spaCy_Conllu';
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: spaCy_Conllu_api_url,
        data: {
            'sent-in': sent,
        },
        success: function (received_data) {
            const ans = received_data['data'];
            let output;
            console.log(ans);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function spaCy_ER() {
    sent = document.getElementById('test_input').value;
    spaCy_ER_api_url = '/spaCy_ER';
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: spaCy_ER_api_url,
        data: {
            'sent-in': sent,
        },
        success: function (received_data) {
            const ans = received_data['data'];
            let output;
            console.log(ans);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function call_stanford_POS() {
    sent = document.getElementById('stanford-input').value;
    stanford_api_url = '/stanford_POS';
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: stanford_api_url,
        data: {
            'sent-in': sent,
        },
        success: function (received_data) {
            const ans = received_data['data'];
            $('#stanford-input-T').text('');
            let output;
            ans.text.forEach((item, o) => {
                output +=
                    '<tr>' +
                    '<th>' +
                    ans.text[o] +
                    '</th>' +
                    '<th>' +
                    ans.xpos[o] +
                    '</th>' +
                    '<th>' +
                    ans.upos[o] +
                    '</th>' +
                    '</tr>';
            });
            console.log(output);
            $('#stanford-input-T').append(output);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function stanford_dependency() {
    sent = document.getElementById('test_input').value;
    stanford_dependency_api_url = '/stanford_dependency';
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: stanford_dependency_api_url,
        data: {
            'sent-in': sent,
        },
        success: function (received_data) {
            const ans = received_data['data'];
            console.log(ans);
            let output;
            output = `
           
            `;
            $('#test_output').append(output);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function call_setence_POS() {
    level = document.querySelector('#setence_levelselect').value;
    source = document.querySelector('#setence_sourceselect').value;
    document.querySelector('#setence_level').innerHTML = level;
    setence_url = '/getSent';
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: setence_url,
        data: {
            level: level,
            source: source,
        },
        success: function (received_data) {
            const ans = received_data['data'];
            let output = '';
            let result = ans.filter(function (element, index, arr) {
                return arr.indexOf(element) === index;
            });
            $('#sentence_output').empty();
            result.sort(() => {
                return Math.random() - 0.5;
            });
            for (let i = 1; i < 100; i++) {
                output += `<li><a href="#">${result[i]}</a></li>`;
            }
            console.log(output);
            $('#sentence_output').append(output);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function call_getVgDate_POS() {
    if (d3.select('#dataviz-container').select('svg')) d3.select('#dataviz-container').select('svg').remove();
    $('svg').empty();
    let level = document.querySelector('#levelselect').value;
    getVgData_url = '/getVgData';
    let ans;
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: getVgData_url,
        data: {
            level: level,
        },
        success: function (received_data) {
            ans = received_data['data'];

            var svg = d3.select('svg'),
                width = +svg.attr('width'),
                height = +svg.attr('height');

            data = ans.map((ans) => ans.coordinate);

            data.forEach(function (e, index) {
                data[index] = [
                    String(parseFloat(data[index][0]) * 10),
                    String(parseFloat(data[index][1]) * 10),
                    ans[index].word,
                ];
            });

            var g = svg.append('g');
            text = svg
                .selectAll('g')
                .data(data)
                .enter()
                .append('text')
                .attr('x', function (d) {
                    return d[0] - 3;
                })
                .attr('y', function (d) {
                    return d[1] - 3;
                })
                .attr('dy', '.35em')
                .text(function (d) {
                    return d[2];
                })
                .style('font-size', '2px');

            var circle = g
                .selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('r', 1)
                .attr('id', function (d, i) {
                    return d[2];
                })
                .attr('transform', function (d) {
                    // console.log('translate(' + d[0] + ',' + d[1] + ')');
                    return 'translate(' + d[0] + ',' + d[1] + ')';
                });

            let zoomTrans = { x: 0, y: 0, scale: 1 };
            let zoom = d3
                .zoom()
                .scaleExtent([1, 10])
                .on('zoom', () => {
                    zoomTrans.x = d3.event.transform.x;
                    zoomTrans.y = d3.event.transform.y;
                    zoomTrans.scale = d3.event.transform.k;
                    g.attr('transform', d3.event.transform);
                    text.attr('transform', d3.event.transform);
                });

            svg.call(zoom).on('dblclick.zoom', null);

            callcircleAll();
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function callcircleAll() {
    circleAll = document.querySelectorAll('circle');
    console.log(circleAll);
    circleAll.forEach((e, index) => {
        $(e).on('click', function (e, index) {
            vocabularyCircleClick(e.target.id);
            console.log('ss');
            $('#Vocabulary_content').show();
            $('#Vocabulary_content .funtctionbtn').hide();
            $('#Vocabulary_content .Demowrap').hide();
            callvocabularyA();
        });
    });
}
function callvocabularyA() {
    vocabulary = document.querySelectorAll('.hypernyms');
    vocabulary.forEach((e, index) => {
        $(e).on('click', function (e, index) {
            console.log('ss');
            vocabularyCircleClick(e.target.id);
            $('#Vocabulary_content').show();
        });
    });
}
function vocabularyCircleClick(vocabulary) {
    sent = vocabulary;
    $.ajax({
        type: 'POST',
        url: '/getVgWord',
        data: {
            word: sent,
        },
        success: function (response) {
            let ans = response['data'];

            if (ans.result.length !== 0) {
                $('#Synonyms_box').empty();
                $('#antonyms_box').empty();
                $('#hypernyms_box').empty();
                $('#hyponyms_box').empty();
                $('#example').empty();
                $('#vocabularytitle_output').text(sent);
                $('#vocabularytitle_pos').text(ans.result[0].POS);
                $('.definition').text(ans.result[0].Meaning);
                $('#pinyin').text(ans.phonetic);
                $('#vocabularytitle_level').text(ans.Level);
                let synonyms = '';
                let antonyms = '';
                let hypernyms = '';
                let hyponyms = '';
                let example = '';
                ans.examples.forEach((item, index) => {
                    example += `
                    <li>${ans.examples[index]}</li>
                    `;
                });
                $('#example').append(example);

                ans.synonyms.forEach((item, index) => {
                    synonyms += `
                    <a class="hypernyms" id="${ans.synonyms[index]}" href="#">${ans.synonyms[index]}</a>
                    `;
                });
                $('#Synonyms_box').append(synonyms);

                ans.antonyms.forEach((item, index) => {
                    antonyms += `
                    <a class="hypernyms" id="${ans.antonyms[index]}" href="#">${ans.antonyms[index]}</a>
                    `;
                });
                $('#antonyms_box').append(antonyms);

                ans.hypernyms.forEach((item, index) => {
                    hypernyms += `
                    <a class="hypernyms" id="${ans.hypernyms[index]}" href="#">${ans.hypernyms[index]}</a>
                    `;
                });
                $('#hypernyms_box').append(hypernyms);

                ans.hyponyms.forEach((item, index) => {
                    hyponyms += `
                    <a class="hypernyms" id="${ans.hyponyms[index]}" href="#">${ans.hyponyms[index]}</a>
                    `;
                });
                $('#hyponyms_box').append(hyponyms);

                $('#vocabulary_container').show();
            } else {
                window.alert('查無單字');
            }
        },
        Error: () => {
            console.log('getVgWord() url error');
        },
    });
}

function getRandSent() {
    $.ajax({
        type: 'POST',
        url: '/getRandSent',
        success: function (response) {
            ans = response['data'];
            let output;
            ans.forEach((item, o) => {
                output += `<option value="${ans[o]}">${ans[o]}</option>`;
            });
            $('#demoselect').append(output);
        },
    });
}

function call_dependency_parsing() {
    $('#dependency_parsing_output').empty();
    console.log($('#dependency_parsing_select').val());
    if ($('#dependency_parsing_select').val() === 'spaCy') {
        return spaCy_dependency_POS();
    } else if ($('#dependency_parsing_select').val() === 'spaCy square') {
        return spaCy_squareDependency();
    }
}

//spaCy圖檔
function spaCy_dependency_POS() {
    sent = document.getElementById('originbox').value;
    spaCy_dependency_api_url = '/spaCy_dependency';
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: spaCy_dependency_api_url,
        data: {
            'sent-in': sent,
        },
        success: function (received_data) {
            const ans = received_data['data'];
            console.log(ans);
            let output;
            output = `
            <img src="data:image/jpg;base64, ${ans}">
            `;

            $.ajax({
                type: 'POST',
                url: '/sent_translate',
                data: {
                    sent_input: sent,
                },
                success: function (response) {
                    $('#translation').empty();
                    $('#translation').append(response['translate']);
                },
            });
            $('#dependency_parsing_output').append(output);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}
//spaCy圖檔 方形
function spaCy_squareDependency() {
    sent = document.getElementById('originbox').value;
    spaCy_dependency_api_url = '/spaCy_squareDependency';
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    //ajax code
    jQuery.ajax({
        type: 'POST',
        url: spaCy_dependency_api_url,
        data: {
            'sent-in': sent,
        },
        success: function (received_data) {
            const ans = received_data['data'];
            console.log(ans);
            let output;
            output = `
            <img style="width:90%;" src="data:image/jpg;base64, ${ans}">
            `;
            $.ajax({
                type: 'POST',
                url: '/sent_translate',
                data: {
                    sent_input: sent,
                },
                success: function (response) {
                    $('#translation').empty();
                    $('#translation').append(response['translate']);
                },
            });
            $('#dependency_parsing_output').append(output);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function spaCy_splitSent() {
    sent = $('#spaCy_splitSent_input').val();
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    $.ajax({
        type: 'POST',
        url: '/spaCy_splitSent',
        data: {
            'sent-in': sent,
        },
        success: function (received_data) {
            $('#spaCy_splitSent_table').empty();
            ans = received_data['data'];
            let output;
            console.log(ans);
            $('#spaCy_splitSent_sum').text(`句子數量:  ${ans.length}`);
            ans.forEach((o, index) => {
                output += `
                <tr>
                <td>${index + 1}</td>
                <td>${ans[index]}</td>
                </tr>
                `;
            });
            $('#spaCy_splitSent_table').append(output);
        },
        Error: function () {
            console.log('spaCy_splitSent:error');
        },
    });
}

function spaCy_tokenization() {
    spaCy_tokenization_url = '/spaCy_tokenization';
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    $('#spaCy_tokenization_table').empty();
    $.ajax({
        type: 'POST',
        url: spaCy_tokenization_url,
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            ans = response['data'];
            console.log(ans);
            let output;
            if ($('#direction_select').val() === 'horizontal') {
                output = `
                <tr>
                `;
                ans.forEach((o, index) => {
                    output += `
                        <td>${index + 1}</td>
                    `;
                });
                output += `</tr><tr>`;
                ans.forEach((o, index) => {
                    output += `
                    <td>${ans[index]}</td>
                    `;
                });
                output += `
                    </tr>
                `;
            } else {
                ans.forEach((o, index) => {
                    output += `
                    <tr>
                    <td>${index + 1}</td>
                    <td>${ans[index]}</td>
                    </tr>
                    `;
                });
            }

            $('#spaCy_tokenization_table').append(output);
        },
        Error: () => {
            console.log('spaCy_tokenization error');
        },
    });
}

// var base64string = ``;
// var base64array = [];

function baseAudiotest(event) {
    console.log(event.target.dataset.audio);
    var snd = new Audio('data:audio/wav;base64,' + event.target.dataset.audio);
    snd.play();
}

function POS_tagging() {
    base64array = [];
    let POS_tagging_url = null;
    let sent = null;
    POS_tagging_url = '/' + $('#model_select').val() + '_POS';
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    $('#POS_tagging_runwrap').text('');
    $.ajax({
        type: 'POST',
        url: POS_tagging_url,
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            console.table(response);
            ans = response['data'];
            let output = null;
            if ($('#direction_select').val() === 'horizontal') {
                if ($('#model_select').val() === 'spacy') {
                    output = `<table id="spaCy_tokenization_table"><tr><td>TEXT</td>`;
                    ans.text.forEach((o, index) => {
                        output += `
                        <td>${ans.text[index]}</td>
                        `;
                    });
                    output += `</tr>`;
                    output += `<tr><td>IPA</td>`;
                    ans.dep.forEach((o, index) => {
                        output += `
                        <td onclick="IPAspeech(this)" data-ipa="${ans.text[index]}" >${ans.IPA[index]}</td>
                        `;
                    });

                    output += `<tr><td>POS</td>`;
                    ans.pos.forEach((o, index) => {
                        output += `
                        <td>${ans.pos[index]}</td>
                        `;
                    });
                    output += `</tr>`;

                    output += `<tr><td>DEP</td>`;
                    ans.dep.forEach((o, index) => {
                        output += `
                        <td>${ans.dep[index]}</td>
                        `;
                    });

                    output += `</tr></table>`;
                    $('#POS_tagging_runwrap').append(output);
                } else {
                    output = `<table id="spaCy_tokenization_table"><tr><td>TEXT</td>`;
                    ans.text.forEach((o, index) => {
                        output += `
                        <td>${ans.text[index]}</td>
                        `;
                    });
                    output += `</tr>`;

                    output += `<tr><td>XPOS</td>`;
                    ans.xpos.forEach((o, index) => {
                        output += `
                        <td>${ans.xpos[index]}</td>
                        `;
                    });
                    output += `</tr>`;

                    output += `<tr><td>UPOS</td>`;
                    ans.upos.forEach((o, index) => {
                        output += `
                        <td>${ans.upos[index]}</td>
                        `;
                    });

                    output += `</tr></table>`;
                    $('#POS_tagging_runwrap').append(output);
                    base64Audio();
                }
            } else {
                if ($('#model_select').val() === 'spacy') {
                    output = `<table class="spacy-T">
                            <thead>
                                <tr>
                                    <td class="spacy-text">TEXT</td>
                                    <td class="spacy-dep">IPA</td>
                                    <td class="spacy-pos">POS</td>
                                    <td class="spacy-dep">DEP</td>
                                </tr>
                            </thead>
                            <tbody id="spacy-input-T">

                        </tbody>
                    </table>`;
                    $('#POS_tagging_runwrap').append(output);
                    output = '';
                    ans.text.forEach((item, o) => {
                        output += `
                        <tr>
                        <td>${ans.text[o]}</td>
                        <td>${ans.IPA[o]}</td>
                        <td>${ans.pos[o]}</td>
                        <td>${ans.dep[o]}</td>
                        </tr>
                        `;
                    });
                    $('#spacy-input-T').append(output);
                } else if ($('#model_select').val() === 'stanford') {
                    output = `<table class="stanford-T">
                    <thead>
                        <tr>
                            <td class="stanford-textt">TEXT</td>
                            <td class="stanford-xpos">XPOS</td>
                            <td class="stanford-upos">UPOS</td>
                        </tr>
                    </thead>
                    <tbody id="stanford-input-T">
    
                    </tbody>
                </table>`;
                    $('#POS_tagging_runwrap').append(output);
                    output = '';
                    ans.text.forEach((item, o) => {
                        output += `
                    <tr>
                    <td>${ans.text[o]}</td>
                    <td>${ans.xpos[o]}</td>
                    <td>${ans.upos[o]}</td>
                    </tr>
                    `;
                    });
                    $('#stanford-input-T').append(output);
                }
            }
        },
        Error: () => {
            console.log('POS_tagging error');
        },
    });
}
function IPAspeech(text) {
    // var synth = window.speechSynthesis;
    var Speech = new SpeechSynthesisUtterance(text.dataset.ipa);
    Speech.rate = '1';
    Speech.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(Speech);
}

function named_entity_recognition() {
    let named_entity_recognition_url = null;
    let sent = null;
    named_entity_recognition_url = '/' + $('#model_select').val() + '_ER';
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    $('#named_entity_recognition_runwrap').text('');
    $.ajax({
        type: 'POST',
        url: named_entity_recognition_url,
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            let output = '';
            ans = response['data'];
            console.log(ans);
            ans.forEach((item, o) => {
                if (ans[o].label !== 'NULL') {
                    output += `
                    <span class="nER_box_${ans[o].label} nER_box">
                        <span class="nER_top">${ans[o].text}</span>
                        <span class="nER_bottom nER_bottom_${ans[o].label}">${ans[o].label}</span>
                    </span>
                    `;
                } else {
                    output += `
                    <span class="nER_span">${ans[o].text}</span>
                    `;
                }
            });
            console.log(output);
            $('#named_entity_recognition_runwrap').append(output);
        },
        Error: () => {
            console.log('named_entity_recognition() ajax error');
        },
    });
}
//詞性分配
function spaCy_splitByPOS() {
    sent = $('#test_input').val();
    $.ajax({
        type: 'POST',
        url: '/spaCy_splitByPOS',
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            console.table(response['data']);
        },
    });
}

//spaCy_lemmatization
function spaCy_Conllu() {
    sent = $('#test_input').val();
    $.ajax({
        type: 'POST',
        url: '/spaCy_Conllu',
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            console.table(response['data']);
        },
    });
}

function spaCy_extractPhrase() {
    let sent = null;
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    $('#spaCy_extractPhrase_table').text('');
    $.ajax({
        type: 'POST',
        url: '/spaCy_extractPhrase',
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            console.table(response['data']);
        },
    });
}

function spaCy_extractNounChunk() {
    let sent = null;
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    $('#spaCy_tokenization_table').text('');
    $.ajax({
        type: 'POST',
        url: '/spaCy_extractNounChunk',
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            console.log(response['data']);
            console.table(response['data']);
            let ans = response['data'];
            let output;
            output += `
            <tr><td>chunkText</td>
            `;
            ans.chunkText.forEach((item, index) => {
                output += `
                <td>${ans.chunkText[index]}</td>
                `;
            });
            output += `</tr>`;

            output += `
            <tr><td>chunkroot</td>
            `;
            ans.chunkroot.forEach((item, index) => {
                output += `
                <td>${ans.chunkroot[index]}</td>
                `;
            });
            output += `</tr>`;

            output += `
            <tr><td>rootHead</td>
            `;
            ans.rootHead.forEach((item, index) => {
                output += `
                <td>${ans.rootHead[index]}</td>
                `;
            });
            output += `</tr>`;

            output += `
            <tr><td>rootDep</td>
            `;
            ans.rootDep.forEach((item, index) => {
                output += `
                <td>${ans.rootDep[index]}</td>
                `;
            });
            output += `</tr>`;
            $('#spaCy_tokenization_table').append(output);
        },
    });
}

function getVgWord() {
    sent = $('#originbox').val();
    $.ajax({
        type: 'POST',
        url: '/getVgWord',
        data: {
            word: sent,
        },
        success: function (response) {
            let ans = response['data'];
            if (ans.result.length !== 0) {
                $('#Synonyms_box').empty();
                $('#antonyms_box').empty();
                $('#hypernyms_box').empty();
                $('#hyponyms_box').empty();
                $('#example').empty();
                console.log(ans);
                $('#vocabularytitle_output').text(sent);
                $('#vocabularytitle_pos').text(ans.result[0].POS);
                $('.definition').text(ans.result[0].Meaning);
                $('#pinyin').text(ans.phonetic);
                $('#vocabularytitle_level').text(ans.Level);
                let synonyms = '';
                let antonyms = '';
                let hypernyms = '';
                let hyponyms = '';
                let example = '';
                ans.examples.forEach((item, index) => {
                    example += `
                    <li>${ans.examples[index]}</li>
                    `;
                });
                $('#example').append(example);

                ans.synonyms.forEach((item, index) => {
                    synonyms += `
                    <a class="hypernyms" id="${ans.synonyms[index]}" href="#">${ans.synonyms[index]}</a>
                    `;
                });
                $('#Synonyms_box').append(synonyms);

                ans.antonyms.forEach((item, index) => {
                    antonyms += `
                    <a class="hypernyms" id="${ans.antonyms[index]}" href="#">${ans.antonyms[index]}</a>
                    `;
                });
                $('#antonyms_box').append(antonyms);

                ans.hypernyms.forEach((item, index) => {
                    hypernyms += `
                    <a class="hypernyms" id="${ans.hypernyms[index]}" href="#">${ans.hypernyms[index]}</a>
                    `;
                });
                $('#hypernyms_box').append(hypernyms);

                ans.hyponyms.forEach((item, index) => {
                    hyponyms += `
                    <a class="hypernyms" id="${ans.hyponyms[index]}" href="#">${ans.hyponyms[index]}</a>
                    `;
                });
                $('#hyponyms_box').append(hyponyms);

                $('#vocabulary_container').show();
                callvocabularyA();
            } else {
                window.alert('查無單字');
            }
        },
        Error: () => {
            console.log('getVgWord() url error');
        },
    });
}

function getWordCount() {
    $('#vocabulary_container').show();
    $.ajax({
        type: 'POST',
        url: '/getWordCount',
        success: function (response) {
            let ans = response['data'];
            console.log(ans);
            $('#Vocabulary_quantity_content .runwrap').empty();
            $('#Vocabulary_quantity_content .runwrap').append(
                `A1: ${ans.A1} (${ans.a1}) 初級(Elementary) 相當於國中畢業</br>A2: ${ans.A2} (${
                    ans.a2
                }) 中級(Intermediate) 相當於高中畢業</br>B1: ${ans.B1} (${
                    ans.b1
                }) 中高級(High-Intermediate) 相當於大學畢業</br> B2: ${ans.B2} (${
                    ans.b2
                }) 高級(Advanced) 相當於大學主修英語畢業或英語系國家進修取得學位者 </br> C1: ${ans.C1} (${
                    ans.c1
                }) 優級(Superior) 相當於受過高等教育之母語人士，各種場合均能使用適當策略做最有效的溝通。 </br> C2: ${
                    ans.C2
                } (0)</br>All: ${ans.ALL} (${
                    parseInt(ans.a1) + parseInt(ans.a2) + parseInt(ans.b1) + parseInt(ans.b2) + parseInt(ans.c1)
                })`
            );
        },
        Error: () => {
            console.log('ajax getWordCount error');
        },
    });
}

function getSentCount() {
    sent = $('#setence_count_select').val();
    console.log(sent);
    $.ajax({
        type: 'POST',
        url: '/getSentCount',
        data: {
            Source: sent,
        },
        success: function (response) {
            $('#sentence_count_container .runwrap').empty();
            $('.runwrap').append(`目前${sent}的句子數量為:${response['data']}`);
        },
    });
}

function spaCy_vis() {
    sent = document.getElementById('originbox').value;
    spaCy_vis_url = '/spaCy_vis';
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    $.ajax({
        type: 'POST',
        url: spaCy_vis_url,
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            let ans = response['data'];
            // $('#constituency_parsing_output').append(hierplane.renderTree(ans[0].tree));
            hierplane.renderTree(ans[0].tree, { target: '#constituency_parsing_output' });
        },
    });
}

function spaCy_strcutre() {
    $('#strcutre_table tbody').empty();
    sent = document.getElementById('originbox').value;
    spaCy_vis_url = '/spaCy_strcutre';
    if ($('#originbox').val() !== '') {
        sent = $('#originbox').val();
    } else {
        sent = $('#demoselect').val();
    }
    $.ajax({
        type: 'POST',
        url: '/sent_translate',
        data: {
            sent_input: sent,
        },
        success: function (received_data) {
            const ans = received_data['translate'];
            $('#strcutre_translate').append(ans);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
    $.ajax({
        type: 'POST',
        url: 'spaCy_strcutre',
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            let ans = response['data'];

            let output;
            ans.conll.From.forEach((e, index) => {
                output += `s
                <tr>
                <td>${ans.conll.index[index]}</td>
                <td>${ans.conll.From[index]}</td>
                <td>${ans.conll.Lemma[index]}</td>
                <td>${ans.conll.POS[index]}</td>
                <td>${ans.conll.POS_Description[index]}</td>
                <td>${ans.conll.Linktoindex[index]}</td>
                <td>${ans.conll.Relation[index]}</td>
                <td>${ans.conll.Relation_Description[index]}</td>
                <td>${ans.conll.tree[index]}</td>
                </tr>
                `;
            });
            $('#structre_img').text('');
            $('#structre_img').append(` <img src="data:image/jpg;base64, ${ans.displacy}">`);
            $('#strcutre_table tbody').append(output);
        },
        Error: function () {
            console.log('spaCy_strcutre url error');
        },
    });

    $.ajax({
        type: 'POST',
        url: '/spaCy_vis',
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            let ans = response['data'];
            // $('#constituency_parsing_output').append(hierplane.renderTree(ans[0].tree));
            hierplane.renderTree(ans[0].tree, { target: '#constituency_parsing_output' });
        },
    });
}
function bertSpace() {
    let sent = $('#originbox').val();
    $('#spaCy_tokenization_table').empty();
    $.ajax({
        type: 'POST',
        url: '/bertSpace',
        data: {
            'sent-in': sent,
        },
        success: function (response) {
            ans = response['data'];
            console.log(ans);
            output = `<tr><td>Predictions</td><td>Accuracy</td></tr>`;
            ans.predictions.forEach((e, index) => {
                output += `
                <tr>
                <td>${ans.predictions[index]}</td>
                <td>${ans.Accuracy[index]}</td>
                </tr>
                `;
            });
            $('#spaCy_tokenization_table').append(output);
        },
    });
}
// words page
// function call_words() {
//     $.ajax({
//         type: 'POST',
//         url: '/getWordList',
//         success: function (response) {
//             let output = '<tr><td>Number of Sentences</td><td>Word / Word Family</td></tr>';
//             response.Word.forEach((e, index) => {
//                 output += `
//             <tr>
//                 <td>${response.sentCount[index]}</td>
//                 <td onclick="call_getSentByWrod(this)" calss="SentByWord" >${response.Word[index]}</td>
//             </tr>
//                 `;
//             });
//             $('.runwrap').append(output);
//         },
//     });
// }
function call_getSentByWord(value) {
    $('.wordSentenceContainer').empty();
    $.ajax({
        type: 'POST',
        url: '/getSentByWord',
        data: {
            Word: value.innerHTML,
        },
        success: function (response) {
            output = `<tr>
                        <td>Sentence</td>
                        <td>Topic</td>
                        <td>Chinese</td>
                        <td>Translate_Eng</td>
                        <td>Similarity</td>
                        <td>Complited : ${response.ComplitCount}</td>
                      </tr>`;
            response.Sent.forEach((e, index) => {
                output += `
                <tr>
                    <td>${response.Sent[index]}</td>
                    <td>${response.sentTopic[index]}</td>
                    <td>${response.Chinese[index]}</td>
                    <td>${response.Translate_Eng[index]}</td>
                    <td>${response.Similarity[index]}</td>
                </tr>
                `;
            });
            $('.wordSentenceContainer').append(output);
        },
    });
}
