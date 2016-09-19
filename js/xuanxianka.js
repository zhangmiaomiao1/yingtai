var imgboxa=getClass("main-top2");
var title=getClass("title_li");
var TI=$(".TI")
var TIT=$(".TIT")

//alert(TIT.length)
//移入事件，设置样式
for(var i=0;i<title.length;i++){
	title[i].aa=i;//给box设置aa属性，设置属性不需要定义，直接用 即可以记录图片的下标，在定义事件之前写
	title[i].onmouseover=function(){
	  for(var j=0;j<imgboxa.length;j++){
	  	imgboxa[j].style.display="none"
		  TI[j].style.display="none"
	  	title[j].style.cssText="font-weight:normal;border-bottom:5px solid black"
	  }
	  imgboxa[this.aa].style.display="block";
		TI[this.aa].style.display="block"
	  title[this.aa].style.cssText="font-weight:bold;border-bottom:5px solid #E6004D"
	}
}


var imgboxb=getClass("main1-middle-m-m");
var titlea=getClass("titlea");
//移入事件，设置样式
for(var i=0;i<titlea.length;i++){
	titlea[i].aa=i;//给box设置aa属性，设置属性不需要定义，直接用 即可以记录图片的下标，在定义事件之前写
	titlea[i].onmouseover=function(){
	  for(var j=0;j<imgboxb.length;j++){
	  	imgboxb[j].style.display="none"
		  TIT[j].style.display="none"
		  titlea[j].style.cssText="font-weight:normal;border-bottom:3px solid black"
	  }
	  imgboxb[this.aa].style.display="block";
		TIT[this.aa].style.display="block"
		this.style.cssText="font-weight:bold;border-bottom:3px solid #E6004D"
	}
}



// 双下标的小小轮播
//1
var MAA=$(".MAA")
var B2=$(".B2")[0]
var B3=$(".B3")[0]
var now = 0;//
var next = 0;
for (var i = 1; i < MAA.length; i++) {//获取每一张图片
	MAA[i].style.left = "160px"
	//now控制可视区
}
B2.onclick=function() {
	moveLeft();
}
//时间函数
function moveLeft() {
	next++;//图片一轮一轮的来
	if (next >= MAA.length) {
		next = 0;
	}
	animate(MAA[now], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAA[next].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAA[next], {left: 0}, 500)//动第二个，也就是右边的
	now = next;//两个一起动
}
B3.onclick=function() {
//时间函数
	next--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next<=-1){
		next=MAA.length-1;//最终的减1
	}
	animate(MAA[now], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAA[next].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAA[next], {left: 0}, 500)//动第二个，也就是右边的
	now = next;//两个一起动
}
//2
var MAB=$(".MAB")
var B21=$(".B21")[0]
var B31=$(".B31")[0]
var now1 = 0;//
var next1 = 0;
for (var i = 1; i < MAB.length; i++) {//获取每一张图片
	MAB[i].style.left = "160px"
	//now控制可视区
}
B21.onclick=function() {
	moveLeft1();
}
function moveLeft1() {
	next1++;//图片一轮一轮的来
	if (next1 >= MAA.length) {
		next1 = 0;
	}
	animate(MAB[now1], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAB[next1].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAB[next1], {left: 0}, 500)//动第二个，也就是右边的
	now1 = next1;//两个一起动
}
B31.onclick=function() {
//时间函数
	next1--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next1<=-1){
		next1=MAB.length-1;//最终的减1
	}
	animate(MAB[now1], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAB[next1].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAB[next1], {left: 0}, 500)//动第二个，也就是右边的
	now1 = next1;//两个一起动
}
//3
var MAC=$(".MAC")
var B22=$(".B22")[0]
var B32=$(".B32")[0]
var now2 = 0;//
var next2 = 0;
for (var i = 1; i < MAC.length; i++) {//获取每一张图片
	MAC[i].style.left = "160px"
	//now控制可视区
}
B22.onclick=function() {
	moveLeft2();
}
function moveLeft2() {
	next2++;//图片一轮一轮的来
	if (next2 >= MAC.length) {
		next2 = 0;
	}
	animate(MAC[now2], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAC[next2].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAC[next2], {left: 0}, 500)//动第二个，也就是右边的
	now2 = next2;//两个一起动
}
B32.onclick=function() {
//时间函数
	next2--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next2<=-1){
		next2=MAC.length-1;//最终的减1
	}
	animate(MAC[now2], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAC[next2].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAC[next2], {left: 0}, 500)//动第二个，也就是右边的
	now2 = next2;//两个一起动
}

