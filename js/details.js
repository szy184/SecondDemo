//下拉框
$('.qbfl').mouseenter(function(){
	$(this).css('border-bottom','1px solid #FFF');
	$('.qbfl_ej').show();
})
$('.qbfl').mouseleave(function(){
	$('.qbfl_ej').hide();
	$(this).css('border-bottom','1px solid #ccc');
})
$('.qbfl_ej').mouseenter(function(){
	$(this).show();
})
$('.qbfl_ej').mouseleave(function(){
	$(this).hide();
})

//input
$("#ipt,#dog").focus(function(){
	$(this).attr('placeholder',' ');
});
$("#ipt").blur(function(){
	$(this).attr('placeholder','手机 ');
});
$("#dog").blur(function(){
	$(this).attr("placeholder",'醇粹狗粮');
});
//放大镜
$(function(){
		//small中move移动
		$('#small').mousemove(function(e){
			//move big显示
			$('#move,#big').show();
			
			//move的坐标
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			//alert(x+':'+y)
		
			//鼠标居中-move一半宽高
			var x=x-$('#move').width()/2;
			var y=y-$('#move').height()/2;
			
			//边界判断
			//左边
			if(x<=0){
				x=0
			}
			//上边
			if(y<=0){
				y=0;
			}
			//left的最大值
			if(x>=$('#small').width()-$('#move').width()){
				x=$('#small').width()-$('#move').width();
			}
			
			//top的最大值
			if(y>=$('#small').height()-$('#move').height()){
				y=$('#small').height()-$('#move').height();
			}
			
			//move绑定坐标
			$('#move').css({left:x,top:y});
			
			//算大图和小图比例关系
			var scale=$('#big>img').width()/$('#small>img').width()
			//alert(scale);
			
			//big的移动距离=move距离*比例关系
			$('#big').scrollLeft(x*scale);
			$('#big').scrollTop(y*scale);
			
			//大图src=small的src
			$('#big>img').attr('src',$('#small_pic').attr('src'))
			
		}).mouseout(function(){
			$('#move,#big').hide();
		});
	
	
		//移动更换图片
		$('#dian>li>img').mouseenter(function(){
			//small中img的src=当前img的src
			$('#small>img').attr('src',$(this).attr('src'));
			$(this).addClass('red_bk');
		})
		$('#dian>li>img').mouseleave(function(){
			$(this).removeClass('red_bk');
		})
		
		//右箭头
		$('#right_jt').click(function(){
			$('#dian').animate({'left':'-290px'},800)
		});
		//左箭头
		$('#left_jt').click(function(){
			$('#dian').animate({'left':'0'},800)
		});
	})

//窗口移动事件
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=920){
    	$('.ihone_zy,.iphone_nav,.iphone_pf').css('position','fixed');
    	$('.ihone_zy,.iphone_nav,.iphone_pf').css('top','0');
    	$('.iphone_pf').css('top','40px');
    	$('.iphone_pf ').hide();
    	$('.ihone_zy').mouseenter(function(){
    		$('.iphone_pf ').show();
    	});
    	$('.ihone_zy').mouseleave(function(){
    		$('.iphone_pf ').hide();
    	});
    	$('.iphone_pf').mouseenter(function(){
			$(this).show();
		});
		$('.iphone_pf').mouseleave(function(){
			$(this).hide();
		});
    }else if(top<920){
    	$('.ihone_zy,.iphone_nav,.iphone_pf').css('position','relative');
    	$('.iphone_pf').css('top','0');
    	$('.iphone_pf ').show();
    	$('.ihone_zy').mouseenter(function(){
    		$('.iphone_pf ').show();
    	})
    	$('.ihone_zy').mouseleave(function(){
    		$('.iphone_pf ').show();
    	})
    	$('.iphone_pf').mouseenter(function(){
			$(this).show();
		});
		$('.iphone_pf').mouseleave(function(){
			$(this).show();
		});
    }
});


//Listpage页面
//下拉框
$('.Scgg_small').mouseenter(function(){
	$('.Scgg_big').show();
})
$('.Scgg_small').mouseleave(function(){
	$('.Scgg_big').hide();
})
$('.Scgg_big').mouseenter(function(){
	$(this).show();
})
$('.Scgg_big').mouseleave(function(){
	$(this).hide();
})
//下拉框
$('.cfsj').mouseenter(function(){
	$('.jx').show();
})
$('.cfsj').mouseleave(function(){
	$('.jx').hide();
})
$('.jx').mouseenter(function(){
	$(this).show();
})
$('.jx').mouseleave(function(){
	$(this).hide();
})

