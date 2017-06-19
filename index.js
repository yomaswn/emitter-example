// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();


eventEmitter.on('clicked', (buttonName) => {
  console.log(`${buttonName} is clicked`);
})

eventEmitter.emit('clicked','button1');
