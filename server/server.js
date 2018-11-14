const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
//create routes, middleware, startup the server
var app = express();

//configure express middleware to serve up the public folder
app.use(express.static(publicPath));

//listen on port 3000
app.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
