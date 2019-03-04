export function makeDetailTemplate(film) {
    const html = /*html*/ `
    <table>
        <tbody>
            <tr>
                <th>Title: </th>
                <td>${film.title}</td>
            </tr>
            <tr>
                <th>Release Date: </th>
                <td>${film.release_date}</td>
            </tr>
            <tr>
                <th>Description: </th>
                <td>${film.description}</td>
            </tr>
            <tr>
                <th>Director: </th>
                <td>${film.director}</td>
            </tr>
            <tr>
                <th>Rotten Tomato Score: </th>
                <td>${film.rt_score}</td>
            </tr>
        </tbody>
    </table>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}