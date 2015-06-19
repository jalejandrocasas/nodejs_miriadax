function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
  var _lista = function crearLista(){
      var _entradas = new String();
      for( var contacto in _contenido){
        _entradas += contacto + "," + _contenido[contacto] + "\n";
      }
      console.log(_entradas);
  };

  return {
    titulo: function()           { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)     { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()           { return JSON.stringify(_contenido);},
    listar: _lista
  };
}

var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

amigos.listar();

