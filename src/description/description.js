import { makeDetailTemplate } from './table-component.js';

const searchParams = new URLSearchParams(window.location.search);
const idToFind = searchParams.get('id');
const filmDetail = document.getElementById('film-detail');

const URL = `https://ghibliapi.herokuapp.com/films/${idToFind}`;

fetch(URL)
    .then(response => response.json())
    .then(result => {
        const dom = makeDetailTemplate(result);
        filmDetail.appendChild(dom);
    });


