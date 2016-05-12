var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
          io: new Edison()
});

board.on("ready", function() {
          var temp = new five.Thermometer({
                      pin: "A0",
                      controller: "GROVE"
                                });

            this.loop(1000, function() {
                        console.log("%d°F", Math.round(temp.fahrenheit));

                          });
});