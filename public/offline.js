var main = function(){
	function send(){
		var txtbox = $("#message");
		
		var txt = txtbox.val();
		if($.trim(txt).length !== 0){
			var newMsg = $('<div class="outgoing">').text(txt);
			newMsg.appendTo('#msgs');
			$('<div style="clear:both;">').appendTo('#msgs');
			$('#message').val('');
		}
		txtbox.focus();
		scrollDown();
	};
	function scrollDown(){
		$("body").scrollTop($("body")[0].scrollHeight);


	};

	$('#send').click(send);

	$('#message').keypress(function(event) {
  		if(event.which === 13){
  			send();
  			console.log(event.which);
  		}

	});

};




$(document).ready(main);
