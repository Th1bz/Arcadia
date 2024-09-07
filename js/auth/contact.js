const nameClient = document.getElementById("nomClient");
const clientMail = document.getElementById("emailClient");
const clientMessage = document.getElementById("messageClient");
const btnSubmitMessage = document.getElementById("submitMessage");


nameClient.addEventListener("keyup", validateForm); 
clientMail.addEventListener("keyup", validateForm); 
clientMessage.addEventListener("keyup", validateForm); 

function validateForm(){
    const nomOk = validateRequired(nameClient);
    const mailOk = validateMail(clientMail);
    const messageOk = validateRequired(clientMessage);

    if(nomOk && mailOk && messageOk){
        btnSubmitMessage.disabled = false;
    }else{
        btnSubmitMessage.disabled = true;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true; 
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}