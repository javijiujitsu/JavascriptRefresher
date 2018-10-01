//  student score, total possible score  generate the letter grade and percentage the student got
// 15/20 -> You got a C (75%)!

// call function passing student score and total score and print it on the screen


const gradeCalc = function(score, totalScore){
    const percent = (score / totalScore) * 100
    let letterGrade = ''
    
    if (percent   >= 90 ){
        letterGrade = 'A'
       
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%)!`
 }

const result = gradeCalc (15 , 20)
console.log(result)