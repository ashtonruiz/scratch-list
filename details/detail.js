import { getFilm } from '../fetch.utils.js';
import { renderFilmDetail } from '../render.utils.js';

const filmDetailContainer = document.getElementById('film-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const film = await getFilm(id);
    const filmDetailEl = renderFilmDetail(film);
    filmDetailContainer.append(filmDetailEl);
});
