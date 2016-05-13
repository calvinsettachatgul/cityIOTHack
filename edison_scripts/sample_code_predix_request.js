req = http.get({
        host: 'knight-rider.run.aws-usw02-pr.ice.predix.io',
        path: '/spark/?create-new-room'
    }, function(res) {


      res.setEncoding('utf8');

        var body = '';
        res.on('data', function(d) {
            body += d;
        });

        res.on('end', function(){
          console.log("thats it");
        })



    }).on('error', function(err){
              console.error('Error with the request:', err.message);
    });


var opts = {host: "knight-rider.run.aws-usw02-pr.ice.predix.io", path:"/spark/", port: 80};
https.get(opts, function(res) {
  var page = '';
  res.on('data', function (chunk) {
    page += chunk;
  });
  res.on('end', function() {
    console.log("response has ended");
  });


  var http = require('http');

var options = {
  host: 'www.knight-rider.run.aws-usw02-pr.ice.predix.io',
  path: '/spark/'
};

https.get(options, callback);

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}


var options = {
  host: "www.knight-rider.run.aws-usw02-pr.ice.predix.io",
  port: 80,
  path: '/spark/',
  method: 'POST'
};

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();