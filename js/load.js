// Function to dynamically load HTML content into a specific container
function loadPage(page, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Chargement...</span></div>`; // Indicateur de chargement

  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      container.innerHTML = html; // Insère le contenu HTML dans le conteneur
      //window.scrollTo(0, 0); // Remonter en haut après chargement
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red;">Failed to load ${page}: ${error.message}</p>`;
    });
}






