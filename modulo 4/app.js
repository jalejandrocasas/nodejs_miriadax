var express = require('express');
var path = require('path');
var app = express();
var corrector = require('myModules/corrector');

//ruta /
app.get('/' , function(req, res){
	res.redirect('/preguntas');
});

//ruta /preguntas
app.get('/preguntas' , function(req, res){
	res.send('<html>' +
             	'<body>' +
		             '<form action="/respuesta" method="get">' +
			             '<p>1- ¿Quién descubrió América:<p/>' +
						 '<input type="text" name="respuesta">' +
			             '<input type="hidden" name="pregunta" value="0"><br/><br/>' +
						 '<input type="submit">'+
		             '</form>' +
		             '<form action="/respuesta" method="get">' +
			             '<p>2- ¿Capital de Portugal:<p/>' +
						 '<input type="text" name="respuesta">' +
			             '<input type="hidden" name="pregunta" value="1"><br/><br/>' +
						 '<input type="submit">'+
		             '</form>' +
            	 '</body>' +
             '</html>');
});

//ruta /respuesta
app.get('/respuesta' , function(req, res){
	
	var mCorrector = corrector(req.query.pregunta, req.query.respuesta);
	 	  
	res.send("<html>" + 
			     '<body>' +
					 '<p>Respuesta a la pregunta número '+(parseInt(req.query.pregunta)+1)+'</p>' +
					  '<p>Tú respuesta ha sido: <b>'+req.query.respuesta+'</b><p>' +
					  '<p/>Es <b>'+mCorrector.corregir()+'</b><p/>' +
					  '<a href="preguntas">Volver a la página inicial</a>' +
	              '</body>' +
              '</html>');
});

//ruta incorrecta
app.get('*' , function(req, res){
	res.send('404 página no encontrada');
});

app.listen(8000);