$(document).ready(function() {
	var comp = {
		'corn1.jpg': 'tree1.gif',
		'corn2.jpg': 'tree2.gif',
		'corn3.jpg': 'tree3.gif',
		'corn4.jpg': 'tree4.gif',
		'corn5.jpg': 'tree5.gif',
		'tree1.gif': 'corn1.jpg',
		'tree2.gif': 'corn2.jpg',
		'tree3.gif': 'corn3.jpg',
		'tree4.gif': 'corn4.jpg',
		'tree5.gif': 'corn5.jpg',
	};

	$('img').click(function() {
		var cPic = comp[$(this).attr('src')];
		$(this).attr('src', cPic);
	});
});

