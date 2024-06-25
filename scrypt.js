// document.addEventListener('DOMContentLoaded', function() {
//     const boutonAfficher = document.getElementById('bouton-afficher');
//     const elementAAfficher = document.getElementById('navbar-to-show');
    
//     console.log(boutonAfficher);
    
//     boutonAfficher.addEventListener('click', function() {
//       console.log('Événement click sur l\'image (ou le bouton) pris en compte !');
      

//       if (elementAAfficher.style.display === 'none') {
//         elementAAfficher.style.display = 'block';
//       } else {
//         elementAAfficher.style.display = 'none';
//       }
//     });
//   });



  document.addEventListener('DOMContentLoaded', function() {
    // Récupération des boutons et de l'élément à afficher/masquer
    const boutonAfficher = document.getElementById('bouton-afficher');
    const boutonMasquer = document.getElementById('bouton-masquer');
    const elementAAfficher = document.getElementById('navbar-to-show');
    
    boutonAfficher.addEventListener('click', function() {
      elementAAfficher.classList.add('visible');
      boutonAfficher.style.display = 'none';
      boutonMasquer.style.display = 'inline-block';
      elementAAfficher.style.transform = 'translateX(68px)';
    });
    
    boutonMasquer.addEventListener('click', function() {
      elementAAfficher.classList.remove('visible');
      boutonAfficher.style.display = 'inline-block';
      boutonMasquer.style.display = 'none';
    });

    boutonAfficher.addEventListener('mouseout', function() {
        // elementAAfficher.classList.remove('visible');
      });
  });

 elementAAfficher.classList.add('visible');