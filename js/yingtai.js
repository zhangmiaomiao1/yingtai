//焦点事件
var text=getClass("ss")[0];
	text.onfocus=function(){
		if(text.value=="夏季美裙趴"){
			text.value="";
		}	
	}
	text.onblur=function(){
		if(text.value==""){
			text.value="夏季美裙趴"
	}
}



// 图片的透明度
var lkl=$(".lkl")
// alert(lkl.length)
for(var i=0;i<lkl.length;i++){
	lkl[i].dd=i;
	lkl[i].onmouseover=function(){
		lkl[this.dd].style.opacity="0.7"
	}
	lkl[i].onmouseout=function(){
		lkl[this.dd].style.opacity="1"
	}
}
// 小小轮播的透明度

var lkl=$(".lkl")
// alert(lkl.length)
for(var i=0;i<lkl.length;i++){
	lkl[i].dd=i;
	lkl[i].onmouseover=function(){
		lkl[this.dd].style.opacity="0.8"
	}
	lkl[i].onmouseout=function(){
		lkl[this.dd].style.opacity="1"
	}
}

//


//banner导航背景的移入效果
var one=$(".one")
// alert(one.length)
var lxw=$(".lxw")
// alert(lxw.length)
//操作黑框
for(var i=0;i<one.length;i++){
	one[i].ee=i;
	one[i].onmouseover=function(){
		one[this.ee].style.background="red"
		lxw[this.ee].style.display="block"
		for(var i=0;i<one.length;i++){
		lxw[i].ff=i;
		lxw[i].onmouseover=function(){
		one[this.ff].style.background="red"
		lxw[this.ff].style.display="block"

		}
		lxw[i].onmouseout=function(){
		one[this.ff].style.background="" 
		lxw[this.ff].style.display="none"
	}
}
	}
    one[i].onmouseout=function(){
		one[this.ee].style.background=""
		lxw[this.ee].style.display="none"

	}
}
//操作没有图片的黑框

// banner上图片的小小移动
var datupian=$(".datupian")[0]
// alert(sb.length)
// alert(datupian.length)
// for( var i=0;i<datupian.length;i++){
	// datupian[i].gg=i
	datupian.onmouseover=function(){
		animate(datupian,{left:980},400)
		// datupian.style.cssText="position:absolute;left:980px"
	};
	datupian.onmouseout=function(){
		animate(datupian,{left:990},400)
		// datupian.style.cssText="position:absolute;left:990px"
	};

// 小小轮播图图
var nyf=$(".nyf")[0]
var nyfl=$(".nyfl")[0]
var nyfr=$(".nyfr")[0]
var lkl1=$(".lkl1")[0]
var MML=$(".MML")[0]
var yuany=$(".yuany")[0]
var yuan1=$(".yuany1")[0]
nyf.onmouseover=function(){
	nyfl.style.display="block";
 	nyfr.style.display="block";
}
nyf.onmouseout=function(){
	// t=setInterval(moveLeft,3000)
	nyfl.style.display="none";
	nyfr.style.display="none";
}
nyfl.onclick=function(){
	animate(MML,{left:-390},500)
	animate(lkl1,{left:0},500)
	yuany.id="dd"
	yuan1.id=""
}
nyfr.onclick=function(){
	animate(MML,{left:0},500)
	animate(lkl1,{left:390},500)
	yuan1.id="dd"
	yuany.id=""
}
yuany.onclick=function(){
	animate(MML,{left:-390},500)
	animate(lkl1,{left:0},500)
	yuany.id="dd"
	yuan1.id=""
}
yuan1.onclick=function(){
	animate(MML,{left:0},500)
	animate(lkl1,{left:390},500)
	yuan1.id="dd"
	yuany.id=""
}


