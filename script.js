const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

confirmPassword.addEventListener("input",()=>{
    if(password.value === confirmPassword.value){
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
    }else{
        password.classList.add("error");
        confirmPassword.classList.add("error");
    }

});