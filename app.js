import { getFilms } from './fetch.utils.js';
import { renderFilmDetail, renderCard } from './render.utils.js';

/* Get DOM Elements */
const filmListContainer = document.getElementById('film-list-container');

window.addEventListener('load', async () => {
    const films = await getFilms();
    for (let film of films) {
        console.log(film);
        const filmEl = renderCard(film);
        filmListContainer.append(filmEl);
    }
});
