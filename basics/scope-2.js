
// let name = 'Andrew'

if (true) {
  //  let name = 'Mike'
    
     if (true) {
         let name = 'Jen' // Leaked Global
        console.log(name)
    }
}

if (true) {
    console.log (name)

}

