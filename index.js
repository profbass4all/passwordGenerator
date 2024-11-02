const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let len = document.getElementById('length')
let num = document.getElementById('numbers')
let upper = document.getElementById('uppercase')
let symbols = document.getElementById('symbols')
let lower = document.getElementById('lowercase')
let passwordEl1 = document.querySelector('.password1')
let passwordEl2 = document.querySelector('.password2')


let arr = [num, lower, symbols, upper]
let arr2 = [numbers, lowercase, specialCharacters, uppercase]

let password1= ''
let password2 = ''
function generatePassword(){
    password1 = ''
    password2 = ''
    if(!num.checked && !upper.checked && !lower.checked && !symbols.checked){
        alert("At least one of the following options should be selected: numbers, uppercase, lowercase, and symbols.")
        return
    }else if(len.value < 8 || len.value > 15){
        alert("length of password must be between 8 and 15")
    }
    
    else{
        passwordEl1.textContent = passwordMachine(password1)
        passwordEl2.textContent = passwordMachine(password2);
    }
    
}

function passwordMachine(password){
    for (let i = 0; i < arr.length; i++){

            if(arr[i].checked && password.length < len.value){
                let rand = Math.floor(Math.random() * arr2[i].length);

                password += arr2[i][rand];

            }
            if( i == arr.length - 1 && password.length < len.value){
                i = -1
            }
        
        }
                console.log('password',password);
        return password;
}
async function copyPassword(password){

    if(password == 'password1'){
        let passwordEl = document.querySelector('.password1').innerHTML

    try {
        if(!passwordEl) throw new Error ('Nothing found')
        await navigator.clipboard.writeText(passwordEl);

        console.log('Content copied to clipboard');
        alert("Copied the text: " + passwordEl);

    } catch (err) {

        console.error('Failed to copy: ', err);

    }
    }else if (password == 'password2'){
        let passwordEl = document.querySelector('.password2').innerHTML

    try {
        if(!passwordEl) throw new Error ('Nothing found')
        await navigator.clipboard.writeText(passwordEl);

        console.log('Content copied to clipboard');
        alert("Copied the text: " + passwordEl);

    } catch (err) {

        console.error('Failed to copy: ', err);

    }
    }
    

    
}
                