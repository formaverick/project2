$(function () {
    $(".lanklist a:eq(0)").css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

    $.ajax({
        url: "json/lanking_pen.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".lankmain .lankimg").eq(i).append('<a href="#">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".lankmain .product_info p").eq(i).text(data[i].name);
                    $(".lankmain .product_info h5").eq(i).text(data[i].detail);
                    $(".lankmain .product_info .discount").eq(i).text(data[i].discount);
                    $(".lankmain .product_info .last_price").eq(i).text(data[i].price);
                }
            }
        }
    });

    $(document).on("click", ".lanklist a:eq(0)", function (e) {
        e.preventDefault();
        $(".lanklist a").css("border", "").css("border-radius", "").css("box-shadow", "");
        $(".lanklist a:eq(0)").css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

        $.ajax({
            url: "json/lanking_pen.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".lankmain .lankimg").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".lankmain .product_info").eq(index);

                            $imgContainer.html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
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

    $(document).on("click", ".lanklist a:eq(1)", function(e){
        e.preventDefault();
        $(".lanklist a").css("border", "").css("border-radius", "").css("box-shadow", "");
        $(this).css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

        $.ajax({
            url: "json/lanking_design.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".lankmain .lankimg").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".lankmain .product_info").eq(index);

                            $imgContainer.html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
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

    $(document).on("click", ".lanklist a:eq(2)", function(e){
        e.preventDefault();
        $(".lanklist a").css("border", "").css("border-radius", "").css("box-shadow", "");
        $(this).css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

        $.ajax({
            url: "json/lanking_office.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".lankmain .lankimg").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".lankmain .product_info").eq(index);

                            $imgContainer.html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
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

    $(document).on("click", ".lanklist a:eq(3)", function(e){
        e.preventDefault();
        $(".lanklist a").css("border", "").css("border-radius", "").css("box-shadow", "");
        $(this).css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

        $.ajax({
            url: "json/lanking_book.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".lankmain .lankimg").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".lankmain .product_info").eq(index);

                            $imgContainer.html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
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

    $(document).on("click", ".lanklist a:eq(4)", function(e){
        e.preventDefault();
        $(".lanklist a").css("border", "").css("border-radius", "").css("box-shadow", "");
        $(this).css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

        $.ajax({
            url: "json/lanking_goods.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".lankmain .lankimg").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".lankmain .product_info").eq(index);

                            $imgContainer.html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
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

    $(document).on("click", ".lanklist a:eq(5)", function(e){
        e.preventDefault();
        $(".lanklist a").css("border", "").css("border-radius", "").css("box-shadow", "");
        $(this).css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

        $.ajax({
            url: "json/lanking_tech.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".lankmain .lankimg").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".lankmain .product_info").eq(index);

                            $imgContainer.html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
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

    $(document).on("click", ".lanklist a:eq(6)", function(e){
        e.preventDefault();
        $(".lanklist a").css("border", "").css("border-radius", "").css("box-shadow", "");
        $(this).css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

        $.ajax({
            url: "json/lanking_life.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".lankmain .lankimg").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".lankmain .product_info").eq(index);

                            $imgContainer.html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
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

    $(document).on("click", ".lanklist a:eq(7)", function(e){
        e.preventDefault();
        $(".lanklist a").css("border", "").css("border-radius", "").css("box-shadow", "");
        $(this).css("border", "1px solid #E8422F").css("border-radius", "30px").css("box-shadow", "0px 0px 5px #E8422F");

        $.ajax({
            url: "json/lanking_trip.json",
            dataType: "json",
            success: function (data) {
                if (Array.isArray(data) && data.length > 0) {
                    $(".lankmain .lankimg").each(function (index) {
                        if (data[index]) {
                            const item = data[index];
                            const $imgContainer = $(this);
                            const $productInfo = $(".lankmain .product_info").eq(index);

                            $imgContainer.html(`<a href="#"><img src="img/${item.src}" alt="${item.name}"></a>`);
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