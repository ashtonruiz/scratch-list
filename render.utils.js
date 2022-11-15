export function renderCard(film) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');

    div.classList.add('film-card');

    p.textContent = film.name;
    img.textContent = img;
    a.href = `./details/?id=${film.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderFilms(film) {
    const div = document.createElement('div');
    const imgEl = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const filmEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const characterNameEl = document.createElement('p');

    div.classList.add('film-detail');

    filmEl.textContent = film.name;
    filmEl.classList.add('film-name');

    yearEl.textContent = film.year;
    yearEl.classList.add('year');

    characterNameEl.textContent = film.character;
    characterNameEl.classList.add('character_name');

    descriptionEl.textContent = film.description;
    descriptionEl.classList.add('description');

    imgEl.textContent = film.img;
    imgEl.classList.add('image');

    div.append(filmEl, yearEl, characterNameEl, descriptionEl, imgEl);

    return div;
}
