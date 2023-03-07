

document.addEventListener("DOMContentLoaded", function(){
   
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    
    let errorMessage = document.querySelector("#error-message");
    
    let button = document.querySelector(".btn-green");
        
        console.log("hi");
    
        if(password === "" && confirmPassword === "") {
            errorMessage.innerHTML = "Empty"
        }
        else if(password === confirmPassword) {
            errorMessage.innerHTML = "Error";
        }
    
    });
    
    
    
    
    
    
    