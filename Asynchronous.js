let usersRead  = 0;
// Per total ai facut o treaba foarte buna, felicitari. Sa te axezi pe partea de scriere a codului, vezi good practices si chestii de genul

const getUsers  = async (url) =>{
  try{
      let users = []; // poate fi const
      const response = await fetch(url);
      if(response.status !== 200)
          throw new Error(response.status);
      const json = await response.json();
      json.forEach(elem=> {users.push(elem)});
      return users;
  }  catch (e) {
      // Poti adauga un mesaj mai sugestiv de genul console.log(`getUsers error: ${e}`);
      console.log(e)
  }
};
let container = document.getElementById("toAdd");
const myFunction = async () => { // e mai ok sa dai un nume descriptiv functiei
    console.log(usersRead); // cand mai trimiti cod sa stergi te rog console log-urile
    let url = "https://api.github.com/users?since=" + usersRead.toString();
    console.log(url);

    // try catch in jurul call-ului chiar daca e functia de mai sus, o sa te ajute la debug ca iti dai seama mai repede de unde vine eroarea
    const users = await getUsers(url) ;

    for(let user of users){
        let li = document.createElement("div");
        li.className = "user";
        let toAdd = user.login;
        let a = document.createElement("a");
        a.href = user.html_url;
        a.text = "Profile :)";
        a.className = "link";
        a.target = "_blank";
        let img = new Image();
        img.src = user.avatar_url;
        img.width = 200;
        img.height = 200;
        img.style.margin = "10px";
        li.append(img);
        li.append(toAdd);
        li.append(a);
        container.append(li);
    }

};
// e ok si daca lasi fara then-ul ala
myFunction().then();

document.getElementById("next").addEventListener("click", ()=>{
   usersRead += 30;
   container.innerText = "";
    myFunction().then();
});


document.getElementById("prev").addEventListener("click", ()=>{
    usersRead -= 30;
    container.innerText = "";
    myFunction().then();
});
