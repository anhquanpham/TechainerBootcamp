const net = require('net');

const port = process.argv[2];

function autofill(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

const server = net.createServer(function (socket) {
    var date = new Date();
    
    var year   = date.getFullYear();
    var month  = autofill(date.getMonth() + 1);
    var day    = autofill(date.getDate());
    var hour   = autofill(date.getHours());
    var minute = autofill(date.getMinutes());
    
    var dateString = year + '-' + month + '-' + day;
    dateString = dateString + ' ' + hour + ':' + minute;
    
    socket.end(dateString + '\n');
});

server.listen(port); 