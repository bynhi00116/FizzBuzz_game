// var count = (function() {
//     var counter =0;
//     return function() {return counter += 1;}
// })();
// function countClicks(){
//     document.getElementById("output").innerHTML = count();
// }
let curVal = 0;
let username = '';

function login() {
    const username = document.getElementById('username-input').value;
    if (username) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('welcome-container').style.display = 'flex';
        document.getElementById('user-display').textContent = username;
    }
}

function FizzBuzz() {
    const output = document.getElementById('FizzBuzz-output');
    curVal++;
    output.innerHTML = ''; 
    
    for (let i = 0; i <= curVal; i++) {
        let result = '';
        if (i!== 0){
            if (i % 3 === 0) 
                result += 'Fizz';
            if (i % 5 === 0) 
                result += 'Buzz';
        }
        if (result ==='') 
            result = i.toString(); 
        output.innerHTML = result + ' ';
    }
}

document.getElementById('increment-button').addEventListener('click', () => {
    FizzBuzz();
});

document.getElementById('user-display').textContent = username;
FizzBuzz();

