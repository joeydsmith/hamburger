$('.hamburglar').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('is-closed');
})