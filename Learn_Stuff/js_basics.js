// alert(1)
// переменные
// const age = 26
// console.log('Age:' + age + ', tu lox')
// const currentYear = 2022
// const birthYear = 2003
// const age = currentYear - birthYear
// console.log(age)

// let cur = 20
// const a = 10
// const b = 5 
// cur = cur + a
// console.log(a+b, a-b, a*b, a/b)
// console.log(cur++, cur, ++cur, --cur)
// console.log(cur)

// const cur = true 
// const name = 'cur'
// const age = 19 
// console.log(typeof cur, typeof name, typeof age)

// const a = 26
// const b = 1993
// const c = 2020
// const abc = c - b >= a 
// console.log(abc)

// const courseStatus = 'pending' //ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('ready')
// }
// else if (courseStatus === 'pending'){
//     console.log('pending')
// } 
// else { 
//     console.log('false')
// } 

// const a = 42 
// const b = '42'
// console.log (a == b)
// console.log (a === b)

//-------------Тернарное выражение-----------------------------
// const a = false
// // if (a === true ) {
// //     console.log('done')
// // } else {
// //     console.log ('no')
// // }
// a ? console.log('done'): console.log('no')
//------------------------------------------

//--------------Булевая логика----------------------------------

// function calculate(year) {
//     return 2020 - year
// }
// const b = calculate(1993)
// console.log(b)
//----------------------------------------
// function logInfoAbout(name,year) {
//     const age = calculate(year)
//     if (age > 0 ) {
//         console.log('qqqq' + name + 'nnnnn' + age)
//     } else {
//         console.log('Tu cho blyat')
//     }

// }
// logInfoAbout('AAAAAAAAA','1111')
// logInfoAbout('AAAAAAAAA','9999')

//----------------------------------------

// const cars = ['Qwerty', 'Poiuy', 'Asdfg']

// // console.log(cars [1])
// // console.log(cars. length)
// // cars[1] = 'idi'
// // console.log(cars)
// // cars[cars. length] = 'ssss'
// // console.log(cars)

// // for (let i = 0; i < cars.length; i++){
// //     const car = cars [i]
// //     console.log(car)
// // }

// for (let car of cars) {
//     console.log(car)
// }

//-----------------------------------------
// const person = {
//     a: 'aaa',
//     b: 'bbb',
//     c: 33,
//     w: ['w','ww','www'],
//     r: false,
//     g: function() {
//         console.log('ggg')
//     }
// }
// console.log(person.a)
// console.log(person['b'])
// person.r = true
// console.log(person.r)
// person.g()
// person.isprog = true 
// console.log(person)

//-----------------NUMBERS------------------------

// const num = 42 //integer
// const float = 42.42 //float
// const pow = 10e3

// console.log(Math.pow(2,53)-1)
// console.log( Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE, Number.MIN_VALUE )
// console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)

// console.log(Number.NaN)
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))

// const stringIng = '42' 
// const stringFloat = '42.42'
// console.log( Number.parseInt(stringIng) + 2)
// console.log( Number(stringIng) + 2)
// console.log( +stringIng + 2)

// console.log( Number.parseInt(stringFloat) + 2)
// console.log( parseFloat(stringFloat) + 2)
// console.log( +stringFloat + 2)

// console.log(0.4 + 0.2)
// console.log((2/5)+(1/5))
// console.log((0.4 + 0.2).toFixed(1))


//--------------------------BigInt https://youtu.be/Bluxbh9CaQ0?t=7657
//---------Math-------------------


// console.log(Math.sqrt(25) ) // корень
// console.log(Math.pow(25, 2) ) // возвести в квадрат
// console.log(Math.abs(-25) ) // модуль
// console.log(Math.max(2,536,8126,1,31234,1241782)) // макс
// console.log(Math.min(2,536,8126,1,31234,1241782)) // мин
// console.log(Math.floor(4.9)) // округление в меньш
// console.log(Math.ceil(4.4)) // округление в больш
// console.log(Math.trunc(4.4)) // округление в больш

