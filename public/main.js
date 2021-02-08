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

  //down below is an example for the smallest number
  // let numbers = []
  // let smallest
  // for (let index = 0; index < numberOfCupsOfCoffee.length; index++){
  //   if(smallest > variable[index])
  //   smallest = variable[index]
  // }
  // console.log(smallest);
}

document.addEventListener('DOMContentLoaded', main)
