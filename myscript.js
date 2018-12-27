$( ".close" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".close" ).show();
	});
});

$( ".close" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".close" ).hide();
		$( ".hamburger" ).show();
	});
});
