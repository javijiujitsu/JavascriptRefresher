// Create an array with five to todos
//you have x todos
// Print the first and second to last items -> Todo: walk the dog

// Delete the third item
// Add a new item onto the end 
// Remove the firt item from the list

// const todo = ['code', 'pay bills', ' do cardio', 'finish Javascript bootcamp', 'UI/UX course']

// 1. Convert array to array of objects -> (two properties) text , completed or not completed
// 2.  create function to remove a todo by text value

const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true 
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    
    if (index > -1) {
        todos.splice(index, 1)
    }
}


// create a function that uses filter that gets a list of completed todo = false

const getThingsToDo = function (todos) {
    return todos.filter(function (todo){
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b){
        if (!a.completed && b.completed ) {
            return -1
        } else if (!b.completed && a.completed ){
            return 1
        } else {
            return 0
        }     
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))
// deleteTodo(todos, 'do cardio')
// console.log(todos)






/*

todo.splice(2, 1)

todo.push('Get haircut')
todo.shift()
console.log(`You have ${todo.length} todos`)


// 1. the first item
//  2. the second item

// todo.forEach(function (todo, index) {
    // const num = index + 1
    // console.log(`${num}. ${todo}`)
// })

for (let count = 0; count < todo.length; count ++) {
    const num = count + 1
    console.log(`${num}. ${todo[count]}`)
 }
 

console.log(`First Todo: ${todo[0]}`)
console.log(`First Todo: ${todo[todo.length - 2]}`)

*/
