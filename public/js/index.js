var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'joebloggs@example.com',
    text: 'Hey. This is Andrew.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New email', email);
});
