	
var swiper=new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
			paginationClickable:true,
			loop:true,
			slidesPerView:"auto",
			autoplay:2000,
		});

$(function(){
	$(".hobby-bottom .dohidden").css("display","none");
	$(".hobby-bottom .dodisplay").css("display","block");
	$("hobby").css("height","7.67rem");
	$(".foods").hide();
	$(".hobby-bottom .dohidden").click(function(){
		$(".foods").slideUp(500);
		$(".hobby-bottom .dohidden").css("display","none");
		$(".hobby-bottom .dodisplay").css("display","block");
		$("hobby").css("height","7.67rem");
	});
	$(".hobby-bottom .dodisplay").click(function(){
		$(".foods").slideDown(500);
		$(".hobby-bottom .dohidden").css("display","block");
		$(".hobby-bottom .dodisplay").css("display","none");
		$("hobby").css("height","15.77rem");
	});



	 $(".left-ul").hide();
	 var state=0;
		$(".left-select").bind("click",function(){
			if(state==0){
				$(".left-ul").show();
				$("#arrowDown").hide();
				$("#arrowTop").show()
				state=1;
			}else{
				$(".left-ul").hide();
				$("#arrowDown").show();
				$("#arrowTop").hide()
				state=0;
			}
		});
		$(".left-ul li").click(function(){
			$(".text").html( $(this).text() );
		});

		

	
	});

	window.onload=function(){
				setInterval(gettime,0)
		};
		function gettime(){
			var newday=new Date("2017/4/25 00:00:00");
			var today=new Date();
			var m1=newday.getTime();
			var m2=today.getTime();
			var m3=m1-m2;

			// var d=Math.floor(m3/1000/60/60%24)
			var h=Math.floor(m3/(1000*60*60));
			var m=Math.floor((m3/(1000*60))%60);
			var s=Math.floor((m3/1000)%60);
			var times=h+":"+m+":"+s;

			$(".content_time").html(times);
			}