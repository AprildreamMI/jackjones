window.onload=function () {

    var bannerBox=document.getElementsByClassName("banner")[0];
    var bannerScreen=document.getElementsByClassName("banner-screen")[0];
    var ulBox=document.getElementById("screen-ul");
    var olArr=bannerScreen.children[1];
    var sidebar=bannerScreen.children[2];
    var screenSidebar=document.getElementsByClassName("screen-sidebar")[0];

    var newLi=ulBox.children[0].cloneNode(true); //科隆第一项，添加到最后一项
    ulBox.appendChild(newLi);

    olArr.children[0].style.color="red"; //添加第一ol li样式，背景红色


    var screenWidth=bannerScreen.offsetWidth;  //外部盒子的宽度
    for (var i=0;i<olArr.children.length;i++)
    {
        olArr.children[i].index=i;
        olArr.children[i].onmouseover=function () {
            for(var j=0;j<olArr.children.length;j++)
            {
                olArr.children[j].style.color="#999999";
            }
            this.style.color="red";
            animate(ulBox,-this.index*screenWidth); //ul负值位移
            key=square=this.index;
        }
    }

    var timer=setInterval(animates,4000); //定时器无缝轮播


    var key=0;
    var square=0;
    function animates() {
        key++;
        square++;
        if (key>ulBox.children.length-1)  //不能大于2
        {
            ulBox.style.left=0+"px";
            key=1;
        }
        animate(ulBox,-key*screenWidth);
        if (square>olArr.children.length-1)
        {
            square=0;
        }
        for(var j=0;j<olArr.children.length;j++)
        {
            olArr.children[j].style.color="#999999";
        }
        olArr.children[square].style.color="red";
    }

    bannerBox.onmouseover=function () {   //放上去两边按钮显示
        clearInterval(timer);
        sidebar.style.display="block";
    }
    bannerBox.onmouseout=function () {
        timer=setInterval(animates,4000);    //继续定时器
        sidebar.style.display="none";
    }

    sidebar.children[0].onclick=function () {
        key--;
        square--;

        if (key<0)
        {
            key=1;
            ulBox.style.left=-(ulBox.children.length-1)*screenWidth;
        }
        animate(ulBox,-key*screenWidth);

        square=square<0?olArr.children.length-1:square;
        for(var j=0;j<olArr.children.length;j++)
        {
            olArr.children[j].style.color="#999999";
        }
        olArr.children[square].style.color="red";
    }
    sidebar.children[1].onclick=function () {
        animates();
    }


    //基本封装
    function animate(ele,target)
    {
        clearInterval(ele.timer); /*每次使用定时器之前都要清除定时器，防止越点越快*/
        var speed=target>ele.offsetLeft ?10:-10;  /*判断目标值和当前左值得大小,以决定是前进还是后退*/
        ele.timer=setInterval(function () {
            var val=target-ele.offsetLeft;
            ele.style.left=ele.offsetLeft+speed+"px";
            if (Math.abs(val)<Math.abs(speed)) {
                ele.style.left=target+"px";
                clearInterval(ele.timer);
            }
        },10)
    }

}