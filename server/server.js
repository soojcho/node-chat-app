const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

//create routes, middleware, startup the server
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

//configure express middleware to serve up the public folder
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('new user connected');
});

//listen on port 3000
app.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