// 2小小轮播图图
var nyf1=$(".nyf1")[0]
var nyfl1=$(".nyfl1")[0]
var nyfr1=$(".nyfr1")[0]
var lkl11=$(".lkl11")[0]
var MML1=$(".MML1")[0]
var yuany10=$(".yuany10")[0]
var yuan11=$(".yuany11")[0]
nyf1.onmouseover=function(){
	nyfl1.style.display="block";
 	nyfr1.style.display="block";
}
nyf1.onmouseout=function(){
	// t=setInterval(moveLeft,3000)
	nyfl1.style.display="none";
	nyfr1.style.display="none";
}
nyfl1.onclick=function(){
	animate(MML1,{left:-390},500)
	animate(lkl11,{left:0},500)
	yuany10.id="dd"
	yuan11.id=""
}
nyfr1.onclick=function(){
	animate(MML1,{left:0},500)
	animate(lkl11,{left:390},500)
	yuan11.id="dd"
	yuany10.id=""
}
yuany10.onclick=function(){
	animate(MML1,{left:-390},500)
	animate(lkl11,{left:0},500)
	yuany10.id="dd"
	yuan11.id=""
}
yuan11.onclick=function(){
	animate(MML1,{left:0},500)
	animate(lkl11,{left:390},500)
	yuan11.id="dd"
	yuany10.id=""
}





// 3小小轮播图图
var nyf2=$(".nyf2")[0]
var nyfl12=$(".nyfl12")[0]
var nyfr12=$(".nyfr12")[0]
var lkl12=$(".lkl12")[0]
var MML2=$(".MML2")[0]
var yuany102=$(".yuany102")[0]
var yuan12=$(".yuany12")[0]
nyf2.onmouseover=function(){
	nyfl12.style.display="block";
 	nyfr12.style.display="block";
}
nyf2.onmouseout=function(){
	// t=setInterval(moveLeft,3000)
	nyfl12.style.display="none";
	nyfr12.style.display="none";
}
nyfl12.onclick=function(){
	animate(MML2,{left:-390},500)
	animate(lkl12,{left:0},500)
	yuany102.id="dd"
	yuan12.id=""
}
nyfr12.onclick=function(){
	animate(MML2,{left:0},500)
	animate(lkl12,{left:390},500)
	yuan12.id="dd"
	yuany102.id=""
}
yuany102.onclick=function(){
	animate(MML2,{left:-390},500)
	animate(lkl12,{left:0},500)
	yuany102.id="dd"
	yuan12.id=""
}
yuan12.onclick=function(){
	animate(MML2,{left:0},500)
	animate(lkl12,{left:390},500)
	yuan12.id="dd"
	yuany102.id=""
}

// 4小小轮播图图
var nyf3=$(".nyf3")[0]
var nyfl13=$(".nyfl13")[0]
var nyfr13=$(".nyfr13")[0]
var lkl13=$(".lkl13")[0]
var MML3=$(".MML3")[0]
var yuany103=$(".yuany103")[0]
var yuan13=$(".yuany13")[0]
nyf3.onmouseover=function(){
	nyfl13.style.display="block";
 	nyfr13.style.display="block";
}
nyf3.onmouseout=function(){
	// t=setInterval(moveLeft,3000)
	nyfl13.style.display="none";
	nyfr13.style.display="none";
}
nyfl13.onclick=function(){
	animate(MML3,{left:-390},500)
	animate(lkl13,{left:0},500)
	yuany103.id="dd"
	yuan13.id=""
}
nyfr13.onclick=function(){
	animate(MML3,{left:0},500)
	animate(lkl13,{left:390},500)
	yuan13.id="dd"
	yuany103.id=""
}
yuany103.onclick=function(){
	animate(MML3,{left:-390},500)
	animate(lkl13,{left:0},500)
	yuany103.id="dd"
	yuan13.id=""
}
yuan13.onclick=function(){
	animate(MML3,{left:0},500)
	animate(lkl13,{left:390},500)
	yuan13.id="dd"
	yuany103.id=""
}






