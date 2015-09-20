if (!(this.sender && this.sender.length > 2 && this.sender.length < 50)) {
    error('sender', "Screen name must be between 2 and 50 characters");
}

if (!this.message || this.message.length < 1) {
    error('message', "Message is required");    
} else if (this.message.length > 100) {
    error('message', "Message cannot be more than 100 character");
}

if(this.sender === 'customer'){
	//require the Twilio module and create a REST client
	var client = require('twilio')('AC7426355d34b684bc68bf6cf6f84f39fc', '66a16a9027d92d2f0378a49c9abdc9c9');

	//Send an SMS text message
	client.sendMessage({

	    to:'+12096401826', // Any number Twilio can deliver to
	    from: '+16692366385', // A number you bought from Twilio and can use for outbound communication
	    body: this.message // body of the SMS message

	}, function(err, responseData) { //this function is executed when a response is received from Twilio

	    if (!err) { // "err" is an error received during the request, if any

	        // "responseData" is a JavaScript object containing data received from Twilio.
	        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
	        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
	        console.log(responseData.from); // outputs "+14506667788"
	        console.log(responseData.body); // outputs "word to your mother."
	    }
	});
}