/**
 * Initialise toutes les barres de progression en fonction de leur attribut data-value.
 */
function initializeProgressBars() {
    // 1. Sélectionner tous les conteneurs de progression
    const progressBars = document.querySelectorAll('.ab-progress[data-progress]');

    // 2. Parcourir chaque barre trouvée
    progressBars.forEach(progressBar => {
        const progressValue = progressBar.getAttribute('data-value'); 
        const innerBar = progressBar.querySelector('.ab-progress-bar');
        
        if (progressValue && innerBar) {
            // 3. Définir la largeur et la transition
            innerBar.style.width = progressValue + '%';
            innerBar.style.transition = 'width 1.5s ease-out'; 
            
            // OPTIONNEL : Ajouter une classe pour déclencher l'animation si vous utilisez CSS
            // innerBar.classList.add('is-loaded'); 
        }
    });
}

// Pour que cela continue de fonctionner sur le contenu de base au premier chargement :
document.addEventListener('DOMContentLoaded', initializeProgressBars);