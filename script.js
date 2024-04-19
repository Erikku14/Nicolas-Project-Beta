/*
function uploadImages() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
  
    // Configurar las credenciales de la API de Dropbox
    const accessToken = 'sl.BzpW0H3VbnrSsIUAmtDl3TrgJ5piuHl26t4p0pTiqbb2OI1a6SXiT37KEH4e1KAE0U-EzzfET4gUCwoqNEIN7hDp6aNHGE1My4N-uBoCEB0Nser5C_F0YEKqqbHKC30V84Iw9-6mmHNE'; // Reemplaza con tu access token de Dropbox
  
    // Crear una instancia del cliente de Dropbox
    const dbx = new Dropbox.Dropbox({ accessToken });
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match('image.*')) {
        // Leer el archivo como un objeto Blob
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
  
        // Subir el archivo a Dropbox
        reader.onload = function () {
          const arrayBuffer = reader.result;
          dbx.filesUpload({
            path: '/' + file.name, // Ruta donde se subirá el archivo en Dropbox
            contents: arrayBuffer
          })
          .then(function(response) {
            console.log('Archivo subido a Dropbox:', response);
            // Aquí podrías realizar más acciones, como mostrar un mensaje de éxito o actualizar la interfaz
          })
          .catch(function(error) {
            console.error('Error al subir el archivo a Dropbox:', error);
            // Manejar errores, como mostrar un mensaje de error al usuario
          });
        };
  
        reader.onerror = function () {
          console.error('Error al leer el archivo:', reader.error);
          // Manejar errores, como mostrar un mensaje de error al usuario
        };
      }
    }
  }
  */
  function uploadImages() {
    const fileInput = document.getElementById('fileInput');
    const imageGallery = document.getElementById('imageGallery');
  
    const files = fileInput.files;
    const gallery = document.createElement('div');
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match('image.*')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = '300px'; // Ajustar el tamaño de la imagen si es necesario
        gallery.appendChild(img);
      }
    }
  
    // Aquí puedes agregar la lógica para subir las imágenes a la nube y guardar los enlaces
    // Por ejemplo, podrías usar la API de un servicio en la nube como Dropbox o Firebase Storage
  
    imageGallery.appendChild(gallery);
  }
  
