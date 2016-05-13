var request = require("request")

var authToken = "ZWU0ZDAyOWItNjIxMS00ODA4LWJhZGMtYjg3ZjIzNDRlODk4MmMwMjdmMjgtMTIy"
createNewRoom();

function createNewRoom() {
	var timeestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
	var roomTitle = "Knight Rider " + timeestamp

	request({
	    url: "https://api.ciscospark.com/hydra/api/v1/rooms",
	    method: 'POST',
		headers: { 
		    'Authorization': "Bearer " + authToken,
		    'Content-Type': 'application/json'
		},
	    json: {
	        title: roomTitle
	    }
	}, function(error, response, body) {
	    if(error) {
	        console.log(error);
	    } else {

	        console.log ("createNewRoom completed");
	        //console.log (response)
	        //console.log(response.statusCode, body);

	        var roomId = body.id;
	        console.log (" id: " + roomId);
	        addUserToRoom(roomId);
		}
	});
}


function addUserToRoom(roomId) {

	request({
	    url: "https://api.ciscospark.com/hydra/api/v1/memberships", 
	    method: 'POST',
	    headers: { 
		    'Authorization': "Bearer " + authToken,
		    'Content-Type': 'application/json'
		},
	    json: {
	        roomId: roomId,
            personEmail: "key2xanadu+knight@gmail.com",
            isModerator: false
	    }
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {

	        console.log ("addUserToRoom completed");
	        //console.log (response)
	        //console.log(response.statusCode, body);
	        sendMessageToRoom(roomId);
		}
	});

}

function sendMessageToRoom(roomId) {

	request({
	    url: "https://api.ciscospark.com/hydra/api/v1/messages", 
	    method: 'POST',
	    headers: { 
		    'Authorization': "Bearer " + authToken,
		    'Content-Type': 'application/json'
		},
	    json: {
            roomId: roomId,
            file: "https://upload.wikimedia.org/wikipedia/en/3/31/Knightlogo.png",
            text: "Knight Rider is here! What's happening?"
	    }
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {

	        console.log ("sendMessageToRoom completed");
	        //console.log (response)
	        //console.log(response.statusCode, body);
		}
	});

}

