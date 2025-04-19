$(function () {
    $.ajax({
        url: "json/exhibition1.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                data.forEach((exhibition, i) => {
                    const $headInfo = $(".ex1_1 .exhibition_head_info").eq(i);
                    const $mainImage = $(".ex1_1 .re_main_image").eq(i);

                    $headInfo.append(`<h1>${exhibition.info}<br>${exhibition.infobr}</h1>`);
                    $headInfo.append(`<h5>${exhibition.infobottom}</h5>`);
                    $mainImage.append(`<a href="#"><img src="img/${exhibition.mainsrc}" alt="Main Image ${i}"></a>`);

                    exhibition.product.forEach((product, j) => {
                        const k = i * 2 + j;
                        const $detail = $(".re_detail").eq(k);

                        $detail.find(".re_img").append(`<a href="#"><img src="img/${product.src}" alt="${product.name}"></a>`);
                        $detail.find(".product_info p").text(product.name);
                        $detail.find(".product_info h5").text(product.detail);
                        $detail.find(".product_info .discount").text(product.discount);
                        $detail.find(".product_info .last_price").text(product.price);
                        $detail.find(".product_info .origin_price").text(product.originalprice);
                    });
                });
            }
        }
    });
});