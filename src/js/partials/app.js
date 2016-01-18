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
	
	/* Email custom validation */
	jQuery.validator.addMethod("validEmail", function(value, element) 
	{
	    if(value == '') 
	        return true;
	    var temp1;
	    temp1 = true;
	    var ind = value.indexOf('@');
	    var str2=value.substr(ind+1);
	    var str3=str2.substr(0,str2.indexOf('.'));
	    if(str3.lastIndexOf('-')==(str3.length-1)||(str3.indexOf('-')!=str3.lastIndexOf('-')))
	        return false;
	    var str1=value.substr(0,ind);
	    if((str1.lastIndexOf('_')==(str1.length-1))||(str1.lastIndexOf('.')==(str1.length-1))||(str1.lastIndexOf('-')==(str1.length-1)))
	        return false;
	    str = /(^[a-zA-Z0-9]+[\._-]{0,1})+([a-zA-Z0-9]+[_]{0,1})*@([a-zA-Z0-9]+[-]{0,1})+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/;
	    temp1 = str.test(value);
	    return temp1;
	}, "Пожалуйста, введите корректный email.");


	if($('#commentform').length > 0){
		$('#commentform').validate({
			lang: 'ru',
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
		      validEmail: true
		    }
		  }
		});
	}

});