const test = QUnit.test;

QUnit.module('create list template');

function makeListTemplate() {
    const html = /*html*/`
        <li>
            <a href="/description.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a>
            <span>(1986)</span>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('list template', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <a href="/description.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a>
            <span>(1986)</span>
        </li>
    `;

    // act
    const result = makeListTemplate();
    // assert
    assert.htmlEqual(result, expected);
});