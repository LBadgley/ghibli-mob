const test = QUnit.test;
QUnit.module('make detail template');

function makeDetailTemplate() {
    const html = /*html*/ `
        <table>
            <tbody>
                <tr>
                    <th>Title: </th>
                    <td>some title</td>
                </tr>
                <tr>
                    <th>Release Date: </th>
                    <td>1548</td>
                </tr>
                <tr>
                    <th>Description: </th>
                    <td>description</td>
                </tr>
                <tr>
                    <th>Director: </th>
                    <td>director</td>
                </tr>
                <tr>
                    <th>RT Score: </th>
                    <td>score</td>
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
                    <td>some title</td>
                </tr>
                <tr>
                    <th>Release Date: </th>
                    <td>1548</td>
                </tr>
                <tr>
                    <th>Description: </th>
                    <td>description</td>
                </tr>
                <tr>
                    <th>Director: </th>
                    <td>director</td>
                </tr>
                <tr>
                    <th>RT Score: </th>
                    <td>score</td>
                </tr>
            </tbody>
        </table>
    `;

    // act
    const result = makeDetailTemplate();

    // assert
    assert.htmlEqual(result, expected);
});