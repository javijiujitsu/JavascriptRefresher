    let name = '   Javier Buitrago' 

    // Length property

    console.log(name.length)


// Convert to upper case

console.log(name.toUpperCase())

// convert to lower case

console.log(name.toLowerCase())

// Iclude method

let password = 'avc123asdf098';
console.log(password.includes('password'))

// Trim

console.log(name.trim())

// challenge area

// isvalidPassword
//  return is password is valid and false if otherwise
// length is more than 8 - and it doesn't contain the word password.

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
      return true 
    } else {
        return false 
    }
}



console.log(isValidPassword('asdfop'))
console.log(isValidPassword('abc123!@$%[&'))
console.log(isValidPassword('asdfpoipassword'))
