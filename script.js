const ul = document.getElementById("users"); // puncte in plus pentru ca ai tinut chestiile astea ca si constante :D
const url = "https://api.github.com/users";

// Apreciez ca ai folosit arrow functions, dar nu e neaparat mereu bine. Sa cauti principala diferenta dintre arrow functions si functii normale si sa mi scrii :D
const createNode = element => document.createElement(element);
const append = (parent, el) => parent.appendChild(el);

let userFetch = fetch(url) // poate fi const pentru ca nu modifici functia niciodata
  .then(response => response.json())
  .then(data => {
    console.log(data); // evita sa lasi console.log() in codul pe care mi-l trimiti, asta e o modalitate sa faci tu debug
    for (key in data) {
      let li = createNode("li");
      let img = createNode("img");
      let span = createNode("span");
      // span.className = "column";

      img.src = data[key].avatar_url;
      span.innerHTML = `${data[key].login}`;

      // append(span, img);
      // append(div, span);
      append(li, span);
      append(li, img);
      append(ul, li);
    }
  })
  .catch(error => {
    console.log(error);
  });


// Felicitari, ai gandit bine implementarea si codul e scris destul de clean, GJ