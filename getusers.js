const containerDiv = document.getElementById("container");

function createDynamicList(list) {
  if (list.length > 0) {
    let myList = document.createElement("div");
    myList.className = "oneRow";
    let counter = 0;

    list.forEach((element, index) => {
      let listItem = document.createElement("div");
      listItem.className = "userItem";

      let image = document.createElement("img");
      image.src = element.avatar_url;

      let paragraph = document.createElement("p");
      paragraph.innerText = "Username: " + element.login;

      listItem.appendChild(image);
      listItem.appendChild(paragraph);
      myList.appendChild(listItem);
      counter = index + 1;
      if (counter % 5 === 0 && counter !== 0) {
        containerDiv.appendChild(myList);
        myList = document.createElement("div");
        myList.className = "oneRow";
      }
    });
    containerDiv.appendChild(myList);
  } else {
    // Create a text node with the message
    let message = document.createTextNode("There are no users!");

    // Append the message to the container
    containerDiv.appendChild(message);
  }
}

async function getUsers() {
  const response = await fetch("http://api.github.com/users")
    .then(function(users) {
      return users;
    })
    .catch(function(e) {
      console.log("error in fetch: " + e.message);
    });
  const myJson = await response.json();
  return myJson;
}

async function initFunction() {
  const users = await getUsers();
  createDynamicList(users);
}

initFunction();
