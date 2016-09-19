// 1通过类名来解决兼容问题
function getClass(selector,father){
	father=father||document;
	if(father.getElementsByClassName){
		return father.getElementsByClassName(selector)
	}else{
		var newarr=[];
		var all=father.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){
			if(check(all[i].className,selector))
			{
			// if(all[i].className==selector)
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function check(str,selector){
	var arr=str.split(" ");
	for(var i in arr){
		if(arr[i]==selector){
			return true;
		}
	}
	return false;
}
// 2获取样式的兼容函数
// getStyle(ele,attr)
// ele:操作的document的对象
// attr:获取哪个属性的值
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr]
	}else{
		return getComputedStyle(ele,null)[attr]
  }	
}
// 3获取元素的函数
function $(selector,father){
 father=father||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/g,"")
	  if(selector.charAt(0)=="."){
	  	return getClass(selector.slice(1),father)
	  }else if(selector.charAt(0)=="#"){
	  	return father.getElementById(selector.slice(1));
	  }else if(/^[a-z1-6]{1,10}/.test(selector)){
	  	return father.getElementsByTagName(selector)
	  }else if(typeof selector=="function"){
	  	window.onload=function(){
	  		selector();
	  	}
	  }
	}
}


// 4获取子节点的兼容函数
//元素子节点  nodeType==1
//实现        元素+文本
function getChilds(father,type){
	type=type||"a"
	var all=father.childNodes;
	var arr=[];
	for(var i=0;i<arr.length;i++){
		if(type="a"){
		   if(all[i].nodeType==1){
		   arr.push(all[i])
		  }
		}else if(type="b"){
			if(all[i].nodeType==1 || all[i].nodeType==3 && all[i]
				.nodeValue.replace(/^\s*|\s*$/g,"")!=""){
				arr.push(all[i]);
			  }
		   }
	   }
	return arr;
}