;
(function() {

})();

let origintxt, translationtxt;

//先判斷是否為 ios 裝置
let initial = false

function promptIOS() {
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        if (initial) {
            $('.prompt').toggleClass('displaynone')
        } else {
            initial = true
        }

    }
}

// 暫時的翻譯交換 可以用currentLG跟changeLG判斷現在是中文還是英文
function changelanguage() {
    currentLG = $("#left-input").text()
    changeLG = $("#right-output").text()
    $("#right-output").text(currentLG)
    $("#left-input").text(changeLG)
}

function changetext(){
    origin = document.getElementById('originbox').value
    trans = document.getElementById('translationbox').value
    document.getElementById('originbox').value = trans
    document.getElementById('translationbox').value = origin
}

function cleartext() {
    $("#originbox").val("")
    $("#translationbox").val("")
    $(".wordcount").text("0/500")
    $("#keywordslistbox").val("")
}

// TS speak stop btn change
function TSspeakchange() {
    $("#translate-start").toggleClass("displaynone")
    $("#translate-stop").toggleClass("displaynone")
}

// EX speak stop btn change
function EXspeakchange() {
    $("#record-start").toggleClass("displaynone")
    $("#record-stop").toggleClass("displaynone")
}
