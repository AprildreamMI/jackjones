/**
 * Created by zhaosi on 2018/6/20.
 */

window.onload=function () {

    var detailBox=document.getElementById("detail");
    var smallBox=document.getElementById("small");
    var maskBox=document.getElementById("mask");
    var bigBox=document.getElementById("big");
    var imgBig=bigBox.children[0];


    smallBox.onmouseenter=function () {
        show(maskBox);
        show(bigBox);
    }
    smallBox.onmouseleave=function () {
        hide(maskBox);
        hide(bigBox);
    }

    smallBox.onmousemove=function (event) {
        event= event || window.event;
        var pageX= event.pageX || scroll().left+event.clientX;
        var pageY= event.pageY || scroll().top+event.clientY;

        var x=pageX-detailBox.offsetLeft-maskBox.offsetWidth/2;
        var y=pageY-detailBox.offsetTop-maskBox.offsetHeight/2;

        if (x<0)
        {
            x=0;
        }
        if (x>smallBox.offsetWidth-maskBox.offsetWidth)
        {
            x=smallBox.offsetWidth-maskBox.offsetWidth;
        }
        if (y<0)
        {
            y=0;
        }
        if (y>smallBox.offsetHeight-maskBox.offsetHeight)
        {
            y=smallBox.offsetHeight-maskBox.offsetHeight;
        }

        maskBox.style.left=x+"px";
        maskBox.style.top=y+"px";

        var bili=imgBig.offsetWidth/smallBox.offsetWidth;

        var xx=x*bili;
        var yy=y*bili;

        imgBig.style.marginLeft=-xx+"px";
        imgBig.style.marginTop=-yy+"px";
    }






    //显示和隐藏
    function show(ele){
        ele.style.display = "block";
    }
    function hide(ele){
        ele.style.display = "none";
    }

    //获取scroll.top和left
    function scroll() {
        if(window.pageYOffset != null) {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode === "CSS1Compat") {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return {   // 未声明 DTD
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }

}
