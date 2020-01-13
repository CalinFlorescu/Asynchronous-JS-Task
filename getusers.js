const containerDiv = document.getElementsByClassName("container")[0];

// Apreciez ca ai folosit arrow function, dar nu trebuie folosite mereu, exista o diferenta majora intre functiile normale si astea, te rog sa o cauti si sa mi dai mesaj cu ea :D
createDynamicList = list => {
    let listLength = list.length;

    if (listLength > 0) {
        let myList = document.createElement("div");
        myList.className = "oneRow";

        //Te poti folosi de functii din js gen forEach, e mai elegant putin
        for (let i = 0; i < listLength;) {
            let listItem = document.createElement("div");
            listItem.className = "userItem";

            let image = document.createElement("img");
            image.src = list[i].avatar_url;

            let paragraph = document.createElement("p");
            paragraph.innerText = "Username: " + list[i].login;

            listItem.appendChild(image);
            listItem.appendChild(paragraph);
            myList.appendChild(listItem);

            i++;

            if (i % 5 === 0) {
                containerDiv.appendChild(myList);
                myList = document.createElement("div");
                myList.className = "oneRow";
            }
        }

        containerDiv.appendChild(myList);
    } else {
        // Create a text node with the message
        let message = document.createTextNode("There are no users!");

        // Append the message to the container
        containerDiv.appendChild(message);
    }
};

getUsers = async() => {
    // Foloseste try catch in caz ca iti da eroare
    const response = await fetch("http://api.github.com/users");
    const myJson = await response.json();
    return myJson;
};

myFunction = async() => { // Da un nume sugestiv functiei
    const users = await getUsers();
    createDynamicList(users);
};

myFunction();

// Felicitari, per total o tema facuta bine