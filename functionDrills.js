
// Problem 1
function helloWorld() {
  console.log('Hello World!')
}
helloWorld()


// Problem 2
const jsNinja = () => {
  console.log('I am a Javascript ninja!') 
}
jsNinja()

// Problem 3
function printName(name) {
  console.log(name)
}
printName('Alex')

// Problem 4
function greeting(name) {
  name.toString()
  console.log(`Hello ${name}`)
}
greeting('Mehdi')

// Problem 5
const compareNums = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else if (num2 > num1) {
    return num2
  }
}
console.log(compareNums(2, 4))

// Problem 6
function add(arg1, arg2) {
  parseInt(arg1, arg2)
  return arg1 + arg2
}
const sum = add(1, 2)
console.log(sum)

// Problem 7
const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}
// expression (This is the syntax used)

// Problem 8
const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}
// arrow (This is the syntax used)

const exclaimThree = str => `${str.toUpperCase()} !!!`

// Problem 9
function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// Problem 10
function nameCheck(name) {

  if (name === 'Steven') {
    return `What's up ${name}`
  } else if (name === 'Bryan') {
    return `Hey ${name}`
  } else if (name) {
    return `Cool name, ${name}`
  }
  const nameGreeting = nameCheck('Bryan')
  console.log(nameGreeting)
}
nameCheck()


// Problem 11
function faveColorFinder(color) {
  faveColorFinder.toString()

  if (color === 'red') {
    return 'red id a great color';
  } else if (color === 'green') {
    return 'green is a solid favorite color';
  } else if (color === 'black') {
    return 'so trendy'
  } else if (color !== 'red' && color !== 'green' && color && 'black') {
    return 'you need to evaluate your favorite color choice'
  }
   
  const colorRating = faveColorFinder('blue')
  console.log(colorRating)
}

faveColorFinder()

// Problem 12
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']

function printAllNames(arr) {
  for (let i = 0;  i < arr.length; i++) {
    console.log(arr[i])
  }
}
printAllNames(namesArr)

// Problem 13
function thatsOdd(num) {
  if (num % 2 === 1) {
    return "That's not odd"
  } else if (num % 2 === 0) {
    return "That is odd indeed"
  }

  const oddChecker = thatsOdd(1)
  console.log(oddChecker)
}
thatsOdd()

// Problem 14
function bestMovie(movieTitle) {
  movieTitle = movieTitle.toString()
  return `${movieTitle} is the best movie ever`
}
console.log((bestMovie('Gatsby')))

// Problem 15
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]

function bigOrSmall(array) {
  const answers = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 100) {
      answers.push(`${array[i]} is Big`)
    } else if (array[i] <= 100)
      answers.push(`${array[i]} is Small`)
  }
  const arrayEvaluator = answers
  console.log(arrayEvaluator)
}
bigOrSmall(bigOrSmallArray)


// Problem 16
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/



////////////////// PROBLEM 17 ////////////////////
let sampleString = "Hi, my name is Kylo."
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

//CODE HERE


////////////////// PROBLEM 18 ////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/

////////////////// PROBLEM 19 ////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate frogs as possible with a certain amount of gold. Each chocolate frog costs 3 gold. Your function should take in a single parameter, which is the amount of gold you are willing to spend. Your function should return a total amount of chocolate frogs you were able to purchase.
  Create a variable called `totalFrogs` and set it equal to your function invoked, passing in the amount of gold you are willing to spend.
*/

//CODE HERE


////////////////// PROBLEM 20 ////////////////////
/*
  You might have noticed a slight bug in the previous problem. If you were to pass in 4 gold, the function would return to you 1.3333... However, you can't really go to a store and by 1.333 products. You would just be able to purchase 1 product. Re-write the function you used in the previous problem (give it the same name, just add a 2 to the end of it) that fixes this bug. Invoke the function and store the returned value to a variable called `totalFrogs2`.
*/

//CODE HERE


////////////////// PROBLEM 21 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, write logic to determine if the array is in ascending order. The function should return true, if it is sorted in ascending order, false if it is not. Create a variable, `arrayIsAscending` and set it equal to your function invoked. Use the sample array to test this function.
*/

//CODE HERE


////////////////// PROBLEM 22 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = []

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = []

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = []

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = []