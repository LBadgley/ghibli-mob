export function makeListTemplate(film) {
    const html = /*html*/`
        <li>
            <a href="/description.html?id=${film.id}">${film.title}</a>
            <span>(${film.release_date})</span>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
const filmList = document.getElementById('film-list');

export default function loadList(films) {
    films.forEach(film => {
        const dom = makeListTemplate(film);
        filmList.appendChild(dom);
    });
}