// 5小小轮播图图
var nyf4=$(".nyf4")[0]
var nyfl14=$(".nyfl14")[0]
var nyfr14=$(".nyfr14")[0]
var lkl14=$(".lkl14")[0]
var MML4=$(".MML4")[0]
var yuany104=$(".yuany104")[0]
var yuan14=$(".yuany14")[0]
nyf4.onmouseover=function(){
	nyfl14.style.display="block";
 	nyfr14.style.display="block";
}
nyf4.onmouseout=function(){
	// t=setInterval(moveLeft,3000)
	nyfl14.style.display="none";
	nyfr14.style.display="none";
}
nyfl14.onclick=function(){
	animate(MML4,{left:-390},500)
	animate(lkl14,{left:0},500)
	yuany104.id="dd"
	yuan14.id=""
}
nyfr14.onclick=function(){
	animate(MML4,{left:0},500)
	animate(lkl14,{left:390},500)
	yuan14.id="dd"
	yuany104.id=""
}
yuany104.onclick=function(){
	animate(MML4,{left:-390},500)
	animate(lkl14,{left:0},500)
	yuany104.id="dd"
	yuan14.id=""
}
yuan14.onclick=function(){
	animate(MML4,{left:0},500)
	animate(lkl14,{left:390},500)
	yuan14.id="dd"
	yuany104.id=""
}





// 5小小轮播图图
var nyf5=$(".nyf5")[0]
var nyfl15=$(".nyfl15")[0]
var nyfr15=$(".nyfr15")[0]
var lkl15=$(".lkl15")[0]
var MML5=$(".MML5")[0]
var yuany105=$(".yuany105")[0]
var yuan15=$(".yuany15")[0]
nyf5.onmouseover=function(){
	nyfl15.style.display="block";
 	nyfr15.style.display="block";
}
nyf5.onmouseout=function(){
	// t=setInterval(moveLeft,3000)
	nyfl15.style.display="none";
	nyfr15.style.display="none";
}
nyfl15.onclick=function(){
	animate(MML5,{left:-390},500)
	animate(lkl15,{left:0},500)
	yuany105.id="dd"
	yuan15.id=""
}
nyfr15.onclick=function(){
	animate(MML5,{left:0},500)
	animate(lkl15,{left:390},500)
	yuan15.id="dd"
	yuany105.id=""
}
yuany105.onclick=function(){
	animate(MML5,{left:-390},500)
	animate(lkl15,{left:0},500)
	yuany104.id="dd"
	yuan14.id=""
}
yuan15.onclick=function(){
	animate(MML5,{left:0},500)
	animate(lkl15,{left:390},500)
	yuan15.id="dd"
	yuany105.id=""
}




