$(document).ready(function(){

	// 메뉴
	$('#menu li a, header #bg, header #sub').mouseenter(function(){
		$('header #bg').stop().slideDown();
		$('header #sub').stop().slideDown();
		$('#menu li a span').css('opacity','1');
	}).mouseleave(function(){
		$('header #bg').stop().slideUp();
		$('header #sub').stop().slideUp();
		$('#menu li a span').css('opacity','0');
	});

	// 배너
	$('#f_image li').first().show();
	$('#f_btn li').first().addClass('dot');
	var view=0;
	var ftimer=setInterval(autofade,5000);
	function autofade(){
		view=view+1;
		if(view>2){
			view=0
		}
		$('#f_image li').stop().fadeOut();
		$('#f_image li').eq(view).stop().fadeIn();
		$('#f_btn li').removeClass('dot');
		$('#f_btn li').eq(view).addClass('dot');
	}
	$('#f_btn li').click(function(){
		clearInterval(ftimer);
		$('#f_btn li').removeClass('dot');
		$(this).addClass('dot');
		var f=$(this).index();
		$('#f_image li').stop().fadeOut();
		$('#f_image li').eq(f).stop().fadeIn();
		view=f;
		ftimer=setInterval(autofade,5000);
	});



	// 탭
	$('#t_con>div').first().show();
	$('#t_btn li').first().addClass('line');
	$('#t_btn li').click(function(){
		$('#t_btn li').removeClass('line');
		$(this).addClass('line')
		var t=$(this).index();
		$('#t_con>div').hide();
		$('#t_con>div').eq(t).show();
	});


	// 모달
	setTimeout(function(){
		$('#modal_bg').fadeIn();
		$('#modal').fadeIn();
	}, 5000);
	$('#modal a').click(function(){
		$('#modal_bg').fadeOut();
		$('#modal').fadeOut();
	});


	// 상하스크롤 버튼
	$(window).scroll(function(){
		if($(document).scrollTop()>50){
			$('#sc').fadeIn();
		}else{
			$('#sc').fadeOut();
		}
	});
	$('#sc .top').click(function(){
		$('html').animate({
			scrollTop:0
		}, 'slow');
	});
	$('#sc .bottom').click(function(){
		$('html').animate({
			scrollTop:$(document).height()
		}, 'slow');
	});


	// 스크롤 애니메이트
	$(window).scroll(function(){
		if($(document).scrollTop()>800){
			$('#b_left').stop().animate({
				left:0
			}, 'slow');
			$('#b_right').addClass('box');
		}else{
			$('#b_left').stop().animate({
				left:'-600px'
			}, 'slow');
			$('#b_right').removeClass('box');
		}
	});


	// 플로팅
	var p=$('#side').offset();
	$(window).scroll(function(){
		if($(document).scrollTop()>p.top){
			$('#side').stop().animate({
				top:$(document).scrollTop()+160
			}, 'slow');
		}else{
			$('#side').stop().animate({
				top:'160px'
			}, 'slow');
		}
	});

});