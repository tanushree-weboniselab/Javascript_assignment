$(document).ready(function(){
	$("#dv1").hide();
	//$("#popup_box").hide();
	$('#itstxtbox2').hide();
$('#itslbl2').hide();
$('#itsaddbtn2').hide();
$('#itstxtbox3').hide();
$('#itslbl3').hide();
$('#itsaddbtn3').hide();
		

	
	$("#itsadd").click(function(){
		$("#dv1").show();

	if($("#itstxt").val()!='')
	{
		var str1=$("#itstxt").val();
		//alert(str1);
		$("#dv2").append('<li>'+str1+'</li>');
		$("#itstxt").val('');
		$("#dv1").hide();

	}
	
	});


jQuery(function($) {

	$(".opopup").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 500); // .5 second
	return false;
	});



	/* event for close the popup */
	$("div.close").hover(
					function() {
						$('span.ecs_tooltip').show();
					},
					function () {
    					$('span.ecs_tooltip').hide();
  					}
				);

	$("div.close").click(function() {
		disablePopup();  // function close pop up
	});

	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}
	});

        $("div#backgroundPopup").click(function() {
		disablePopup();  // function close pop up
	});

	$('a.livebox').click(function() {
		$("#toPopup").hide();
		
	return false;
	});





	 /************** start: functions. **************/
	function loading() {
		$("div.loader").show();
	}
	function closeloading() {
		$("div.loader").fadeOut('normal');
	}

	var popupStatus = 0; // set value

	function loadPopup() {
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#toPopup").fadeIn(0500); // fadein popup div
			$("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#backgroundPopup").fadeIn(0001);
			popupStatus = 1; // and set value to 1
			}

}	

	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#toPopup").fadeOut("normal");
			$("#backgroundPopup").fadeOut("normal");
			popupStatus = 0;  // and set value to 0
		}
	}
	/************** end: functions. **************/
}); // jQuery End

$("#itsaddbtn").click(function(){
$('#itstxtbox2').show();
$('#itslbl2').show();
$('#itsaddbtn2').show();
		

		
	if($("#itstxtbox").val()!='')
	{
	var str2=$("#itstxtbox").val();
	$('#itslbl').text(str2);
	$('#itslbl').show();
	$("#itstxt").val('');
	$('#itstxtbox').hide();

	}
});


$("#itsaddbtn2").click(function(){
$('#itstxtbox3').show();
$('#itslbl3').show();
$('#itsaddbtn3').show();
		

		
	if($("#itstxtbox2").val()!='')
	{
	var str2=$("#itstxtbox2").val();
	$('#itslbl2').text(str2);
	$('#itslbl2').show();
	$("#itstxt2").val('');
	$('#itstxtbox2').hide();

	}
});


}); //document  end
