import { Server } from 'socket.io';

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (data) => {
    io.emit('message', data);
  });
});