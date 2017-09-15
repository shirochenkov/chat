const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('send', (msg) => {
        console.log(msg);
        client.emit('msg', { msg });
        // setInterval(() => {
        //     client.emit('timer', new Date());
        // }, interval);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);