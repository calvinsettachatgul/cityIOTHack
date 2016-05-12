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

        this.loop(2000, function(){
          console.log(temp);
          console.log("%d degC", Math.round(temp.celcius));
        });
          var led = new five.Led(13);
            led.blink();
            console.log("board is working...");
});