var io = require('socket.io')();

io.on('connection', function (socket) {

  socket.on('messageFeed', function(data){
    console.log(data);
    io.sockets.emit('messageData', data);
  });

  
  // socket.on('join', function (data) {
  //   console.log('in join', data);
  //   if (socket.room) {
  //     socket.leave(socket.room);
  //   }
  //
  //   socket.join(data.room_name);
  //
  //   socket.room = data.room_name;
  // });

});

module.exports = io;
