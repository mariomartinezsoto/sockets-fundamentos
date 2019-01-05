const { io } = require('../server')

io.on('connection', (client) => {
    console.log('SRV > Usuario conectado');

    client.on('disconnect', () => {
        console.log('SRV > Usuario desconectado');
    })

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

        // if (mensaje.usuario) {
        //     callback('TODO OK')
        // } else {
        //     callback('TODO MALLLLLLLL')
        // }

    })

    client.emit('enviarMensaje', {
        usuario: 'administador',
        mensaje: 'Bienvenido a esta app'
    })
})