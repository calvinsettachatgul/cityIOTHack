var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {

  var temperature = new five.Thermometer({
    controller: "GROVE",
    pin: "A0"
  });

  var lcd = new five.LCD({
    controller: "JHD1313M1"
  });

  var f = 0;

  temperature.on("data", function() {



    if (f === Math.round(this.fahrenheit)) {
      return;
    }

    f = Math.round(this.fahrenheit);

    var r = linear(0x00, 0xFF, f, 100);
    var g = linear(0x00, 0x00, f, 100);
    var b = linear(0xFF, 0x00, f, 100);

    lcd.bgColor(r, g, b).cursor(0, 0).print(f);
  });
});

function linear(start, end, step, steps) {
  return (end - start) * step / steps + start;
}