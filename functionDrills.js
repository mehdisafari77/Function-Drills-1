
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
    } else if (array[i] <= 100) {
      answers.push(`${array[i]} is Small`)
    }
  }
  const arrayEvaluator = answers
  console.log(arrayEvaluator)
}
bigOrSmall(bigOrSmallArray)


// Problem 16
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'

function theEliminator(contestants, loser) {
  for (let i = 0; i < contestants.length; i++) {
    if (contestants[i] === loser) {
      contestants.splice(i, 1)
    }
  }
  return contestants
  // console.log(contestants) 
}

let updatedContestants = theEliminator(contestants, loser)

// Problem 17
let sampleString = "Hi, my name is Kylo."

function makeUppercase(str) {
  console.log(str.toUpperCase())
}

makeUppercase(sampleString)

// Problem 18
function emailCheck(email) {
  email = String(email).trim()

  if (email.includes('@')) {
    return 'email verified'
    // console.log('email verified')
  } else {
    return 'must provide a valid email address'
    // console.log('must provide a valid email address')
  }
}
emailCheck('test.gmail.com')

// Problem 19
function frogPurchaser(gold) {
  return gold / 3
  // console.log(gold / 3) 
}

let totalFrogs = frogPurchaser(100)

// Problem 20
function frogPurchaser2(gold) {
  if (gold % 3 === 0) {
    // console.log(gold / 3) 
    return gold / 3
  } else if ((gold - 1) % 3 === 0) {
    // console.log((gold - 1) / 3) 
    return (gold - 1) / 3
  } else {
    // console.log((gold - 2) / 3) 
    return (gold - 2) / 3
  }
}

let totalFrogs2 = frogPurchaser2(100)


// Problem 21
let sampleArray = [0,1,2,3,4,7,5,6,8,9]

function checkArrayAscending(arr) {
  let comparisonValue = arr[0]
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] <= comparisonValue) {
      return false
      // console.log('false')
    } else {
      comparisonValue = arr[i]
    }
  }
  return true
  // console.log('true')
}

let arrayIsAscending = checkArrayAscending(sampleArray)


// Problem 22
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

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"]

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "rubberDuck"]

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck"]

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "realDuck"]