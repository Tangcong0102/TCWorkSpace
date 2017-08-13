var nowpage=0;
$(document).ready(function(){
	change();
});
function change(){
	var width=window.innerWidth;
	var height=window.innerHeight;
	$(".content").width(width);
	$(".content").height(4*height);
	$(".page").width(width);
	$(".page").height(height);
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction=="up"){
				nowpage++;
			}else if(direction=="down"){
				nowpage--;
			}
			
			if(nowpage<0){
				nowpage=0;
			}
			if(nowpage>3){
				nowpage=3;
			}
			
			$(".content").animate({top:nowpage*-100+"%"},{duration:500,complete:animations()});
		}
	});
	$(".page1-building").fadeIn(2000,function(){
		$(".page1-avatar").animate({width:"70%"},{duration:2000});
	});
}
function up(){
	nowpage--;
	if(nowpage<0){
		nowpage=0;
	}
	$(".content").animate({top:nowpage*-100+"%"},{duration:500,complete:animations()});
}
function animations(){
	if(nowpage==1){
		$(".page2-bg").fadeIn(2000,function(){
			$(".page2-farm").fadeIn(1000,function(){
				$(".page2-it").fadeIn(1000);
			});
		});
	}
	if(nowpage==2){
		$(".page3-title").fadeIn(2000,function(){
			$(".page3-lastTitle").fadeIn(1000);
		});
		$(".page3-bus").animate({left:"-100%"},{duration:2000});
		$(".page3-avatar").animate({right:"50%"},{duration:3000,complete:function(){
			$(".page3-title,.page3-lastTitle,.page3-avatar,.page3-station").fadeOut("slow",function(){
				$(".page3-wall").fadeIn(1000,function(){
					$(".page3-teamAvatar").fadeIn(1000,function(){
						$(".page3-space").animate({width:"40%"},{duration:1000,complete:function(){
							$(".page3-where").animate({width:"40%"},{duration:1000});	
						}});
					});
				});
			});
		}});
	}
}

function start(img){
	img.src="img/lightOn.png";
	$(".page4-title,.page4-bg,.page4-guide").fadeOut("slow",function(){
		$(".page4-onBg").fadeIn(1000,function(){
			$(".page4-wky").fadeIn(1000);
		});
	});
}
