$(function () {

    $('.btn1').hover(function () {

        $('#category_main').stop().slideUp();

        $(this).find('#category_main').stop().slideToggle();

    });

});
$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.write').show("fast");

    }).mouseleave(function () {

        $('.write').stop().hide();

    });

});
$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.mungu').show("fast");

    }).mouseleave(function () {

        $('.mungu').stop().hide();

    });

});
$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.office').show("fast");

    }).mouseleave(function () {

        $('.office').stop().hide();

    });

});

$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.book').show("fast");

    }).mouseleave(function () {

        $('.book').stop().hide();

    });

});

$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.goods').show("fast");

    }).mouseleave(function () {

        $('.goods').stop().hide();

    });

});

$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.tech').show("fast");

    }).mouseleave(function () {

        $('.tech').stop().hide();

    });

});

$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.life').show("fast");

    }).mouseleave(function () {

        $('.life').stop().hide();

    });

});

$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.trip').show("fast");

    }).mouseleave(function () {

        $('.trip').stop().hide();

    });

});

$(function () {

    $('#category_main > li').on("mouseover click", function () {

        $(this).find('.kids').show("fast");

    }).mouseleave(function () {

        $('.kids').stop().hide();

    });

});


$(function () {
    $(".category_P > li").mouseover(function () {
        $(this).children(".category_C").stop().show();

    }).mouseout(function () {
        $(".category_C").stop().hide();
    });
});