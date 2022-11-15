import { getFilms } from './fetch.utils.js';
import { renderFilmDetail, renderCard } from './render.utils.js';

const filmListContainer = document.getElementById('film-list-container');

window.addEventListener('load', async () => {
    const films = await getFilms();
    for (let film of films) {
        const filmEl = renderCard(film);
        filmListContainer.append(filmEl);
    }
});
