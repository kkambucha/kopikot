$(document).ready(function(){

	function appendBgBlock(){
		var contentHeight = $('.l-centercol').height(),
			contentLeftOffset = $('.l-centercol').offset().left;

		$('.h-background').css({
			position: 'absolute',
			width: contentLeftOffset + 'px',
			height: contentHeight + 'px',
			top: 0,
			left: 0,
			marginLeft: -contentLeftOffset + 'px',
		});
	}

	appendBgBlock();

	$(window).resize(function(){
		appendBgBlock();	
	});
	
	if($('#post-form').length > 0){
		$('#post-form').validate({
			invalidHandler: function(event, validator) {
		    // 'this' refers to the form
		    var errors = validator.numberOfInvalids();
		    if (errors) {
		      var message = errors == 1
		        ? 'You missed 1 field. It has been highlighted'
		        : 'You missed ' + errors + ' fields. They have been highlighted';
		      $("div.error span").html(message);
		      $("div.error").show();
		    } else {
		      $("div.error").hide();
		    }
		  },
		  rules: {
		    email: {
		      required: true,
		      email: true
		    }
		  }
		});
	}

});