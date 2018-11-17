//making a request to open up the socket
var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  // socket.emit('createEmail',{
  //   to: 'soo@example.com',
  //   text: 'hey this is soo'
  // });

//create message from client
  socket.emit('createMessage',{
    from: 'sample name',
    text: 'hello there'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

// //new custom event "newEmail"
// socket.on('newEmail', function (email){
//   console.log('new email', email);
// });

//print message from server in client
socket.on('newMessage', function (message){
  console.log('new message', message);
});
