;

(function() {
    $.each($("#leftcontainer .controlicon"), function(i, o) {
        $('#leftcontainer .topitem').click(function() {
            if ($('.controlicon').is(':animated') === false) {
                console.log($('.controlicon').is(':animated'))
                setTimeout(function() {
                    if ($('.controlicon').eq(i).hasClass('controlboxOpen')) {
                        $('.controlicon').eq(i).removeClass('controlboxOpen')
                        $('.controlicon').eq(i).addClass('openiconboxOut')
                    } else {
                        $('.controlicon').eq(i).addClass('controlboxOpen')
                        $('.controlicon').eq(i).removeClass('openiconboxOut')
                    }
                }, 150 * i);
            }
        });
    })

    $.each($(".midcontainer_menu"), function(i, o) {

        $(o).click(function() {
            if ($('.subitem').is(':animated') === false) {
                $.each($(".subitem"), function(x, o) {
                    if (i !== x) {
                        $('.subitem').eq(x).slideUp(300)
                        if ($('.fa-angle-left').eq(x).hasClass("arrowrotate-end")) { //点击箭头旋转180度
                            $('.fa-angle-left').eq(x).removeClass("arrowrotate-end");
                            $('.fa-angle-left').eq(x).addClass("arrowrotate-start");
                        }
                    }
                });
                $('.subitem').eq(i).slideToggle(300)
                if ($('.fa-angle-left').eq(i).hasClass("arrowrotate-start")) { //点击箭头旋转180度
                    $('.fa-angle-left').eq(i).removeClass("arrowrotate-start");
                    $('.fa-angle-left').eq(i).addClass("arrowrotate-end");
                } else {
                    $('.fa-angle-left').eq(i).removeClass("arrowrotate-end"); //再次点击箭头回来
                    $('.fa-angle-left').eq(i).addClass("arrowrotate-start");
                }
            }
        });
    })
    let postolcode, county, township, address;
    postolcode = $('#postolcode').val()
    county = $('#county').val()
    township = $('#township').val()
    address = $('#address').val()

    $('#postolcode').change(function() {
        postolcode = $('#postolcode').val()
        console.log(postolcode)
    })
    $('#county').change(function() {
        county = $('#county').val()
        console.log(county)
    })
    $('#township').change(function() {
        township = $('#township').val()
        console.log(township)
    })
    $('#address').change(function() {
        address = $('#address').val()
        console.log(address)
    })
    $("#addresscheckbox").click(function() {
        var checkis = $(this).is(":checked");
        if (postolcode !== '' && county !== '' && township !== '' && address !== '') {
            if (checkis === true) {
                $('#postolcode2').val(postolcode)
                $('#county2').val(county)
                $('#township2').val(township)
                $('#address2').val(address)
                $($('#postolcode2').parent()).addClass('focusIn')
                $($('#county2').parent()).addClass('focusIn')
                $($('#township2').parent()).addClass('focusIn')
                $($('#address2').parent()).addClass('focusIn')
                if ($('#postolcode2').parent().hasClass('focusOutnull')) {
                    $('#postolcode2').parent().removeClass('focusOutnull')
                }
                if ($('#county2').parent().hasClass('focusOutnull')) {
                    $('#county2').parent().removeClass('focusOutnull')
                }
                if ($('#township2').parent().hasClass('focusOutnull')) {
                    $('#township2').parent().removeClass('focusOutnull')
                }
                if ($('#address2').parent().hasClass('focusOutnull')) {
                    $('#address2').parent().removeClass('focusOutnull')
                }
            }
            if (checkis === false) {
                $('#postolcode2').val('')
                $('#county2').val('')
                $('#township2').val('')
                $('#address2').val('')
                $($('#postolcode2').parent()).removeClass('focusIn')
                $($('#county2').parent()).removeClass('focusIn')
                $($('#township2').parent()).removeClass('focusIn')
                $($('#address2').parent()).removeClass('focusIn')
            }
        } else {
            alert('戶籍地址資料尚未填寫完畢')
            $("#addresscheckbox").prop("checked", false);
        }

    });


})()

function checknull() {
    var firsttop = $('#firsttop').offset().top
    $.each($('input, select'), function(index, val) {
        if ($(this).val() === "" && $(this).hasClass('search-txt') === false) {
            $('.content-wrap').animate({ scrollTop: $(this).offset().top - firsttop - 100 }, 1000);
            return false;
        }
    });
    $.each($('input, select'), function(index, val) {
        if ($(this).val() === "" && $(this).hasClass('search-txt') === false) {
            $(this).parent().addClass('focusOutnull')
        }
    });
}