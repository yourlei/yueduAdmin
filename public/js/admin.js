$(document).ready(function() {
	$('#avatar').on('mouseover', function (e) {
		$(this).velocity('callout.shake', {duration: 1000});
	});
});