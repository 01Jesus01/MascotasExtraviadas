
  document.getElementById('seleccionarImagen').onchange = function(event) {
    // Acciones a realizar cuando se selecciona una imagen
    var selectedFile = event.target.files[0];
    console.log('Nombre del archivo:', selectedFile.name);
    console.log('Tipo de archivo:', selectedFile.type);
    console.log('Tamaño del archivo:', selectedFile.size, 'bytes');
};

