 //node:拖拽元素
           //node2：碰撞元素
           //flag：是否限制范围
           //value：吸附程度
 (function(w){
 	w.susi = {};
 	susi.drag =  function (node,node2,flag,value){
			var adsorb = 0;
			var limit = true;
			var starPoint = {x:0,y:0};
			var mouseDownPoint = {x:0,y:0};
			node.onmousedown=function(ev){
				ev = ev || event;
				starPoint.x = this.offsetLeft;
				starPoint.y = this.offsetTop;
				mouseDownPoint.x = ev.clientX;
				mouseDownPoint.y=ev.clientY;
				if(this.setCapture){
					this.setCapture();
				}
				document.onmousemove=function(ev){
					ev = ev || event;
					var mouseMovePoint = {x:0,y:0};
					mouseMovePoint.x=ev.clientX;
					mouseMovePoint.y=ev.clientY;
					var dis={x:0,y:0};
					dis.x=mouseMovePoint.x-mouseDownPoint.x;
					dis.y=mouseMovePoint.y-mouseDownPoint.y;
					
					var L = starPoint.x+dis.x;
					var T = starPoint.y+dis.y;
					limit = flag === false;
					if(limit){
						if(value){
					          value = adsorb;
					          }
						 if(L<adsorb){
						 	L = 0;
						 }
					     if(T<adsorb){
						            T=0;
					                }
					     if(T>(document.documentElement.clientHeight - node.offsetHeight)-adsorb){
						            T = (document.documentElement.clientHeight - node.offsetHeight);
					               }
					     if(L>(document.documentElement.clientWidth - node.offsetWidth)-adsorb){
						            L = (document.documentElement.clientWidth - node.offsetWidth);
					              }
					}
					
					node.style.left=L+"px";
					node.style.top=T+"px";
					
					if(node2){
						//碰撞检测
					var T1 = node.offsetTop;
					var B1 = node.offsetTop+node.offsetHeight;
					var R1 = node.offsetLeft + node.offsetWidth;
					var L1 = node.offsetLeft;
					
					var T2 = node2.offsetTop;
					var B2 = node2.offsetTop+node2.offsetHeight;
					var R2 = node2.offsetLeft + node2.offsetWidth;
					var L2 = node2.offsetLeft;
					
					if(R1<L2||B1<T2||L1>R2||T1>B2){
						//没有撞到
						node2.src="../h5小功能/canvas/canvas实例/img/a.png";
						node.src="../h5小功能/canvas/canvas实例/img/b.png";
					}else{
						node2.src="../h5小功能/canvas/canvas实例/img/b.png";
						node.src="../h5小功能/canvas/canvas实例/img/a.png";
					}
					}
					
				}
				document.onmouseup=function(){
					document.onmousemove = document.onmouseup = null;
				    if(document.releaseCapture){
					document.releaseCapture();
				}
				}
				//禁止不了ie8以下浏览器事件的默认行为
				return false;
			}
			}
		
 })(window)
          