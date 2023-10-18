/*

http://ety.kr

*/

/*

$(function() {

	// navbar
	const $dropdown = $(".dropdown");
	const $dropdownToggle = $(".dropdown-toggle");
	const $dropdownMenu = $(".dropdown-menu");
	const showClass = "show";

	$(window).on("load resize", function() {
	  if (this.matchMedia("(min-width: 768px)").matches) {
		$dropdown.hover(
		  function() {
			const $this = $(this);
			$this.addClass(showClass);
			$this.find($dropdownToggle).attr("aria-expanded", "true");
			$this.find($dropdownMenu).addClass(showClass);
		  },
		  function() {
			const $this = $(this);
			$this.removeClass(showClass);
			$this.find($dropdownToggle).attr("aria-expanded", "false");
			$this.find($dropdownMenu).removeClass(showClass);
		  }
		);
	  } else {
		$dropdown.off("mouseenter mouseleave");
	  }
	});

});
*/


$(".sendmail").click(function(){
	var surl = $("#send_url").val();
	var ety_name = $("input[name=ety_name]").val();
	var ety_phone = $("input[name=ety_phone]").val();
	var ety_email = $("input[name=ety_email]").val();
	var ety_content = $("#ety_content").val();

	if(ety_name == '')
	{
		alert('�대떦�먮� �낅젰�댁＜�몄슂.');
		return false;
	}
	if(ety_phone == '')
	{
		alert('�곕씫泥섎� �낅젰�댁＜�몄슂.');
		return false;
	}
	if(ety_email == '')
	{
		alert('�대찓�쇱쓣 �낅젰�댁＜�몄슂.');
		return false;
	}
	if(ety_content == '')
	{
		alert('臾몄쓽�댁슜�� �낅젰�댁＜�몄슂.');
		return false;
	}


	if($("input:checkbox[name=agree]").is(":checked") != true) {
		alert('�댁슜�쎄��� �숈쓽�섏뀛�� �⑸땲��.');
		return false;
	}

	var url = surl + "/contact.php";
	var params = "ety_name=" + ety_name + "&ety_phone=" + ety_phone + "&ety_email=" + ety_email + "&ety_content=" + ety_content;

	$.ajax({      
		type:"POST",  
		url:url,
		data:params,
		success:function(data){	
			alert('臾몄쓽媛� �깅줉�섏뿀�듬땲��. 理쒕��� 鍮좊Ⅴ寃� �곕씫�쒕━寃좎뒿�덈떎.')
			location.reload();
		}
	});

});
