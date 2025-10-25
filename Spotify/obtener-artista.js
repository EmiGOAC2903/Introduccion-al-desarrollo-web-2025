async function buscarArtistaPorNombre() {
  const token = document.getElementById("token").value.trim();
  const artistName = document.getElementById("artist-name").value.trim();
  const container = document.getElementById("artist-info");
  container.innerHTML = "<p>Buscando artista...</p>";

  if (!token || !artistName) {
    container.innerHTML = "<p style='color: red;'>Falta token o nombre</p>";
    return;
  }

  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    artistName
  )}&type=artist&limit=1`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);

    const data = await response.json();
    const artist = data.artists.items[0];

    if (!artist) {
      container.innerHTML = "<p>No se encontró el artista</p>";
      return;
    }

    renderArtistCard(artist, container);
  } catch (err) {
    container.innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}

async function obtenArtistaFijo() {
  const token = document.getElementById("token").value.trim();
  const artistId = document.getElementById("artist-id").value.trim();
  const container = document.getElementById("artist-info");
  container.innerHTML = "<p>Cargando artista...</p>";

  if (!token || !artistId) {
    container.innerHTML = "<p style='color: red;'>Falta token o ID</p>";
    return;
  }

  const url = `https://api.spotify.com/v1/artists/${artistId}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);

    const artist = await response.json();
    renderArtistCard(artist, container);
  } catch (err) {
    container.innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}

function renderArtistCard(artist, container) {
  const image = artist.images[0]?.url || "";
  const genres = artist.genres
    .map(
      (genre) => `<span class="badge bg-secondary me-1">${genre}</span>`
    )
    .join("");

  const html = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${image}" class="img-fluid rounded-start" alt="${artist.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${artist.name}</h5>
            <p class="card-text"><strong>Seguidores:</strong> ${artist.followers.total.toLocaleString()}</p>
            <p class="card-text"><strong>Géneros:</strong><br/> ${genres || "No especificados"}</p>
            <p class="card-text"><strong>Popularidad:</strong> ${artist.popularity}/100</p>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}
