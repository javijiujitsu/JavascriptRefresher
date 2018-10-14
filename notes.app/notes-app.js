// DOM - Document Object Model 

// Query and remove 
// const p = document.querySelector('p')
// p.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*****'
    // p.remove()
})

// Add a new element - three step process - create element, give content, place it in the DOM

 const newParagraph = document.createElement('p')
 newParagraph.textContent ='This is a new element from JavaScript'
 document.querySelector('body').appendChild(newParagraph)