//4
var MAD=$(".MAD")
var B23=$(".B23")[0]
var B33=$(".B33")[0]
var now3 = 0;//
var next3 = 0;
for (var i = 1; i < MAD.length; i++) {//获取每一张图片
	MAD[i].style.left = "160px"
	//now控制可视区
}
B23.onclick=function() {
	moveLeft3();
}
function moveLeft3() {
	next3++;//图片一轮一轮的来
	if (next3 >= MAD.length) {
		next3 = 0;
	}
	animate(MAD[now3], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAD[next3].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAD[next3], {left: 0}, 500)//动第二个，也就是右边的
	now3 = next3;//两个一起动
}
B33.onclick=function() {
//时间函数
	next3--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next3<=-1){
		next3=MAD.length-1;//最终的减1
	}
	animate(MAD[now3], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAD[next3].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAD[next3], {left: 0}, 500)//动第二个，也就是右边的
	now3 = next3;//两个一起动
}
//5
var MAE=$(".MAE")
var B24=$(".B24")[0]
var B34=$(".B34")[0]
var now4 = 0;//
var next4 = 0;
for (var i = 1; i < MAE.length; i++) {//获取每一张图片
	MAE[i].style.left = "160px"
	//now控制可视区
}
B24.onclick=function() {
	moveLeft4();
}
function moveLeft4() {
	next4++;//图片一轮一轮的来
	if (next4 >= MAE.length) {
		next4 = 0;
	}
	animate(MAE[now4], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAE[next4].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAE[next4], {left: 0}, 500)//动第二个，也就是右边的
	now4 = next4;//两个一起动
}
B34.onclick=function() {
//时间函数
	next4--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next4<=-1){
		next4=MAE.length-1;//最终的减1
	}
	animate(MAE[now4], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAE[next4].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAE[next4], {left: 0}, 500)//动第二个，也就是右边的
	now4 = next4;//两个一起动
}

//6
var MAF=$(".MAF")
var B25=$(".B25")[0]
var B35=$(".B35")[0]
var now5 = 0;//
var next5 = 0;
for (var i = 1; i < MAF.length; i++) {//获取每一张图片
	MAF[i].style.left = "160px"
	//now控制可视区
}
B25.onclick=function() {
	moveLeft5();
}
function moveLeft5() {
	next5++;//图片一轮一轮的来
	if (next5 >= MAF.length) {
		next5 = 0;
	}
	animate(MAF[now5], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAF[next5].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAF[next5], {left: 0}, 500)//动第二个，也就是右边的
	now5 = next5;//两个一起动
}
B35.onclick=function() {
//时间函数
	next5--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next5<=-1){
		next5=MAF.length-1;//最终的减1
	}
	animate(MAF[now5], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAF[next5].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAF[next5], {left: 0}, 500)//动第二个，也就是右边的
	now5 = next5;//两个一起动
}

