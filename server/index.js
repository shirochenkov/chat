const io = require('socket.io')();

let logs = [];

function saveLog(message) {
    logs.push(message);
}

io.on('connection', (socket) => {
    let id = socket.id;
    socket.emit('action', {type: 'SET_ID', payload: id});

    socket.on('action', (action) => {
        if(action.type === 'server/logs') {
            socket.emit('action', {type: 'GET_ALL_MESSAGES', payload: logs});
        }

        if(action.type === 'server/send') {
            action.payload.socketId = id;
            saveLog(action.payload);
            socket.emit('action', {type: 'SEND_MESSAGE', payload: action.payload});
            socket.broadcast.emit('action', {type: 'SEND_MESSAGE', payload: action.payload});
        }
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);