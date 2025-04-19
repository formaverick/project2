$(function () {
    $(document).on("click", ".hot_index span:eq(1)", function (e) {
        e.preventDefault();
        $(".hot_index span").css("color", "#AFAFAF");
        $(this).css("color", "#000");

        $.ajax({
            url: "json/monthbest.json",
            dataType: "json",
            success : function(data){
                if(data.length>0){
                for(var i in data){
                    $(".weekbox .product_img").eq(i).empty().append('<a href="#"><img src="img/' + data[i].src + '" alt="Product Image"></a>');
                    $(".weekbox .product_info p").eq(i).text(data[i].name);
                    $(".weekbox .product_info h5").eq(i).text(data[i].detail);
                    $(".weekbox .product_info .discount").eq(i).text(data[i].discount);
                    $(".weekbox .product_info .last_price").eq(i).text(data[i].price);
                    $(".weekbox .product_info .origin_price").eq(i).text(data[i].originalprice);
                    }
                }
            }
        });
    });
});