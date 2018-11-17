const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

//create routes, middleware, startup the server
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

//configure express middleware to serve up the public folder
app.use(express.static(publicPath));

//callback function to listen on a built in "connection" event for when client is connected to the server,
//then fire function when it's connected
io.on('connection',(socket)=>{
  console.log('new user connected');
  //socket.emit
  //text: 'welcome to the chat app'
  socket.emit('newMessage', generateMessage('Admin','welcome to the chat app'));
  //socket.broadcast.emit
  //text: 'new user joined'
  socket.broadcast.emit('newMessage', generateMessage('Admin','new user joined'));

//prints message created from client in cmd/server
  socket.on('createMessage',(message) =>{
    console.log('create Message',message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    // socket.broadcast.emit('newMessage',{
    //   from: message.from,
    //   text: message.text,
    //   createAt: new Date().getTime()
    // });
  });

  socket.on('disconnect',()=>{
    console.log('user was disconnected');
  });
});

//listen on port 3000
server.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
