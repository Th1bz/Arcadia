const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const signinBtn = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");

signinBtn.addEventListener("click", checkCredentials);

function checkCredentials() {
  let dataForm = new FormData(signinForm);
  
  let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
    
    "username": dataForm.get("email"),
    "password": dataForm.get("mdp")
});

let requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(apiUrl+"login", requestOptions)
.then(response => {
  if(response.ok){
    return response.json();
  } else {
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
})
.then(result => {
  console.log(result);
  console.log(result.user);
  sessionStorage.clear()
  sessionStorage.setItem('user', JSON.stringify(result.user));

  alert("Bienvenue");
  window.location.replace("/");
})
.catch(error => console.log('error', error));
}
