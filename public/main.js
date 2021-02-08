function main() {
  const numberOfCupsOfCoffee = 2

  const fullName = 'Corey Hall'
  console.log(
    `My name is ${fullName} and I have had ${numberOfCupsOfCoffee} cups of coffee today!`
  )
  const aboutMe = {
    favoriteMovie: ['Rush Hour 2', 'Avengers: Endgame', 'Star Wars: Episode 5'],
    luckyNumber: 4,
  }
  console.log(
    `Here is a list of my my favorite movies: ${aboutMe.favoriteMovie}. Also, my lucky number is ${aboutMe.luckyNumber}.`
  )
  const userName = window.prompt('What is your name?')
  console.log(`Hello, ${userName}! Nice to meet you.`)

  let firstOperand = parseFloat(window.prompt('Enter a number please'))
  let secondOperand = parseFloat(window.prompt('Enter second number'))
  console.log(
    `${userName} your first number is ${firstOperand} and your second number is ${secondOperand}.`
  )
  let sum = firstOperand + secondOperand
  console.log(
    `${userName} you take ${firstOperand} plus ${secondOperand} you'll get the sum of ${sum}.`
  )

  let difference = firstOperand - secondOperand
  console.log(
    `Now if you subtract ${secondOperand} from ${firstOperand} you should get the difference of ${difference}.`
  )

  let product = firstOperand * secondOperand
  console.log(
    `Let us get funky, ${userName}. How about we take your first number of ${firstOperand} and multiply it by the second number, ${secondOperand}, and the product should be ${product}.`
  )
  let quotient = firstOperand / secondOperand
  console.log(
    `If you divide your first number by your second number, that will equal ${quotient}.`
  )
  let remainder = firstOperand % secondOperand
  console.log(
    `Now ${userName} the remainder of your two numbers should be ${remainder}.`
  )

  let numbers = [
    60,
    9,
    45,
    9,
    94,
    63,
    16,
    51,
    92,
    94,
    61,
    56,
    83,
    29,
    72,
    22,
    88,
    12,
    64,
    90,
    79,
    8,
    80,
    40,
    93,
    90,
    97,
    10,
    61,
    6,
    54,
    83,
    99,
    71,
    51,
    70,
    78,
    44,
    52,
    66,
    52,
    51,
    14,
    55,
    52,
    38,
    37,
    90,
    92,
    19,
    56,
    72,
    33,
    63,
    47,
    90,
    49,
    85,
    21,
    28,
    37,
    39,
    40,
    4,
    19,
    88,
    47,
    6,
    60,
    84,
    59,
    80,
    22,
    95,
    37,
    19,
    4,
    78,
    48,
    22,
    71,
    33,
    64,
    74,
    27,
    91,
    73,
    46,
    47,
    7,
    26,
    38,
    89,
    68,
    18,
    36,
    9,
    94,
    8,
    8,
  ]
  let smallest = numbers[0]
  let largest = numbers[0]
  let total = 0
  let count = 0
  let countOfEven = 0
  let sumOfOdd = 0
  for (let index = 0; index < numbers.length; index++) {
    if (smallest > numbers[index]) smallest = numbers[index]

    if (largest < numbers[index]) largest = numbers[index]

    // sumOfOdd = numbers.filter((a, index) => index % 2 === 1)
    // countOfEven = numbers.filter(( index) => index % 2 === 0)
    total += numbers[index]
    count++
  }
  let statistics = {
    min: smallest,
    max: largest,
    sum: total,
    avg: total / count,
  }
  console.log(statistics)
  // let largest
  // console.log(Math.max(`The largest number in the list is ${largest}.`))
}

document.addEventListener('DOMContentLoaded', main)
