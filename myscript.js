let userName = prompt('Ciao! Qual é il tuo nome?')
// quello che l'utente scriverà viene salvato dentro userName
console.log(userName) 
// stampo nella console cosa c'é dentro a userName per verificarne il contenuto

let userSurname = prompt('Qual é il tuo cognome?')
console.log(userSurname)

let userColor = prompt('Qual é il tuo colore preferito?')
console.log(userColor)


let HTMLsaluto = document.getElementById('saluto')  
// Inizializzo la variabile let HTMLsaluto assegnadole l'elemento HTML che ha come id 'saluto' 
// The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object.

HTMLsaluto.innerHTML += ' ' + userName + ' ' + userSurname
// Dico che l'elemento dell'html, che in JS ho salvato dentro HTMLsaluto.innerHTML, diventerá uguale alla concatenazione con gli input inseriti dall'user
// += scorciatoia per concatenare, altrimenti per eseteso sarebbe HTMLsaluto.innerHTML = HTMLsaluto.innerHTML + ' ' + userName OPPURE usando il backtip HTMLsaluto.innerHTML += ` ${userName}
// The innerHTML property sets or returns the HTML content (inner HTML) of an element

let HTMLcolore = document.getElementById('colore')

HTMLcolore.innerHTML += ` ${userColor}`

let HTMLpassword = document.getElementById('password')

HTMLpassword.innerHTML += ` ${userName}${userSurname}${userColor}27`

