const bye = 'ok, bye';
let isValid = true;

const userMessage = prompt('enter hello world');
if (userMessage === null) {
    alert(bye);
    isValid = false;
}
else if(userMessage !== 'hello world'){
    alert('you need to put hello world');
    isValid = false;
}


const userToRemoveLetters = prompt('enter letters that will be deleted');
if (userToRemoveLetters === null) {
    alert(bye);
    isValid = false;
}
else if (!/^[a-zA-Z]+$/.test(userToRemoveLetters)){
    alert('these letters are not in the phrase');
    isValid = false;
}
else {
    const toRemove = userToRemoveLetters.split(''); 
    // розбиває на символи і зберігає в змінній букви які потім в функції видаляться
function putMessage (message){
let result = message
.split('') // символи
.filter(char => !toRemove.includes(char)) // перевіряє кожен символ якщо збігається виключає його
.join(''); // знову на рядок
alert('in ' + result + ' was deleted ' + userToRemoveLetters + ' letter/letters');
}

if (isValid) { // якщо данні неправильні функція не виконається
putMessage(userMessage); // оголошує функцію
}
}