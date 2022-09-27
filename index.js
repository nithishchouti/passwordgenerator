const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{"," ","}","]",",","|",":",";","<",">",".","?","/"];

let password_1=document.getElementById("password1")
let password_2=document.getElementById("password2")

function generatepassword(){
    for(let i = 0; i < 15; i++){
        let random1=Math.floor(Math.random()*90+1)
        password_1.textContent+=characters[random1]
    }
    for(let i = 0; i < 15; i++){
        let random2=Math.floor(Math.random()*90+1)
        password_2.textContent+=characters[random2]
    }
}

function reset(){
    password_1.textContent=""
    password_2.textContent=""
}