$(function(){
    let i = 0;

    function slide() {
      i++;
      if (i > $(".middle_banner_slider li:last").index()) {
        i = 0;
      }

      $(".middle_banner_slider li").eq(i).stop().fadeIn("slow");
      $(".middle_banner_slider li").eq(i - 1).stop().fadeOut("slow");

    }

    setInterval(slide, 2000);
});

$(function(){
    let i = 0;

    function slide() {
      i++;
      if (i > $(".bottom_banner_slider li:last").index()) {
        i = 0;
      }

      $(".bottom_banner_slider li").eq(i).stop().fadeIn("slow");
      $(".bottom_banner_slider li").eq(i - 1).stop().fadeOut("slow");

    }

    setInterval(slide, 2000);
});