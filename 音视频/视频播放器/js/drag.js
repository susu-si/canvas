(function(w){
	w.$ ={};
	w.$.drag=function(textNode,callback){
		//抽象元素一开始的位置
		var startPoint={x:0,y:0};
		//抽象鼠标一开始的位置
		var elementPoint={x:0,y:0};
		
		textNode.onmousedown=function(ev){
		ev = ev || event;
		if(textNode.setCapture){
			textNode.setCapture();
		}
		
		startPoint.x=textNode.offsetLeft;
		startPoint.y=textNode.offsetTop;
		
		elementPoint.x=ev.clientX;
		elementPoint.y=ev.clientY;
		
		document.onmousemove=function(ev){
			ev =ev || event;
			var nowPoint = {x:0,y:0};
			nowPoint.x=ev.clientX;
			nowPoint.y=ev.clientY;
			var L = startPoint.x+(nowPoint.x-elementPoint.x);
			if(L<0){
				L=0;
			}else if(L>textNode.parentNode.clientWidth - textNode.offsetWidth){
				L = textNode.parentNode.clientWidth - textNode.offsetWidth;
		    }
		       textNode.style.left = L+"px";
		       if(callBack&&callBack["move"]&& typeof callBack["move"] === "function"){
					callBack["move"].call(testNode);
				}
		}
		document.onmouseup=function(){
			document.onmousemove = document.onmouseup = null;
			if(document.releaseCapture){
				document.releaseCapture();
			}
			
		}
		return false;
		}
	}
})(window);
