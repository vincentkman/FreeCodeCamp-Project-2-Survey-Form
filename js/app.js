(function($) {

	let x = 0;
	let y = 0;

	const banner = $('#banner');

	banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');

	window.setInterval(function() {
		banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
		y--;

	}, 90);
}) ($);
