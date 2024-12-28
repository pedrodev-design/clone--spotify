document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { id: 1, name: 'The Weeknd', image: './assets/img/artist-the-weeknd.jpg' },
        { id: 2, name: 'The Neighbourhood', image: './assets/img/artist-the-neighbourhood.jpg' },
        { id: 3, name: 'Post Malone', image: './assets/img/artist-post-malone.jpg' },
        { id: 4, name: 'Michael Jackson', image: './assets/img/artist-michael-jackson.jpg' },
        { id: 5, name: 'Conan Gray', image: './assets/img/artist-conan-gray.jpg' },
        { id: 6, name: 'Artic Monkeys', image: './assets/img/artist-artic-monkeys.jpg' },
        { id: 7, name: 'Artic Monkeys', image: './assets/img/artist-lana-del-ray.jpg' },
        { id: 8, name: 'Artic Monkeys', image: './assets/img/artist-lady-gaga.jpg' },
        { id: 9, name: 'Artic Monkeys', image: './assets/img/artist-bruno-mars.jpg' },
        { id: 10, name: 'Artic Monkeys', image: './assets/img/artist-linkin-park.jpg' }
    ];

    const albumsData = [
        { id: 1, name: 'Star Boy', artistName: 'The Weeknd', image: './assets/img/album-starboy.jpg' },
        { id: 2, name: 'Camp', artistName: 'Childish Gambiho', image: './assets/img/album-camp.jpg' },
        { id: 3, name: 'Flower Boy', artistName: 'Tyler, The Creator', image: './assets/img/album-flower-boy.jpg' },
        { id: 4, name: 'Hit Me', artistName: 'Billie Eilish', image: './assets/img/album-hit-me.jpg' },
        { id: 5, name: 'Wiperd Out', artistName: 'The Neighbourhood', image: './assets/img/album-wiperd-out.jpg' },
        { id: 6, name: 'Froom Zero', artistName: 'Linkin Park', image: './assets/img/album-linkin-park.jpg' },
        { id: 7, name: 'The Flame Monster', artistName: 'Lady Gaga', image: './assets/img/album-lady-gaga.jpg' },
        { id: 8, name: 'Doo-Woops & Hooligans', artistName: 'Bruno Mars', image: './assets/img/album-bruno-mars.jpg' },
        { id: 9, name: 'Blurryface', artistName: 'Twentyone Pilots', image: './assets/img/album-twetyone-pilots.jpg' },
        { id: 10, name: 'Currents', artistName: 'Tame Impala', image: './assets/img/album-currents.jpg' },
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    // Renderizando artistas
    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <p>Artist</p>
        <i class="fa-solid fa-play-circle play-icon"></i>
    `;
        artistGrid.appendChild(artistCard);
    });

    // Renderizando álbuns
    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
        <img src="${album.image}" alt="${album.name}">
        <h3>${album.name}</h3>
        <p>${album.artistName}</p>
        <i class="fa-solid fa-play-circle play-icon"></i>`;

        albumsGrid.appendChild(albumCard);
    });
});