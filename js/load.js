// Function to dynamically load HTML content into the main container
function loadPage(page) {
  const dynamicContentDiv = document.getElementById("dynamic-content");
  dynamicContentDiv.innerHTML = `<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Chargement...</span></div>`; // Indicateur de chargement

  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("dynamic-content").innerHTML = html;
      window.scrollTo(0, 0); // Remonter en haut après chargement
    })
    .catch(error => {
      document.getElementById("dynamic-content").innerHTML =
        `<p style="color:red;">Failed to load ${page}: ${error.message}</p>`;
    });
}


