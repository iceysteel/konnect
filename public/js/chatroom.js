$(document).ready(function() {

  dpd.messages.on('create', function(message) {
    renderMessage(message);
  });

  dpd.messages.get(function(messages) {
    if (messages) {
      messages.forEach(function(m) {
        renderMessage(m);
      });
    }
  });

  $('#send').click(sendMessage);

  function renderMessage(message) {
    var $el = $('<div>');
    $el.append('<strong>' + message.sender + ': </strong>');
    $el.append(message.message);
    $el.appendTo('#msgs');
  }

  function sendMessage() {
    var sender = 'customer';
    var message = $('#message').val();
    dpd.messages.post({
      sender: sender,
      message: message
    }, function(message, err) {
      if (err) {
        if (err.message) {
          alert(err.message);
        } else if (err.errors) {
          var errors = "";
          if (err.errors.sender) {
            errors += err.errors.sender + "\n";
          } 
          if (err.errors.message) {
            errors += err.errors.message + "\n";
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
