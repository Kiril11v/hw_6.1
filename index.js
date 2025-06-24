const bye = 'ok, bye';
let isValid = true;

const userMessage = prompt('write some words'); // validation
if (userMessage === null) {
    alert(bye);
}
else if(!/^[a-zA-Z\s]+$/.test(userMessage)){
    alert('you can put only letters');
}
else if(!userMessage.trim()){
    alert('nothing is entered');
}

else {
const userToRemoveLetters = prompt('enter letters that will be deleted');
if (userToRemoveLetters === null) {
    alert(bye);
    isValid = false;
}
else if (!/^[a-zA-Z]+$/.test(userToRemoveLetters.trim())){
    alert('there are not letters');
    isValid = false;
}
else {
    const toRemove = userToRemoveLetters.split(''); 

    const found = toRemove.some(letter => userMessage.includes(letter));
    // some перевіряє чи є такі букви в слові
    if (!found) {
        alert('these letters are not in the phrase');
        isValid = false;
    }

function putMessage (message, toRemove){ // delete letters in the words
return message.split('').filter(char => !toRemove.includes(char)).join('');
}

if (isValid) {
const result = putMessage(userMessage, toRemove);
alert('in ' + result + ' was deleted ' + userToRemoveLetters + ' letter(s)');
}
}
}