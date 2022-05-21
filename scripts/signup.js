var form = document.querySelector("#form")
form.addEventListener("submit",signupFun)
var userdata= JSON.parse(localStorage.getItem("LSuserdata")) || [];
function signupFun(){
  
    event.preventDefault();
   // console.log("inn");
        //  **************values*****
            var name= document.querySelector("#name").value
            var contact = document.querySelector("#contact").value
            var email= document.querySelector("#email").value
            var password= document.querySelector("#password").value
            if(email== "" && password== ""){
                alert("please enter email and password for creating account!")
            }
            // else if(userdata.forEach(function(elem){
            //     if(elem.user_email == email){
            //         alert("email already registerd")
                    
            //     } 
            // }));
            else{
                var userdataobj={
                            user_name: name,
                            user_contact: contact,
                            user_email:email,
                            user_password:password
                      };

       userdata.push(userdataobj);
       localStorage.setItem("LSuserdata",JSON.stringify(userdata))
       alert("Account successsfully created")
       window.location.href="login.html"
            }
        }