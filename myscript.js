const userName = prompt('Ciao! Come ti chiami?')
//  quello che l'utente scriverà viene salvato dentro userName
console.log(userName)

const userSurname = prompt('Qual é il tuo cognome?')
console.log(userSurname)

const HTMLsaluto = document.getElementById('saluto')  
// prendo da html l'elemento con id saluto 
// The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object.

HTMLsaluto.innerHTML += ' ' + userName + ' ' + userSurname
// += scorciatoia per concatenare, altrimenti per eseteso sarebbe HTMLsaluto.innerHTML = HTMLsaluto.innerHTML + ' ' + userName OPPURE usando il backtip HTMLsaluto.innerHTML += ` ${userName}
// The innerHTML property sets or returns the HTML content (inner HTML) of an element