// console.log(Math.round(0.9));
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Math.round(20.49); // 20
// Math.round(20.5); // 21
// console.log(Math.trunc(13.37));
// console.log(Math.trunc(42.84));
// console.log(Math.trunc(0.123));
// console.log(Math.trunc(-0.123));



//-----------

// function getRandomBetween (min, max) {
//     return Math.floor( Math.random() * (max - min + 1) + min )
// }
// console.log(getRandomBetween(10, 25))

//---------------------------

// const name = 'Asdq'
// const age = 14
// function getAge() {
//     return age
// }
// const output = 'sdwdsasdasdasd' + name + 'asdasda:' + age 
// const output = `sdsdfsd, ${name} sadasdasd ${age <20 ? 'F' : 'b'}`
// console.log(output)
// console.log(name.lenght)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('sd'))
// console.log(name.repeat(3))

// const string = '       pssw        '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

//--------------------------
// function logPerson(s, name, age) {
//     if (age<0) {
//         age = 'qqqqqq'
//     } 
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
// const personName = 'asdas'
// const personAge = 24
// const output = logPerson `Name: ${personName}, Age: ${personAge}`

// console.log(output)
//--------------------FUNCTIONS------DECLARATION

// function greet(name) {
//     console.log('Hi, ', name)
// }
// //function expression
// const greet2 = function greet2(name) {
//     console.log('sdawsd, ', name)
// }
// greet('дддд')
// greet2('dddd')

//------------anonim func
// let counter = 0
// const interval = setInterval(function(){
//     if (counter===5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// },1000)
//---------------------Стрелочные функции
function greet(name) {
    console.log('sdsdf,', name )
}
const arrow = (name, age) => {
    console.log('dasdasd,', name) 
}
const arrow2 = name => console.log('sdasd', name)
arrow2('name')

//https://youtu.be/Bluxbh9CaQ0?t=10485


const pow2 = num => {
    return num ** 2
}
console.log(pow2(5))

//параметры по умолчанию

// const sum = (a,b) => a + b 
const sum = (a = 40 ,b = a * 2 ) => a + b 
console.log(sum())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}
const res = sumAll(1,2,50,336,3)
console.log(res)
//замыкание

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('AAAAA')
console.log(logWithLastName('BBBB'))
//массивы


const cars = ['qqq', 'www', 'ccc', 'ooo']
console.log(cars.includes('qqq'))
const pple = [
    {name: 'Qwerty', budget: 250 },
    {name: 'Asdfg', budget: 345 },
    {name: 'Zxcvb', budget: 789 }
]
const allBudget = pple
    .filter(person => person.budget >200)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)
//---
const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})
console.log(upperCaseCars)

//--------------------------------------
const fib = [1,1, 2, 3, 5, 8, 13 ]
// const pow2Fib = fib.map(num => num**2)
//---
const sqrt = num => Math.sqrt(num)
const pow2B = num => num ** 2
const pow2Fib = fib.map(pow2B)//.map(sqrt)
const filteredNumbers = pow2Fib.filter(num => {
    return num > 20
})
console.log(pow2Fib)
console.log(filteredNumbers)
//--------------------------------------
// function addItemToEnd() {

// }
//Method
// cars.push('sssss')
// cars.unshift('czxczxc')
// const firstItem = cars.shift()
// const lastItem = cars.pop()
// console.log(cars)
// console.log(firstItem)
// console.log(lastItem)

// console.log(cars.reverse())

//_1
// const text = 'Qwerty idu Ndha'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

//_2 changing
// const index = cars.indexOf('ooo')
// const index = pple.findIndex(function(person) {
//     return person.budget === 345
// })
// const person = pple.find(function(person) {
//     return person.budget === 345
// })
//-----------------------
let findedPerson
for(const person of pple) {
    // console.log(person)
    if (person.budget === 345) {
        findedPerson = person
    } //https://youtu.be/Bluxbh9CaQ0?t=12344
} 
// console.log(findedPerson)
// => уменьшение 
const person = pple.find(person => person.budget === 345)
// console.log(person)

// cars[index] = 'CHANGE'
// ----------------------Objects




















