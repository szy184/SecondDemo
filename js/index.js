//关闭头部广告
var close=document.getElementById('close');
var headerGG=document.getElementById('headerGG');
close.onclick=function(){
	headerGG.style.display="none";
}
//秒杀倒计时
//var h=24;
//var m=10;
var houer=document.getElementById('houer');
var minutee=document.getElementById('minute');
var secondd=document.getElementById('second');
//setInterval(function(){
//	second=m--;
//	if(m<0){
//		m=10;
//	}else if(second<0){
//		minute=m--;
//		this.innerText=minute;
//	}else if(minute<0){
//		houer=h--;
//		this.innerText=houer;
//	}
//	console.log(second);
//	console.log(minute);
//	console.log(houer);
//	this.innerText=second;
//},1000)
setInterval(function(){
		//获取指定时间对象
		var d1=new Date();
		var d2=new Date('2018/5/20');
		//console.log(d2);
		//获取指定时间对象的差值 时间戳
		var cha=d2.valueOf()-d1.valueOf();
		//时间戳的差每一秒都在减少
		console.log(cha);
		var day=Math.floor(cha/(1000*60*60*24));
		cha%=1000*60*60*24;
		//获取小时
		var hour=Math.floor(cha/(1000*60*60));
		cha%=1000*60*60;
		
		//获取分数
		var minute=Math.floor(cha/(1000*60));
		cha%=1000*60;
		//获取秒数
		var second=Math.floor(cha/(1000));
		houer.innerHTML=hour;
		minutee.innerHTML=minute;
		secondd.innerHTML=second;
	},1000);

//input得焦失焦
$(".sch_ipt").focus(function(){
	$(this).attr("placeholder",' ');
});
$(".sch_ipt").blur(function(){
	$(this).attr("placeholder",'水果礼盒');
});

//大轮播banner轮播
//自动轮播 点击数字显示对应图片 点击下一张上一张
	//声明下标
	var nowa=0;
	//获取li标签的长度
	var lena=$('#lunbot>.img>li').length;
//	console.log(len);
	function rungo(){
		//自动轮播
		s=setInterval(function(){
			//当前隐藏 图片数字
			$('#lunbot>.img>li').hide();
			$('#lunbot>.num>li').removeClass();
			
			//下一张显示 
			//判断now
			if(nowa>=lena-1){
				nowa=0;
			}else{
				nowa++;
			}
			
			//显示数字和图片
			$('#lunbot>.img>li:eq('+nowa+')').fadeIn(600);
			$('#lunbot>.num>li:eq('+nowa+')').addClass('in_xz');
		},3000)
	}
	
	rungo();
	
	//鼠标移入移出事件
	$('#lunbot').mouseover(function(){
		//清除定时 
		clearInterval(s);
	}).mouseout(function(){
		rungo();
	})
	
	
	//数字对应图片
	$('#lunbot>.num>li').mouseover(function(){
		//清除定时 
		clearInterval(s);
		//当前隐藏 图片数字
		$('#lunbot>.img>li').hide();
		$('#lunbot>.num>li').removeClass();
		
		//获取当前li的下标
		nowa=$(this).index();
		//alert(now);
		$('#lunbot>.img>li:eq('+nowa+')').fadeIn(600);
		$('#lunbot>.num>li:eq('+nowa+')').addClass('in_xz');
	})
	
	//left right的点击
	$('.left_a').click(function(){
		//当前隐藏 图片数字
		$('#lunbot>.img>li').hide();
		$('#lunbot>.num>li').removeClass();
		
		nowa--;
		
		//往左点 --
		if(nowa<0){
			nowa=lena-1;
		}	
		//显示图片数字
		$('#lunbot>.img>li:eq('+nowa+')').fadeIn(600);
		$('#lunbot>.num>li:eq('+nowa+')').addClass('in_xz');
	})
	
	//right的点击
	$('.right_a').click(function(){
		//当前隐藏 图片数字
		$('#lunbot>.img>li').hide();
		$('#lunbot>.num>li').removeClass();
		now++;
		//往左点 --
		if(now>lena-1){
			now=0;
		}
		//显示图片数字
		$('#lunbot>.img>li:eq('+now+')').fadeIn(600);
		$('#lunbot>.num>li:eq('+now+')').addClass('in_xz');
	})
	
