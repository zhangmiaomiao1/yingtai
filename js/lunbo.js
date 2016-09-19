var imgbox=getClass("imgbox")[0]
// var img=imgbox.getElementsByTagName("a")
var BBt=$(".BBt")
// alert(img.length)
//图片
var btnbox=getClass("btn")[0]
var BN=$(".BN")
// alert(BN)
var btn=btnbox.getElementsByTagName("li")//小圆点
var leftbtn=$(".leftbtn")[0]
var rightbtn=$(".rightbtn")[0]
var num=0
function change(){
	num++;
	if(num>=BBt.length-1){//图片的长度也就是个数
		num=0;
	}//当图片都循环完成后，再将num清为0，开始新的一轮

for(var i=0;i<BBt.length;i++){
	BN[i].style.opacity=0
	BBt[i].style.opacity=0
	btn[i].id=""
   }//为了把图片的层级和小圆点清空5和红色
    // BBt[num].style.zIndex=5
    animate(BBt[num],{opacity:1})
    animate(BN[num],{opacity:1})

    btn[num].id="active";//让图片的小圆点想联系
}
var t=setInterval(change,2000)
//鼠标移入就不动，移开继续动
var banner=getClass("banner")[0]
banner.onmouseover=function(){
    clearInterval(t)
    leftbtn.style.display="block"
    rightbtn.style.display="block"
}
banner.onmouseout=function(){
	t=setInterval(change,2000);
	leftbtn.style.display="none"
    rightbtn.style.display="none"
}
//选项卡加轮播自动回位
for(var i=0;i<btn.length;i++){
	btn[i].index=i
	btn[i].onclick=function(){
		for( var j=0;j<BBt.length;j++){
			BBt[j].style.opacity=0;
			BN[j].style.opacity=0;
			btn[j].id="";
		}
		// img[this.index].style.zIndex=5;
		animate(BBt[this.index],{opacity:1})
		animate(BN[this.index],{opacity:1})

		this.id="active"
		num=this.index;//把轮播的位置可以按顺序播放，
		//意思就是当点击过后继续回到应该播放的下一个图片
	}
}

rightbtn.onclick=function(){
	change()
}
leftbtn.onclick=function(){
	num--;
	if(num<0){//图片的长度也就是个数
		num=BBt.length-1;
	}//当图片都循环完成后，再将num清为0，开始新的一轮

for(var i=0;i<BBt.length;i++){
	BN[i].style.opacity=0
	BBt[i].style.opacity=0
	btn[i].id=""
   }//为了把图片的层级和小圆点清空5和红色
    // BBt[num].style.zIndex=5
    animate(BBt[num],{opacity:1})
    animate(BN[num],{opacity:1})

    btn[num].id="active";//让图片的小圆点想联系
}



//选项卡























