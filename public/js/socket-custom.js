var socket = io();

socket.on('connect', function() {
    console.log('WEB > Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('WEb > Conexion perdida con el servidor');
})

socket.on('enviarMensaje', function(mensaje) {
    console.log('WEB > enviarMensaje > ' + mensaje.usuario + ' -> ' + mensaje.mensaje);
})

socket.emit('enviarMensaje', {
    usuario: 'fernando',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('Se disparó el callback > ' + resp);
})