//banner轮播
//alert($)
//自动轮播 点击数字显示对应图片 点击下一张上一张
	
	//声明下标
	var now=0;
	//获取li标签的长度
	var len=$('#lunbo>.img>li').length;
	function run(){
		//自动轮播
		s=setInterval(function(){
			//当前隐藏 图片数字
			$('#lunbo>.img>li').hide();
			$('#lunbo>.num>li').css('background','#4a4110');
			
			//下一张显示 
			//判断now
			if(now>=len-1){
				now=0;
			}else{
				now++;
			}
			
			//显示数字和图片
			$('#lunbo>.img>li:eq('+now+')').fadeIn(1000);
			$('#lunbo>.num>li:eq('+now+')').css('background','#ec7002');
		},3000)
	}
	
	run();
	
	//鼠标移入移出事件
	$('#lunbo').mouseover(function(){
		//清除定时 显示箭头
		clearInterval(s);
	}).mouseout(function(){
		run();
	})
	
	
	//数字对应图片
	$('#lunbo>.num>li').mouseover(function(){
		//清除定时 
		clearInterval(s);
		//当前隐藏 图片数字
		$('#lunbo>.img>li').hide();
		$('#lunbo>.num>li').css('background','#4a4110');
		
		//获取当前li的下标
		now=$(this).index();
		//alert(now);
		$('#lunbo>.img>li:eq('+now+')').fadeIn(1000);
		$('#lunbo>.num>li:eq('+now+')').css('background','#ec7002');	
	})
	
	//left right的点击
	$('.left').click(function(){
		//当前隐藏 图片数字
		$('#lunbo>.img>li').hide();
		$('#lunbo>.num>li').css('background','#4a4110');
		
		now--;
		
		//往左点 --
		if(now<0){
			now=len-1;
		}	
		//显示图片数字
		$('#lunbo>.img>li:eq('+now+')').fadeIn(1000);
		$('#lunbo>.num>li:eq('+now+')').css('background','#ec7002');	
	})
	
	//right的点击
	$('.right').click(function(){
		//当前隐藏 图片数字
		$('#lunbo>.img>li').hide();
		$('#lunbo>.num>li').css('background','#4a4110');
		now++;
		//往左点 --
		if(now>len-1){
			now=0;
		}
		//显示图片数字
		$('#lunbo>.img>li:eq('+now+')').fadeIn(1000);
		$('#lunbo>.num>li:eq('+now+')').css('background','#ec7002');
	})
	
//热卖新品 选项卡
//设置li的移入事件
	$('.hot_new .hot a').mouseenter(function(){
		//显示当前li 其余隐藏
		$(this).addClass('bys').siblings().removeClass('bys');
		//获取当前下标
		var index=$(this).index();
		$('.hot_new_xq>ul').eq(index).show().siblings().hide();
	})
	
	//滚动gund
	//右箭头
		$('.lft_gund').click(function(){
			$('.gund_aq>ul').animate({'left':'0'},800)
		});
		//左箭头
		$('.rit_gund').click(function(){
			$('.gund_aq>ul').animate({'left':'-1200px'},800)
		});
		
//dog选项卡
$('.zt_xq .zt_xq_nav a').mouseenter(function(){
		//显示当前li 其余隐藏
		$(this).addClass('bor_bottom').siblings().removeClass('bor_bottom');
		//获取当前下标
		var index=$(this).index();
		$('.zt_wp>div').eq(index).show().siblings().hide();
		$('.maomi>div').eq(index).show().siblings().hide();
		$('.xiaocg>div').eq(index).show().siblings().hide();
		$('.sz>div').eq(index).show().siblings().hide();
})
//楼层滚动
$(function(){
		//点击li 滚动到对应的位置
		$('.loucgd ul li').click(function(){
			//获取指定的li
			var index=$(this).index();
			//alert(index);
			//当前楼层距离顶部的位置
			//console.log($('.lc').eq(index).offset().top)
			
			var top=$('.lc').eq(index).offset().top;
			
			//$('body,html').scrollTop(top);
			//加动画
			$('body,html').animate({
				scrollTop:top
			},500);
		
		})
		
		//获取每个楼层距离顶部的高度
		var heights=[];
		
		$('.lc').each(function(){
			//给数组添加数据 每一个高度
			//向一个数组的尾部添加一个或者多个元素
			heights.push($(this).offset().top);
		});
		//获取每个楼层距离顶部的高度
		console.log(heights);

		
		
		//当前文档的滚动监听事件
		$(window).scroll(function(){
			//获取现在的滚动距离
			var top=$(window).scrollTop();
			//alert(top);
			if(top>=200){
				$('.loucgd').animate({'opacity':'1'},100)
			}else{
				$('.loucgd').animate({'opacity':'0'},100)
			}
			//声明下标变量
			var index;
			//遍历每一个楼层距离顶部的高度
			for(var i=0;i<heights.length;i++){
				//1F 高度>=100 <2F的高度
				if(top>=heights[i] && top<heights[i+1]){
					//找到和1F对用的li的下标css 背景红色
					index=i;
					$('.loucgd ul li').eq(index).addClass('kkk').siblings().removeClass('kkk');
					break;
				//top >=6个
				}else if(top>=heights[heights.length-1]){
					//index重新赋值
					index=heights.length-1;
					$('.loucgd ul li').eq(index).addClass('kkk').siblings().removeClass('kkk');
					break;
				}
			}
		});
	
	})