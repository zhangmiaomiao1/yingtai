// 侧导航弹出
var obj;
var now;
 document.documentElement.scrollTop=1;
	if(document.documentElement.scrollTop){
		obj=document.documentElement;
	}else{
        obj=document.body;
	}
var flagdown="1"//开关是控制滚动条出现的位置，可以让它在一触发时就执行相对应的代码。
var flagup="1"
var sidebarleft=$(".jinling")[0]

var main2=$(".main2")
// alert(main2.length)
var jll=$(".jll")
var zi1=$(".zi1")
var btnli=$(".sidebarleft2");
//图片的按需加载所获取的东西开始
var lu=$(".hong")
//alert(hong.length)
var clientH=document.documentElement.clientHeight;
//var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
//alert(scrollTop)
//结束
window.onscroll=function(){    //滚动条一发生变化就开启执行代码
	if(obj.scrollTop>=800){
		if (flagdown==1){

			animate(sidebarleft,{opacity:1},200)
			flagdown=2;	
		}
		flagup=1;
	}else
		{if(flagup==1){

			animate(sidebarleft,{opacity:0},200)
		   flagup=2 ;  
		}
		flagdown=1;
	}
        for(var i=0;i<main2.length;i++){
        
        if(main2[i].offsetTop<=obj.scrollTop+180){
            for(var j=0;j<zi1.length;j++){
                zi1[j].style.display="none";
            }
            zi1[i].style.display="block"
            now=i
        }else{
            zi1[i].style.display="none";
        }
    }
var clientH=document.documentElement.clientHeight;
    //alert(clientH)
for(var i=0;i<lu.length;i++){
    if(lu[i].offsetTop<obj.scrollTop+clientH-100&&!lu[i].flag){
        var imgs=lu[i].getElementsByTagName("img")
        //alert(imgs.length)
        lu[i].flag=true;
        for(j=0;j<imgs.length;j++){
            imgs[j].src=imgs[j].getAttribute("url")
        }

    }
}

}



//精灵鼠标移入
for(var i=0;i<jll.length;i++){
    jll[i].aa=i;
   
    jll[i].onmouseover=function(){
        // alert(1)
        zi1[this.aa].style.display="block"
    }
    jll[i].onmouseout=function(){
        zi1[this.aa].style.display="none"
    }
}
//精灵的遮罩
for(var i=0;i<zi1.length;i++){
    zi1[i].aa=i;
    zi1[i].onclick=function(){
        animate(obj,{scrollTop:main2[this.aa].offsetTop-100},200)
        now=this.aa
    }
    zi1[i].onmouseover=function(){
        for(var j=0;j<zi1.length;j++){
            if(now!=j){
                zi1[j].style.display="none";
            }
        }
        zi1[this.aa].style.display="block"
    }
    zi1[i].onmouseout=function(){
        zi1[this.aa].style.display="none";
    }
}