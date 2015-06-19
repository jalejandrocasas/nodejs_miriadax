var fs = require('fs');

//Si no hay almenos un fichero origen informamos de la sintaxis
if(process.argv.length<4){
	console.log( 'sintaxis: node merge <destino> <origen1> <origen2> .. <origenN>');
	process.exit();
}

var readStream = null;
var writeStream = fs.createWriteStream(process.argv[2]);
var mArguments = process.argv.slice(3);
var argument=0;

//En bucle
for (argument in mArguments){	
	readStream = fs.createReadStream(mArguments[argument]);
	//Si se produce un evento de error en el reader informamos
	readStream.on('error', function(error) {
			console.log('Se ha producido un error con el siguiente fichero: \n'+error.path+'\n'+error);
	});
	readStream.pipe(writeStream);
}

console.log('\nOperación realizada');
