const spawn = require('child_process').spawn;

function runOnPS(command){
    const child = spawn('powershell.exe', [command]);
    let response = '';

    child.stdout.on('data', function(data){
        response = data;
    })

    child.stdin.end();
    return response;
}

module.exports = {
    runOnPS
}