var form = document.querySelector("#form")

// form.addEventListener("submit",loginFun())
//  function loginFun(){
//      event.preventDefault();

//      console.log("in");
//  }
var LSuserdata= JSON.parse(localStorage.getItem("LSuserdata")) || [];
function loginFun(){
    event.preventDefault();
    
        //  **************values*****
            // var name= document.querySelector("#name").value
            var email= document.querySelector("#email").value
            var password= document.querySelector("#password").value
            var flag=false
            LSuserdata.forEach(function(elem){
                
                if(elem.user_email == email && elem.user_password == password){
                    flag = true
                    
                }
            })
        if(flag==true){
            alert("Successfully login")
            window.location.href="index.html"
        }else{
            alert("Please enter valid ID and password")
        }

        
       
    
}