//热卖新品 选项卡
//设置li的移入事件
	$('.cx_xztb a').mouseenter(function(){
		//获取当前下标
		var index=$(this).index();
		$('.cx_xz>ul').eq(index).show().siblings().hide();
	})
	$(function(){
		$(".cx_xztb a").hover(function(){
			$(".xhx").width($(this).width()).stop().animate({left:$(this).offset().left-1046},200);
		})
	})
	
//滚动gund
	//右箭头
		$('.jd_cjm_lft').click(function(){
			$('.cjm_a_aq').animate({'left':'0'},800)
		});
		//左箭头
		$('.jd_cjm_rit').click(function(){
			$('.cjm_a_aq').animate({'left':'-800px'},800)
		});

//热卖新品 选项卡
//设置li的移入事件
	$('.phb_nav li').mouseenter(function(){
		//显示当前li 其余隐藏
		$(this).addClass('act').siblings().removeClass('act');
		//获取当前下标
		var index=$(this).index();
		$('.nav_xq>div').eq(index).show().siblings().hide();
	})
	

//京东秒杀右边轮播
	//声明下标
	var now=0;
	//获取li标签的长度
	var leng=$('#lunbotu>.img>li').length;
	function rung(){
		//自动轮播
		s=setInterval(function(){
			//当前隐藏 图片数字
			$('#lunbotu>.img>li').hide();
			$('#lunbotu>.num>li').css('background','#c0c0c0');
			
			//下一张显示 
			//判断now
			if(now>=leng-1){
				now=0;
			}else{
				now++;
			}
			
			//显示数字和图片
			$('#lunbotu>.img>li:eq('+now+')').fadeIn(600);
			$('#lunbotu>.num>li:eq('+now+')').css('background','#e33333');
		},3000)
	}
	
	rung();
	
	//鼠标移入移出事件
	$('#lunbotu').mouseover(function(){
		//清除定时
		clearInterval(s);
	}).mouseout(function(){
		rung();
	})
	//数字对应图片
	$('#lunbotu>.num>li').mouseover(function(){
		//清除定时 
		clearInterval(s);
		//当前隐藏 图片数字
		$('#lunbotu>.img>li').hide();
		$('#lunbotu>.num>li').css('background','#c0c0c0');
		
		//获取当前li的下标
		now=$(this).index();
		//alert(now);
		$('#lunbotu>.img>li:eq('+now+')').fadeIn(600);
		$('#lunbotu>.num>li:eq('+now+')').css('background','#e33333');
	})
	
//滚动
	//右箭头
		var Y = $('.hmzj_pic ul').position().left;
		$('.btn_lft').click(function(){
			
			$('.hmzj_pic ul').animate({'left':'0'},600)
//			Y+=350;
//			console.log(Y);
//			if(Y>350){
//				Y=0;
//				$('.hmzj_pic ul').position().left=Y+'px';
//				console.log($('.hmzj_pic ul').position().left);
//			}
		});
		//左箭头
		$('.btn_rit').click(function(){
			$('.hmzj_pic ul').animate({'left':'-350px'},600)
		});
		
//滚动
	//右箭头
		$('.go').click(function(){
			$('.go_pic ul').animate({'left':'0'},600)
		});
		//左箭头
		$('.to').click(function(){
			$('.go_pic ul').animate({'left':'-350px'},600)
		});
		
//banner左侧广告
$('.banner_left').mouseenter(function(){
	$('.banner_left_gg').animate({'width':'790px'},500)
})
$('.banner_left').mouseleave(function(){
	$('.banner_left_gg').animate({'width':'0'},500)
})
//$('.banner_left_gg').mouseover(function(){
//	$(this).css('width','790px');
//})
//$('.banner_left_gg').mouseout(function(){
//	$(this).css('width','0');
//})
//顶部窗口移动事件
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=920){
    	$('.search_gd').css('transform','translateY(0)');
    	$('.search_gd').css('transition','all .4s');
    }else if(top<920){
    	$('.search_gd').css('transform','translateY(-50px)');
    	$('.search_gd').css('transition','all .4s');
    }
});


//滚动
	//右箭头
		$('.me_lft').click(function(){
			$('.me').animate({'left':'0'},600)
		});
		//左箭头
		$('.me_rit').click(function(){
			$('.me').animate({'left':'-377px'},600)
		});