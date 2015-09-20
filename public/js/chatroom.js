$(document).ready(function() {

  dpd.messages.on('create', function(Body) {
    renderMessage(Body);
  });

  dpd.messages.get(function(messages) {
    if (messages) {
      messages.forEach(function(m) {
        renderMessage(m);
      });
    }
  });

  $('#send').click(sendMessage);

  function renderMessage(Body) {
    if(Body.sender === 'customer'){
      var $el = $('<div class="outgoing">');
    }
    else{
      var $el = $('<div class="incoming">');
    }
    $el.append('<strong>' + Body.sender + ': </strong>');
    $el.append(Body.Body);
    $el.appendTo('#msgs');
  }

  function sendMessage() {
    var sender = 'customer';
    var Body = $('#message').val();
    dpd.messages.post({
      sender: sender,
      Body: Body
    }, function(Body, err) {
      if (err) {
        if (err.Body) {
          alert(err.Body);
        } else if (err.errors) {
          var errors = "";
          if (err.errors.sender) {
            errors += err.errors.sender + "\n";
          } 
          if (err.errors.Body) {
            errors += err.errors.Body + "\n";
          } 
          alert(errors);
        }
      } else {
        $('#message').val('');
      }
    });

    return false;
  }

});
