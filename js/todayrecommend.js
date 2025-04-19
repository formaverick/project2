$(function(){
    $.ajax({
        url: "json/todayrecommend.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
            for(var i in data){
                $(".reco_product .reco_img").eq(i).append('<a href="#">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                $(".reco_product .product_info p").eq(i).text(data[i].name);
                $(".reco_product .product_info h5").eq(i).text(data[i].detail);
                $(".reco_product .product_info .discount").eq(i).text(data[i].discount);
                $(".reco_product .product_info .last_price").eq(i).text(data[i].price);
                $(".reco_product .product_info .origin_price").eq(i).text(data[i].originalprice);
                }
            }
        }
    });

    $(document).on("click", ".reset_recommend", function(e){
        e.preventDefault();
        $(".reset_recommend a").text("다른 추천보기 2/3");

        $.ajax({
            url: "json/todayrecommend2.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".reco_product").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".reco_product").eq(index);

                            $imgContainer.find(".reco_img").html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
                            $productInfo.find("p").text(item.name);
                            $productInfo.find("h5").text(item.detail);
                            $productInfo.find(".discount").text(item.discount);
                            $productInfo.find(".last_price").text(item.price);
                        }
                    });
                }
            }
        });
    });
});