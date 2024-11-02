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
let passwordEl = document.querySelector('.password')
let passwordEl1 = document.querySelector('.password1')


let arr = [num, lower, symbols, upper]
let arr2 = [numbers, lowercase, specialCharacters, uppercase]

let password = ''

function generatePassword(){
    password = ''
    if(!num.checked && !upper.checked && !lower.checked && !symbols.checked){
        alert("At least one of the following options should be selected: numbers, uppercase, lowercase, and symbols.")
        return
    }else if(len.value < 8 || len.value > 15){
        alert("length of password must be between 8 and 15")
    }
    
    else{
        for (let i = 0; i < arr.length; i++){

            if(arr[i].checked && password.length < len.value){
                let rand = Math.floor(Math.random() * arr2[i].length);

                password += arr2[i][rand];
            }
            if( i == arr.length - 1 && password.length < len.value){
                i = -1
            }
        
        }
    }
    passwordEl.textContent = password
    passwordEl1.textContent = password
}



async function copyPassword(){
    let passwordEl = document.querySelector('.password').innerHTML

    try {
        if(!passwordEl) throw new Error ('Nothing found')
        await navigator.clipboard.writeText(passwordEl);

        console.log('Content copied to clipboard');
        alert("Copied the text: " + password);

    } catch (err) {

        console.error('Failed to copy: ', err);

    }

    
}
                