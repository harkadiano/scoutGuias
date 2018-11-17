$(document).ready(function() {
	addClickToButtons();  
});

function addClickToButtons()
{
	$(".buttonClick").click(function(e){
		var id = e.target.id;
		var obj = $("#"+id);
		 
		if(obj.hasClass('bolillaSorteada')){
			obj.removeClass('bolillaSorteada');
		}
		else{
		    obj.addClass('bolillaSorteada');
		    
		}
	});	
} 	