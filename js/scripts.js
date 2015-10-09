//Mobile menu Toggle
var $MenuToggle = $('.mobile-menu');
$MenuToggle.hide();

$('.mobile-menu-button').on('click', function(e){
	e.preventDefault();
	$MenuToggle.slideToggle(300);
});