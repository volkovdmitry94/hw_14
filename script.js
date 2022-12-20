// Task 1
const palindromeInput = document.getElementById('palindrome_input');
const palindromeResult = document.getElementById('palindrome_res');

function checkPalindrome(){
    const inputValue = palindromeInput.value;

    if (!inputValue) {
        alert('Empty input!');
        return;
    }

    const result = isPalindrome(inputValue);
    palindromeResult.textContent = String(result);
}

function isPalindrome(str){
    const strToLowerCase = str.toLowerCase();
    const amountOfIterations = Math.trunc(strToLowerCase.length / 2);

    for (let i = 0; i < amountOfIterations; i++) {
        if (strToLowerCase[i] !== strToLowerCase[strToLowerCase.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


// Task 2
const reverseInput = document.getElementById('reverse_input');
const reverseResult = document.getElementById('reverse_result');

function reverseString(){
    const inputValue = reverseInput.value;

    if (!inputValue) {
        alert('Empty input!');
        return;
    }

    const result = reverse(inputValue);
    reverseResult.textContent = String(result);
}

function reverse(str){
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    return reverseArray.join("");
}


// Task 3
const countCharStringInput = document.getElementById('string_value');
const countCharCharInput = document.getElementById('character_value');
const countCharResult = document.getElementById('res_calc');

function getCount(){
    const stringValue = countCharStringInput.value;
    const charValue = countCharCharInput.value;

    if (!stringValue || !charValue) {
        alert('Empty input!');
        return;
    }

    const result = countChar(stringValue, charValue);
    countCharResult.textContent = String(result);
}

function countChar(str, c) {  // to count characters
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === c) {
            counter++;
        }
    }

    return counter;
}

function countCharAndSubstr(str, c) { // to count characters and substrings
    let counter = 0;
    let position = 0;

    while (true) {
        let foundPosition = str.indexOf(c, position);
        if (foundPosition === -1) break;
        counter++;
        position = foundPosition + 1;
    }

    return counter;
}

