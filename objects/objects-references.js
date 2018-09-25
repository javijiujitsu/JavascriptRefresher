let myAccount = {
    name: 'Javier',
    expenses: 0,
    income: 0,
}


let addExpense = function (account, amount) {
account.expenses = account.expenses + amount
   
}

let addIncome = function (account, income) {
account.income = account.income + income
}

let   resetAccount = function (account){
    account.expenses = 0
    account.income = 0

}

let getAccountSummary = function (account){
   let balance = account.income - account.expenses
   return `Account for ${account.name} has ${balance}. $${account.expenses} in income. $${account.expenses} in expenses`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

// Instructions 

// 1. addIncome   - is going to take the account to manipulate ("which account we are trying to take income for") and 
// also going to take the amount we are going to add

// 2. resetAccount -  is going to reset expenses and the income for an account to zero ("needs to know which account to change, this the argument")

// 3. getAccountSummary - print a summary of the account, includes account balance and total expenses and income 
// Ex. for Andrew has $900. $1000 in income. $100 in expenses

//retutrn the string as the return value fot get getAccountSummary and then when  you use it print out console.log

//addIncome
//addExpense
//addExpense
// get accountSummary
// resetAccount
// getAccountSummary






