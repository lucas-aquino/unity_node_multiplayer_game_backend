const io = require('socket.io')(process.env.PORT || 3600);

console.log('Server started!');

io.on('connection', socket => {
    console.log('connection mode!!');

    socket.on('disconnect', event => {
        console.log('disconnected!!');
    });
});