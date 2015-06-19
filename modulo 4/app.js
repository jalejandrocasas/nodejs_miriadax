var express = require('express');
var path = require('path');
var app = express();

//ruta /
app.get('/' , function(req, res){
	res.redirect('/preguntas');
});

//ruta /preguntas
app.get('/preguntas' , function(req, res){
	res.send('Preguntas');
});

//ruta /respuesta
app.get('/respuesta' , function(req, res){
	res.send('Respuesta');
});

//ruta incorrecta
app.get('*' , function(req, res){
	res.send('404 página no encontrada');
});


app.listen(8000);