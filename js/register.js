//遮罩层
$('.zc_go').click(function(){
	$('.register_zc').hide();
	$('.mask').hide();
});
$('.mask').css("height",$(document).height());
$('.mask').css("width",$(document).width());
//国家选项卡
$('.k_a>div').click(function(){
	if($(".country").css("display")=="none"){
		$(".country").show();
	}else{
		$(".country").hide();
	}
})
$('.ctr_a>ul li').click(function(){
		//显示当前li 其余隐藏
		$(this).addClass('ctr_xz').siblings().removeClass('ctr_xz');
		//获取当前下标
		var index=$(this).index();
		$('.ctr_b>div').eq(index).show().siblings().hide();
	})
//input得焦失焦情况
$(".k_a>input").focus(function(){
	$('.k_a>p').html("!验证完成后，你可以使用该手机登录或找回密码");
	$(this).attr("placeholder",' ');
	$(this).css('color','#333');
});
$(".k_a>input").blur(function(){
	$('.k_a>p').html('');
	checkMolie($(".k_a>input").val());
	$(this).attr("placeholder",'建议使用常用手机号');
//	$(this).css('color','rgb(204, 204, 204)');
});
//手机号验证
function checkMolie(str) {
        var re=/^1[3|4|5|8][0-9]\d{4,8}$/;
        if(re.test(str)){
            $('.k_a>p').html("格式正确，可进行验证！");
        }else{
        	$('.k_a>p').html("格式错误,请输入正确的手机号！");
        }
 }
//侧边栏
$('.rg_cbl').mouseenter(function(){
	$('.rg_cbl a').css('background-position','-334px 0');
})
$('.rg_cbl').mouseleave (function(){
	$('.rg_cbl a').css('background-position','-367px 0');
})
