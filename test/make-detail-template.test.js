const test = QUnit.test;
QUnit.module('make detail template');

function makeDetailTemplate(film) {
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

test('make detail template', assert => {
    // arrange
    const expected = /*html*/ `
        <table>
            <tbody>
                <tr>
                    <th>Title: </th>
                    <td>Castle in the Sky</td>
                </tr>
                <tr>
                    <th>Release Date: </th>
                    <td>1986</td>
                </tr>
                <tr>
                    <th>Description: </th>
                    <td>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</td>
                </tr>
                <tr>
                    <th>Director: </th>
                    <td>Hayao Miyazaki</td>
                </tr>
                <tr>
                    <th>Rotten Tomato Score: </th>
                    <td>95</td>
                </tr>
            </tbody>
        </table>
    `;
    const film = {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
        "people": [
          "https://ghibliapi.herokuapp.com/people/"
        ],
        "species": [
          "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
        ],
        "locations": [
          "https://ghibliapi.herokuapp.com/locations/"
        ],
        "vehicles": [
          "https://ghibliapi.herokuapp.com/vehicles/"
        ],
        "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
      };
    // act
    const result = makeDetailTemplate(film);

    // assert
    assert.htmlEqual(result, expected);
});