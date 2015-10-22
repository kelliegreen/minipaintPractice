$(document).ready(function() {
	
	
	var color = 'white';
		
	$('#red').on('click', function() {
		color = 'red';
	});
	
	$('#blue').on('click', function() {
		color = 'blue';
	});
	
	$('#green').on('click', function() {
		color = 'green';
	});
	
	$('#yellow').on('click', function() {
		color = 'yellow';
	});
	
	$('#white').on('click', function() {
		color = 'white';
	});
	
	
	
	$('.box').on('click', function() {
		$(this).addClass('color');
	});
		
	$('.box').on('dblclick', function() {
		$(this).removeClass('color');
	});
	
	$('#reset').on('click', function() {
		$('.box').removeClass('color');
	});
	
	
	$('.box').on('click', function() {
		$(this).addClass(color);
	});
	
	var colors = 'white green red blue yellow';
	
	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	});
	
	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	});
	
	var isPressed = false;
	
	$('.box').on('mousedown', function() {
		isPressed = true;
	});
	
	$('.box').on('mouseup', function() {
		isPressed = false;
	});
	
	$('.box').on('mouseenter', function() {
		if(isPressed) {
			$(this).addClass(color);
		}
	});
	
});