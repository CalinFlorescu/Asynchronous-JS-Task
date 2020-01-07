const ul = document.getElementById("users");
const url = "https://api.github.com/users";

const createNode = element => document.createElement(element);
const append = (parent, el) => parent.appendChild(el);

let userFetch = fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
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
