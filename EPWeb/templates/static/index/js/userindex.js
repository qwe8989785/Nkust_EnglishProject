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
            <img src="data:image/jpg;base64, ${ans}">
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
            result.forEach((item, o) => {
                output += `<li><a href="#">${result[o]}</a></li>`;
            });
            $('#sentence_output').append(output);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function call_getVgDate_POS() {
    if (d3.select('#dataviz-container').select('svg')) d3.select('#dataviz-container').select('svg').remove();

    let level = document.querySelector('#getVgDate_levelselect').value;
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
            console.log(received_data['data']);
            ans = received_data['data'];
            ans.forEach((item, o) => {
                item.coordinate[0] = +item.coordinate[0];
                item.coordinate[1] = +item.coordinate[1];
            });

            // generate the dataviz
            var svg = d3
                .select('#dataviz-container')
                .append('svg:svg')
                // .attr('transform', "scale(2)")
                .attr('Id', 'bigsvg')
                .attr('width', 1000)
                .attr('height', 1000);

            svg.selectAll('.circle')
                .data(ans)
                .enter()
                .append('circle')
                .attr('Id', 'a1Circle')
                .attr('r', 1)
                .attr('fill', '#FF8800')
                .attr('cx', function (da1) {
                    return da1.coordinate[0] + 250;
                })
                .attr('cy', function (da1) {
                    return da1.coordinate[1] + 250;
                })
                .attr('id', function (d, i) {
                    console.log(d, i);
                    return i;
                });
            var count = ans.length;
            document.getElementById('count').innerHTML = String(count);
            // });
        },
        Error: function () {
            console.log('trans-error');
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
    console.log($('#dependency_parsing_select').val());
    if ($('#dependency_parsing_select').val() === 'spaCy') {
        return spaCy_dependency_POS();
    } else {
        return stanford_dependency();
    }
}

//spaCy圖檔
function spaCy_dependency_POS() {
    sent = document.getElementById('dependency_parsing_input').value;
    spaCy_dependency_api_url = '/spaCy_dependency';
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
            $('#dependency_parsing_output').append(output);
        },
        Error: function () {
            console.log('trans-error');
        },
    });
}

function getWordCount() {
    $.ajax({
        type: 'POST',
        url: '/getWordCount',
        // data: "data",
        dataType: 'dataType',
        success: function (response) {},
    });
}
