document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos que necesitamos
    const botonLike1 = document.getElementById('megusta');
    const botonLike2 = document.getElementById('megusta2');
    const botonLike3 = document.getElementById('megusta3');
  
    const contadorLikes1 = document.querySelector('.containercuatro h5');
    const contadorLikes2 = document.querySelector('.containercinco h5');
    const contadorLikes3 = document.querySelector('.containerseis h5');
  
    // Contadores de likes iniciales
    let likes1 = 0;
    let likes2 = 0;
    let likes3 = 0;
  
    // Función para actualizar el contador de likes y manejar los clics en los botones de "Me gusta"
    function aumentarLikes(boton, contador) {
      boton.addEventListener('click', function() {
        // Aumentar el contador de likes
        if (contador === contadorLikes1) {
          likes1++;
          contadorLikes1.textContent = likes1 === 1 ? '1 like' : likes1 + ' likes';
        } else if (contador === contadorLikes2) {
          likes2++;
          contadorLikes2.textContent = likes2 === 1 ? '1 like' : likes2 + ' likes';
        } else if (contador === contadorLikes3) {
          likes3++;
          contadorLikes3.textContent = likes3 === 1 ? '1 like' : likes3 + ' likes';
        }
      });
    }
  
    // Llamar a la función para cada botón de "Me gusta"
    aumentarLikes(botonLike1, contadorLikes1);
    aumentarLikes(botonLike2, contadorLikes2);
    aumentarLikes(botonLike3, contadorLikes3);
  });