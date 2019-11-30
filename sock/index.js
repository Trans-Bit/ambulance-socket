const socket = require("socket.io");
var express = require("express");

var app = express();
server = app.listen(8000, () => {
  console.log("listening on 8000");
});

io = socket(server);

// io.on("connection", client => {
//   client.on("subscribeToTimer", interval => {
//     console.log("client is subscribing to timer with interval ", interval);
//     setInterval(() => {
//       client.emit("timer", new Date());
//     }, interval);
//   });
// });

io.on("connection", socket => {
  console.log(socket.id);
  socket.on("call", data => {
    io.emit("ambulance", data);
  });
  socket.on("sending", data => {
    io.emit("omw", data);
    io.disconnect();
  });
});

// const port = 8000;
// io.listen(port);
// console.log("listening on port ", port);
