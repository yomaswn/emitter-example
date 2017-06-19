// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var util = require('util');

var Students = function(name){
 this.name = name;
}

eventEmitter.on('clicked', () => {
  console.log('something is clicked');
})
eventEmitter.emit('clicked');

eventEmitter.on('clicked2', (buttonName) => {
  console.log(`${buttonName} is clicked`);
})
eventEmitter.emit('clicked2','button1');

//inherit eventEmitter pada Students. Students bisa menggunakan eventEmitter juga
util.inherits(Students, events.EventEmitter);

var max = new Students('max');

max.on('marks', function(nilai){
  console.log(`${this.name} nilainya adalah ${nilai}`);
})

max.emit('marks', 90);
