const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");
const apiUrl = "http://127.0.0.1:8000/";

signoutBtn.addEventListener("click", signout);

function getUser(){
    return sessionStorage.getItem('user');
}

function signout(){
    sessionStorage.clear();
    window.location.reload();
}

// function setToken(token){
//     setCookie(tokenCookieName, token, 7);
// }

// function getToken(){
//     return getCookie(tokenCookieName);
// }

// function setCookie(name,value,days) {
//     let expires = "";
//     if (days) {
//         let date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }

// function getCookie(name) {
//     let nameEQ = name + "=";
//     let ca = document.cookie.split(';');
//     for(const element of ca) {
//         let c = element;
//         while (c.startsWith(' ')) c = c.substring(1,c.length);
//         if (c.startsWith(nameEQ))
//             return c.substring(nameEQ.length,c.length);
//         }
//         return null;
// }

// function eraseCookie(name) {   
//     document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }

function isConnected(){
    return sessionStorage.getItem('user') !== null;
}


// disconnected, connected (1, vetérinaire ou employe)

function showAndHideElementsForRole(){
    const userConnected = isConnected();
    const user = getUser();
    console.log(user);
    let roleId;
    if (user) roleId = user.roleId;

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    allElementsToEdit.forEach((element) => {
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none")
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none")
                }
                break;
            case '1':
                if(!userConnected || roleId != "1"){
                    element.classList.add("d-none")
                }
                break;
            case '2':
                if(!userConnected || roleId != "2" && roleId != "1"){
                    element.classList.add("d-none")
                }
                break;
            case '3':
                if(!userConnected || roleId != "3" && roleId != "1"){
                    element.classList.add("d-none")
                }
                break;
        }
    })
}

// Sécurisation de la faille XSS ----------------------------

function sanitizeHtml(text){
    const tempHtml = document.createElement('div');
    tempHtml.textContent = text;
    return tempHtml.innerHTML;
  }

  // Récupération des information de l'utilisateur ------------------

function getInfosUser(){

    let myHeaders = new Headers();
    myHeaders.append("X-AUTH-TOKEN", getToken());
    
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    fetch(apiUrl+"account/me", requestOptions)
    .then(response =>{
      if(response.ok){
        return response.json();
      }
      else{
        console.log("Impossible de récupérer les informations utilisateur");
      }
    })
    .then(result => {
      return result;
  })
  .catch(error =>{
    console.error("erreur lors de la récupération des données utilisateur", error);
  });
  }