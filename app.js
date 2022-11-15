import { getFilms } from './fetch.utils.js';
import { renderFilms } from './render.utils.js';

/* Get DOM Elements */
const filmListContainer = document.getElementById('film-list-container');

window.addEventListener('load', async () => {
    const films = await getFilms();
    for (let film of films) {
        const filmEl = renderFilms(film);
        filmListContainer.append(filmEl);
    }
});
