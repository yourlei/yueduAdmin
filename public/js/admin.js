$(document).ready(function() {
	// user avatar animate when mouseover
	$("#avatar").on("mouseover", function (e) {
		$(this).velocity("callout.shake", {duration: 1000});
	});
	// toggle seconde items when click first-item
	$(".first-item").click(function (event) {
		event.preventDefault();
		var _this = $(this),
				index = $(this).parent().index(),
				secondItems = $(".second-items");

		if (_this.is('.actived-item')) 
		{
			_this.siblings(".second-items").toggle('slow');
			return;
		}

		$('.first-item').removeClass('actived-item');
		_this.addClass('actived-item');

		if(secondItems.attr("display") != "none")
		{
			secondItems.slideUp();
		}
		if (_this.siblings())
		{
			_this.siblings(".second-items").slideDown();
		}
	});
	/*$('.actived-item').click(function (event) {
		event.preventDefault();
		$(this).toggle();
	});*/
});