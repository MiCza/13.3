process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quiting app\n');
                process.exit();
                break;
            case 'help':
                console.log('available commands: version, language, /exit, help');
                break;
            case 'version':
                console.log(process.versions.node);
                break;
            case 'language':
                console.log(process.env.LANG);
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;

        }
    }
})