(function ($) {

  "use strict";

  // Fonction globale pour initialiser et réinitialiser tous les composants interactifs
  window.initThemeFeatures = function () {

    // 1. Initialisation de Chocolat light box (déplacée et adaptée)
    var initChocolat = function () {
      if (typeof Chocolat !== 'undefined') {
        Chocolat(document.querySelectorAll('.image-link'), {
          imageSize: 'contain',
          loop: true,
        });
      }
    }


    // 2. Initialisation des Sliders (Swiper)
    // IMPORTANT : Swiper doit être recréé à chaque fois sur le nouvel élément.
    if (typeof Swiper !== 'undefined') {
        var swiper = new Swiper(".testimonial-swiper", {
          slidesPerView: 2,
          spaceBetween: 40,
          pagination: {
            el: ".swiper-pagination",
          },
          breakpoints: {

            390: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            450: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }
        });
    }


    // 3. Animate on Scroll (AOS)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        once: true,
      });
      AOS.refreshHard(); // Force la réévaluation des éléments sur les nouveaux contenus
    }


    // 4. Initialisation Isotope (Portfolio)
    // Nous devons relancer l'initialisation de l'Isotope sur le nouveau contenu.
    if (typeof $.fn.isotope !== 'undefined') {
        var $container = $('.isotope-container').isotope({
          itemSelector: '.item',
          layoutMode: 'masonry'
        });

        // Videz l'événement click pour éviter des doubles exécutions
        $('.filter-button').off('click').on('click', function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
          var filterValue = $(this).attr('data-filter');
          $container.isotope({ filter: filterValue });
        });
        
        // Relancer la disposition pour le nouveau contenu
        $container.isotope('layout');
    }
    
    // 5. Initialisation des Barres de Progression (nécessite jQuery et plugins.js)
    if (typeof $.fn.progressBar !== 'undefined') {
        $("[data-progress]").progressBar();
    }


    // 6. Accordéon et Tooltips Bootstrap (Crucial pour la réactivation)
    if (typeof bootstrap !== 'undefined') {
        // Réinitialisation des Tooltips Bootstrap
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            // Détruit les tooltips existants avant d'en créer de nouveaux si possible
            var existingTooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
            if (existingTooltip) existingTooltip.dispose();
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Réinitialisation des Accordéons Bootstrap (pour la section Expérience)
        document.querySelectorAll('.accordion').forEach(function(accordionEl) {
          var existingAccordion = bootstrap.Accordion.getInstance(accordionEl);
          if (existingAccordion) { existingAccordion.dispose(); }
          new bootstrap.Accordion(accordionEl); 
        });
    }
    
    // 7. Relancer Chocolat
    initChocolat();
    
    // 8. Demo/Hover (peut rester ici)
    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );

  };

  // Appeler la fonction au chargement initial du document (DOM prêt)
  $(document).ready(function () {
    window.initThemeFeatures();
  });

})(jQuery);