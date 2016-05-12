// when connected to the edison with lcd attached
var LCD = require('jsupm_i2clcd');
var myLcd = new LCD.Jhd1313m1(0);
myLcd.write('hello');
myLcd.setColor(64,255,64);


// ls /dev/cu.usbserial-*

// /dev/cu.usbserial-A903ORH6

// screen /dev/cu.usbserial-A903ORH6 115200 –L