//// 双下标的小小轮播
////1
//var MAA=$(".MAA")
//var B2=$(".B2")[0]
//var B3=$(".B3")[0]
//var now = 0;//
//var next = 0;
//for (var i = 1; i < MAA.length; i++) {//获取每一张图片
//	MAA[i].style.left = "160px"
//	//now控制可视区
//}
//B2.onclick=function() {
//	moveLeft();
//}
////时间函数
//	function moveLeft() {
//		next++;//图片一轮一轮的来
//		if (next >= MAA.length) {
//			next = 0;
//		}
//		animate(MAA[now], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//		MAA[next].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//		animate(MAA[next], {left: 0}, 500)//动第二个，也就是右边的
//		now = next;//两个一起动
//	}
//B3.onclick=function() {
////时间函数
//		next--;//可以让它在左移动之后退回到原来的位置继续右移
//		if(next<=-1){
//			next=MAA.length-1;//最终的减1
//		}
//		animate(MAA[now], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//		MAA[next].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//		animate(MAA[next], {left: 0}, 500)//动第二个，也就是右边的
//		now = next;//两个一起动
//}
////2
//var MAB=$(".MAB")
//var B21=$(".B21")[0]
//var B31=$(".B31")[0]
//var now1 = 0;//
//var next1 = 0;
//for (var i = 1; i < MAB.length; i++) {//获取每一张图片
//	MAB[i].style.left = "160px"
//	//now控制可视区
//}
//B21.onclick=function() {
//	moveLeft1();
//}
//function moveLeft1() {
//	next1++;//图片一轮一轮的来
//	if (next1 >= MAA.length) {
//		next1 = 0;
//	}
//	animate(MAB[now1], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAB[next1].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAB[next1], {left: 0}, 500)//动第二个，也就是右边的
//	now1 = next1;//两个一起动
//}
//B31.onclick=function() {
////时间函数
//	next1--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next1<=-1){
//		next1=MAB.length-1;//最终的减1
//	}
//	animate(MAB[now1], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAB[next1].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAB[next1], {left: 0}, 500)//动第二个，也就是右边的
//	now1 = next1;//两个一起动
//}
////3
//var MAC=$(".MAC")
//var B22=$(".B22")[0]
//var B32=$(".B32")[0]
//var now2 = 0;//
//var next2 = 0;
//for (var i = 1; i < MAC.length; i++) {//获取每一张图片
//	MAC[i].style.left = "160px"
//	//now控制可视区
//}
//B22.onclick=function() {
//	moveLeft2();
//}
//function moveLeft2() {
//	next2++;//图片一轮一轮的来
//	if (next2 >= MAC.length) {
//		next2 = 0;
//	}
//	animate(MAC[now2], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAC[next2].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAC[next2], {left: 0}, 500)//动第二个，也就是右边的
//	now2 = next2;//两个一起动
//}
//B32.onclick=function() {
////时间函数
//	next2--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next2<=-1){
//		next2=MAC.length-1;//最终的减1
//	}
//	animate(MAC[now2], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAC[next2].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAC[next2], {left: 0}, 500)//动第二个，也就是右边的
//	now2 = next2;//两个一起动
//}
//
////4
//var MAD=$(".MAD")
//var B23=$(".B23")[0]
//var B33=$(".B33")[0]
//var now3 = 0;//
//var next3 = 0;
//for (var i = 1; i < MAD.length; i++) {//获取每一张图片
//	MAD[i].style.left = "160px"
//	//now控制可视区
//}
//B23.onclick=function() {
//	moveLeft3();
//}
//function moveLeft3() {
//	next3++;//图片一轮一轮的来
//	if (next3 >= MAD.length) {
//		next3 = 0;
//	}
//	animate(MAD[now3], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAD[next3].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAD[next3], {left: 0}, 500)//动第二个，也就是右边的
//	now3 = next3;//两个一起动
//}
//B33.onclick=function() {
////时间函数
//	next3--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next3<=-1){
//		next3=MAD.length-1;//最终的减1
//	}
//	animate(MAD[now3], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAD[next3].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAD[next3], {left: 0}, 500)//动第二个，也就是右边的
//	now3 = next3;//两个一起动
//}
////5
//var MAE=$(".MAE")
//var B24=$(".B24")[0]
//var B34=$(".B34")[0]
//var now4 = 0;//
//var next4 = 0;
//for (var i = 1; i < MAE.length; i++) {//获取每一张图片
//	MAE[i].style.left = "160px"
//	//now控制可视区
//}
//B24.onclick=function() {
//	moveLeft4();
//}
//function moveLeft4() {
//	next4++;//图片一轮一轮的来
//	if (next4 >= MAE.length) {
//		next4 = 0;
//	}
//	animate(MAE[now4], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAE[next4].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAE[next4], {left: 0}, 500)//动第二个，也就是右边的
//	now4 = next4;//两个一起动
//}
//B34.onclick=function() {
////时间函数
//	next4--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next4<=-1){
//		next4=MAE.length-1;//最终的减1
//	}
//	animate(MAE[now4], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAE[next4].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAE[next4], {left: 0}, 500)//动第二个，也就是右边的
//	now4 = next4;//两个一起动
//}
//
////6
//var MAF=$(".MAF")
//var B25=$(".B25")[0]
//var B35=$(".B35")[0]
//var now5 = 0;//
//var next5 = 0;
//for (var i = 1; i < MAF.length; i++) {//获取每一张图片
//	MAF[i].style.left = "160px"
//	//now控制可视区
//}
//B25.onclick=function() {
//	moveLeft5();
//}
//function moveLeft5() {
//	next5++;//图片一轮一轮的来
//	if (next5 >= MAF.length) {
//		next5 = 0;
//	}
//	animate(MAF[now5], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAF[next5].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAF[next5], {left: 0}, 500)//动第二个，也就是右边的
//	now5 = next5;//两个一起动
//}
//B35.onclick=function() {
////时间函数
//	next5--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next5<=-1){
//		next5=MAF.length-1;//最终的减1
//	}
//	animate(MAF[now5], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAF[next5].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAF[next5], {left: 0}, 500)//动第二个，也就是右边的
//	now5 = next5;//两个一起动
//}
//
////6
//var MAF=$(".MAF")
//var B26=$(".B26")[0]
//var B37=$(".B37")[0]
//var now6 = 0;//
//var next6 = 0;
//for (var i = 1; i < MAF.length; i++) {//获取每一张图片
//	MAF[i].style.left = "160px"
//	//now控制可视区
//}
//B26.onclick=function() {
//	moveLeft6();
//}
//function moveLeft6() {
//	next6++;//图片一轮一轮的来
//	if (next6 >= MAF.length) {
//		next6 = 0;
//	}
//	animate(MAF[now6], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAF[next6].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAF[next6], {left: 0}, 500)//动第二个，也就是右边的
//	now6 = next6;//两个一起动
//}
//B37.onclick=function() {
////时间函数
//	next6--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next6<=-1){
//		next6=MAF.length-1;//最终的减1
//	}
//	animate(MAF[now6], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAF[next6].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAF[next6], {left: 0}, 500)//动第二个，也就是右边的
//	now6 = next6;//两个一起动
//}
//
////7
//var MAG=$(".MAG")
//var B26=$(".B26")[0]
//var B36=$(".B36")[0]
//var now7 = 0;//
//var next7 = 0;
//for (var i = 1; i < MAG.length; i++) {//获取每一张图片
//	MAG[i].style.left = "160px"
//	//now控制可视区
//}
//B26.onclick=function() {
//	moveLeft7();
//}
//function moveLeft7() {
//	next7++;//图片一轮一轮的来
//	if (next7 >= MAG.length) {
//		next7 = 0;
//	}
//	animate(MAG[now7], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAG[next7].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAG[next7], {left: 0}, 500)//动第二个，也就是右边的
//	now7 = next7;//两个一起动
//}
//B36.onclick=function() {
////时间函数
//	next7--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next7<=-1){
//		next7=MAG.length-1;//最终的减1
//	}
//	animate(MAG[now7], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAG[next7].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAG[next7], {left: 0}, 500)//动第二个，也就是右边的
//	now7 = next7;//两个一起动
//}
//
////8
//var MAH=$(".MAH")
//var B27=$(".B27")[0]
//var B37=$(".B37")[0]
//var now8 = 0;//
//var next8 = 0;
//for (var i = 1; i < MAH.length; i++) {//获取每一张图片
//	MAH[i].style.left = "160px"
//	//now控制可视区
//}
//B27.onclick=function() {
//	moveLeft8();
//}
//function moveLeft8() {
//	next8++;//图片一轮一轮的来
//	if (next8 >= MAH.length) {
//		next8 = 0;
//	}
//	animate(MAH[now8], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAH[next8].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAH[next8], {left: 0}, 500)//动第二个，也就是右边的
//	now8 = next8;//两个一起动
//}
//B37.onclick=function() {
////时间函数
//	next8--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next8<=-1){
//		next8=MAH.length-1;//最终的减1
//	}
//	animate(MAH[now8], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAH[next8].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAH[next8], {left: 0}, 500)//动第二个，也就是右边的
//	now8 = next8;//两个一起动
//}
//
//
////9
//var MAI=$(".MAI")
//var B28=$(".B28")[0]
//var B38=$(".B38")[0]
//var now9 = 0;//
//var next9 = 0;
//for (var i = 1; i < MAI.length; i++) {//获取每一张图片
//	MAI[i].style.left = "160px"
//	//now控制可视区
//}
//B28.onclick=function() {
//	moveLeft9();
//}
//function moveLeft9() {
//	next9++;//图片一轮一轮的来
//	if (next9 >= MAI.length) {
//		next9 = 0;
//	}
//	animate(MAI[now9], {left: -160}, 500)//移动第一个，就是直接在可视区的。
//	MAI[next9].style.left = "160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAI[next9], {left: 0}, 500)//动第二个，也就是右边的
//	now9 = next9;//两个一起动
//}
//B38.onclick=function() {
////时间函数
//	next9--;//可以让它在左移动之后退回到原来的位置继续右移
//	if(next9<=-1){
//		next9=MAI.length-1;//最终的减1
//	}
//	animate(MAI[now9], {left: 160}, 500)//移动第一个，就是直接在可视区的。
//	MAI[next9].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
//	animate(MAI[next9], {left: 0}, 500)//动第二个，也就是右边的
//	now9 = next9;//两个一起动
//}