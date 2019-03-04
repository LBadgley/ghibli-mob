import testArray from '../../data/testArr.js';
import { makeDetailTemplate } from './table-component.js';

const searchParams = new URLSearchParams(window.location.search);
const idToFind = searchParams.get('id');
const filmDetail = document.getElementById('film-detail');


let currentFilm = {};
for(let i = 0; i < testArray.length; i++) {
    if(testArray[i].id === idToFind) {
        currentFilm = testArray[i];
        break;
    }
}

// testArray.forEach(film => {
//     if(film.id === idToFind) {
//         currentFilm = film;
//     }
// });

const dom = makeDetailTemplate(currentFilm);
filmDetail.appendChild(dom);

