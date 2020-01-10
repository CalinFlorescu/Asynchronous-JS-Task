function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

const ul = document.getElementById('users');
const url = 'https://api.github.com/users';
const get = fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(users)
        for (i in data) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = data[i].avatar_url;
            span.innerText = `${data[i].login}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        }
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });