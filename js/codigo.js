document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('navega').classList.toggle('mostrar');
  });

  lightbox.option({
    'wrapAround': true,
    'albumlabel':"Imagen 1% de %2",
 })

 function reproducir (){
    document.getElementById('miVideo').play();

 }

 function pausar (){
    document.getElementById('miVideo').pause();

    
 }

 