$(function () {
    $.ajax({
        url: "json/slide.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                data.forEach((slide, i) => {
                    slide.slider.forEach((slider, j) => {
                        const k = i * 2 + j;
                        const $detail = $(".bannerimg").eq(k);

                        $detail.find(".bannerMainImg").append(`<a href="#"><img src="img/${slider.src}" alt="${slider.product}"></a>`);
                        $detail.find(".product_info .event").text(slider.event);
                        $detail.find(".product_info .product_info_main").append(`<h2>${slider.product}<br>${slider.product_br}</h2>`);
                        $detail.find(".product_info .product_info_bottom").text(slider.product_detail);
                    });
                });
            }
        }
    });

    function updateBlur() {
        $('.slide li').css('filter', "blur(3px)");
        const centerIndex = Math.floor($('.slide li').length / 2);
        $('.slide li').eq(centerIndex).css('filter', 'none');
    }

    function prev() {
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left', -1060);
        
        $('.slide').stop().animate({ marginLeft: 0 }, 900), function () {
            updateBlur();
        };
    }

    function next() {
        $('.slide').stop().animate({ marginLeft: -1060 }, function () {
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 });
            updateBlur();
        });
    }

    function slide() {
        $('.slide').stop().animate({ marginLeft: -1060 }, function () {
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 });

            updateBlur();
        });
    }

    setInterval(slide, 2400);
    updateBlur();

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });
});