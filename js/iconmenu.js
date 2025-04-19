$(function(){
    $.ajax({
        url: "json/iconmenu.json",
        dataType: "json",
        success: function (data) {
            // 데이터가 배열인지 확인
            if (Array.isArray(data) && data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    // .munu_icon div의 개수만큼 반복
                    if ($(".menu_icon div").eq(i).length) {
                        $(".menu_icon div").eq(i).append(
                            '<a href="sub.html">' + 
                            "<img src='img/" + data[i].src + "' alt='" + data[i].title + "'/>" + 
                            '<span>' + data[i].title + '</span>' + 
                            '</a>'
                        );
                    } else {
                        console.error(".munu_icon div 요소가 없습니다.");
                    }
                }
            } else {
                console.error("데이터가 배열이 아니거나 비어있습니다.");
            }
        },
        error: function(xhr, status, error) {
            console.error("AJAX 요청 오류: " + error);
        }
    });
});