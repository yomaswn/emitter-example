// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();


eventEmitter.on('clicked', () => {
  console.log('something is clicked');
})

eventEmitter.emit('clicked');
