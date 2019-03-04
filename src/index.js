import loadList from '../src/list-component.js';

const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL)
    .then(response => response.json())
    .then(results => loadList(results));
    // does the same as above line
    // .then(loadList);