;
$(document).ready(function() {
    $('#loginbut').on('click', function() {
        if ($('#account').val() === '' || $('#password').val() === '') {
            prompt('帳號或密碼不可為空值', 'alert', 'alert-danger', 2000)
            $('#account').val('')
            $('#password').val('')
            return
        }
        if ($('#account').val() === '111' && $('#password').val() === '111') {
            prompt('登 入 成 功', 'alert', 'alert-success', 2000)
            $('#account').val('')
            $('#password').val('')
            return
        }
        if ($('#account').val() === '333' && $('#password').val() === '333') {
            prompt('登 入 成 功', 'alert', 'alert-info', 2000)
            $('#account').val('')
            $('#password').val('')
            return
        }
        prompt('登 入 失 敗', 'alert', 'alert-warning', 2000)
        $('#account').val('')
        $('#password').val('')
        return
    })

    var prompt = function(message, style, status, time) {
        style = (style === undefined) ? 'alert' : style;
        time = (time === undefined) ? 2000 : time;
        $('<div>')
            .appendTo('body')
            .addClass(style)
            .html(message)
            .show()
            .delay(time)
            .fadeOut();
        $('<div>')
            .appendTo('.alert')
            .addClass(status)
            .show()
            .delay(time)
            .fadeOut();
        $('<div>')
            .appendTo('.alert')
            .addClass(status + '-top')
            .show()
            .delay(time)
            .fadeOut();
        $('<div>')
            .appendTo('.alert')
            .addClass('alert-bottom')
            .show()
            .delay(time)
            .fadeOut();
        setTimeout(() => {
            removealert(status)
        }, 2500)
    };

    function removealert(style) {
        $('.alert').remove()
    }

})