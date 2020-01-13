function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

// Apreciez ca ai facut constante din astea doua elemente
const ul = document.getElementById('users');
const url = 'https://api.github.com/users';

const get = fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(users) // Nu mai pune console.log() in temele pe care le trimiti, asta e o modalitate de a face tu debug
        // Poti folosit forEach, functie din js
        for (i in data) {
            // Prefer sa faci cate un let pentru fiecare
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

// Felicitari, per total e o tema buna :D