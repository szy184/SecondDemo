//鼠标移动 二维码
$('.pic_a').mouseenter(function(){
	$(this).animate({'left':'-10px'},300);
	$('.pic_b').css('transition','all .8s');
	$('.pic_b').css('opacity','1');
})
$('.pic_a').mouseleave(function(){
	$(this).animate({'left':'60px'},300);
	$('.pic_b').css('transition','all .8s');
	$('.pic_b').css('opacity','0');
})
$('.pic_b').mouseenter(function(){
	$('.pic_a').animate({'left':'-10px'},300).stop();
	$(this).css('transition','all .8s');
	$(this).css('opacity','1');
})
$('.pic_b').mouseleave(function(){
	$('.pic_a').animate({'left':'60px'},300);
	$(this).css('transition','all .8s');
	$(this).css('opacity','0');
})
//选项卡登录框
$('.snk_xz>div').click(function(){
		//显示当前li 其余隐藏
		$(this).addClass('xzzt').siblings().removeClass('xzzt');
		//获取当前下标
		var index=$(this).index();
		$('.snk_two>div').eq(index).show().siblings().hide();
	})

//input得焦 失焦
$(".snk_dlk_a>input").focus(function(){
	$('.lab_a').css('background-position','0 -48px')
});
$(".snk_dlk_a>input").blur(function(){
	$('.lab_a').css('background-position','0 0')
});
$(".snk_dlk_b>input").focus(function(){
	$('.lab_b').css('background-position','-48px -48px')
});
$(".snk_dlk_b>input").blur(function(){
	$('.lab_b').css('background-position','-48px 0')
});

//遮罩层
function show(){
		$('.mask').css("height",$(document).height());
		$('.mask').css("width",$(document).width());
		$('.mask').show();
		$('.mask_a').show();
}
$('button:eq(0)').click(function(){
	$('.mask').fadeOut();
});