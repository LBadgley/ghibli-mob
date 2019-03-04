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