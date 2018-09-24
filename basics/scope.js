// Lexical Scope (Static Scope)
//Globa Scope - Defined outside of all code blocks 
// Local Scope - Defned inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestors

// Global scope ( varOne) 
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // local Scope (varThree)

let varOne = 'varONe'


if (true){
   console.log(varOne)
   let varTwo = 'varTwo'
   console.log(varTwo)

    if (true) {
        let varfour = 'varFour'
    }
}
if (true){
    let varThree = 'varThree'
}

console.log(varTwo)