//6
var MAF=$(".MAF")
var B26=$(".B26")[0]
var B37=$(".B37")[0]
var now6 = 0;//
var next6 = 0;
for (var i = 1; i < MAF.length; i++) {//获取每一张图片
	MAF[i].style.left = "160px"
	//now控制可视区
}
B26.onclick=function() {
	moveLeft6();
}
function moveLeft6() {
	next6++;//图片一轮一轮的来
	if (next6 >= MAF.length) {
		next6 = 0;
	}
	animate(MAF[now6], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAF[next6].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAF[next6], {left: 0}, 500)//动第二个，也就是右边的
	now6 = next6;//两个一起动
}
B37.onclick=function() {
//时间函数
	next6--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next6<=-1){
		next6=MAF.length-1;//最终的减1
	}
	animate(MAF[now6], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAF[next6].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAF[next6], {left: 0}, 500)//动第二个，也就是右边的
	now6 = next6;//两个一起动
}

//7
var MAG=$(".MAG")
var B26=$(".B26")[0]
var B36=$(".B36")[0]
var now7 = 0;//
var next7 = 0;
for (var i = 1; i < MAG.length; i++) {//获取每一张图片
	MAG[i].style.left = "160px"
	//now控制可视区
}
B26.onclick=function() {
	moveLeft7();
}
function moveLeft7() {
	next7++;//图片一轮一轮的来
	if (next7 >= MAG.length) {
		next7 = 0;
	}
	animate(MAG[now7], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAG[next7].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAG[next7], {left: 0}, 500)//动第二个，也就是右边的
	now7 = next7;//两个一起动
}
B36.onclick=function() {
//时间函数
	next7--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next7<=-1){
		next7=MAG.length-1;//最终的减1
	}
	animate(MAG[now7], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAG[next7].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAG[next7], {left: 0}, 500)//动第二个，也就是右边的
	now7 = next7;//两个一起动
}

//8
var MAH=$(".MAH")
var B27=$(".B27")[0]
var B37=$(".B37")[0]
var now8 = 0;//
var next8 = 0;
for (var i = 1; i < MAH.length; i++) {//获取每一张图片
	MAH[i].style.left = "160px"
	//now控制可视区
}
B27.onclick=function() {
	moveLeft8();
}
function moveLeft8() {
	next8++;//图片一轮一轮的来
	if (next8 >= MAH.length) {
		next8 = 0;
	}
	animate(MAH[now8], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAH[next8].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAH[next8], {left: 0}, 500)//动第二个，也就是右边的
	now8 = next8;//两个一起动
}
B37.onclick=function() {
//时间函数
	next8--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next8<=-1){
		next8=MAH.length-1;//最终的减1
	}
	animate(MAH[now8], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAH[next8].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAH[next8], {left: 0}, 500)//动第二个，也就是右边的
	now8 = next8;//两个一起动
}


//9
var MAI=$(".MAI")
var B28=$(".B28")[0]
var B38=$(".B38")[0]
var now9 = 0;//
var next9 = 0;
for (var i = 1; i < MAI.length; i++) {//获取每一张图片
	MAI[i].style.left = "160px"
	//now控制可视区
}
B28.onclick=function() {
	moveLeft9();
}
function moveLeft9() {
	next9++;//图片一轮一轮的来
	if (next9 >= MAI.length) {
		next9 = 0;
	}
	animate(MAI[now9], {left: -160}, 500)//移动第一个，就是直接在可视区的。
	MAI[next9].style.left = "160px"//控制图片从右边进来  顺便的控制时间
	animate(MAI[next9], {left: 0}, 500)//动第二个，也就是右边的
	now9 = next9;//两个一起动
}
B38.onclick=function() {
//时间函数
	next9--;//可以让它在左移动之后退回到原来的位置继续右移
	if(next9<=-1){
		next9=MAI.length-1;//最终的减1
	}
	animate(MAI[now9], {left: 160}, 500)//移动第一个，就是直接在可视区的。
	MAI[next9].style.left = "-160px"//控制图片从右边进来  顺便的控制时间
	animate(MAI[next9], {left: 0}, 500)//动第二个，也就是右边的
	now9 = next9;//两个一起动
}
