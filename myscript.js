const userName = prompt('Ciao! Come ti chiami?')
// quello che l'utente scriverà viene salvato dentro userName
console.log(userName) 
// stampo nella console cosa c'é dentro a userName per verificarne il contenuto

const userSurname = prompt('Qual é il tuo cognome?')
console.log(userSurname)

const userColor = prompt('Qual é il tuo colore preferito?')
console.log(userColor)


const HTMLsaluto = document.getElementById('saluto')  
// inizializzo una variabile prendendo const HTMLsaluto e prendo dall' html l'elemento con id saluto document.getElementById('saluto') 
// The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object.

HTMLsaluto.innerHTML += ' ' + userName + ' ' + userSurname
// Dico che l'elemento dell'html, che in JS ho salvato dentro HTMLsaluto.innerHTML, diventerá uguale alla concatenazione con gli input inseriti dall'user
// += scorciatoia per concatenare, altrimenti per eseteso sarebbe HTMLsaluto.innerHTML = HTMLsaluto.innerHTML + ' ' + userName OPPURE usando il backtip HTMLsaluto.innerHTML += ` ${userName}
// The innerHTML property sets or returns the HTML content (inner HTML) of an element

const HTMLcolore = document.getElementById('colore')

HTMLcolore.innerHTML += ` ${userColor}`

const HTMLpassword = document.getElementById('password')

HTMLpassword.innerHTML += ` ${userName+userSurname+userColor}`


