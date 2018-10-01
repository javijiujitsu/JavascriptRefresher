// common methods for manipulating an array 
// const notes  = ['Note 1','Note 2', 'Note 3' ]

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]



const sortNotes = function (notes) {
    notes.sort(function (a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }     
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// Will always return an array 

const findnotes = function (notes, query) {
    return notes.filter(function (note, index){
        const isTitleMatch =   note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    }) 
}

sortNotes(notes)
console.log(notes)



// console.log(findnotes(notes, 'work'))

// const findNote = function (notes, noteTitle) {
    // const index = notes.findIndex(function (note, index) {
        // return note.title.toLowerCase() === noteTitle.toLowerCase()
    // })
    // return notes[index]
// }

// const note = findNote(notes, 'Office modification')
//   console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
    // console.log(note)
    // return note.title === 'Habbits to work on'
// })

// console.log(index)


// Counting... 1 

// for (let count = 0; count <= 2; count ++ ){
    // console.log(count)
// }

// for (let count = 0; count <= notes.length; count ++) {
//    console.log(notes[count])

// }

// console.log(notes.indexOf('Note 2'))


// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// console.log(notes.unshift('My first note'))

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is the new note 3'


// notes.forEach(function (item, index) {
    // console.log(index)
    // console.log(item)
// })