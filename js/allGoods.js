/**
 * Created by zhaosi on 2018/6/22.
 */

$(window).ready(function () {

    $(".list-li").on("click",function () {
        if ($(this).find("img").attr("src")== "img/jia.png")
        {
            $(this).find("img").attr("src","img/jian.png");
            $(this).children("ol").slideDown();
            $(this).siblings("li").children("ol").slideUp().end().find("img").attr("src","img/jia.png");
        }else {
            $(this).find("img").attr("src","img/jia.png");
            $(this).children("ol").slideUp();
        }
    });

    $(".list-li-goodsCar").on("click",function () {
        var count=parseInt($(".carnum").text());
        count++;
        $(".carnum").text(count);
    })

});