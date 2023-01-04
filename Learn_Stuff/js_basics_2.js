const pers = {
    name: 'Anya',
    age: 19,
    isProgrammer: false,
    languages: ['ru','en'],
    ['key_' + (1+3)]: 'Computed Key',
    greet() {
        console.log('greet')
    },
    info() {
        console.log('this_',this)
        console.info('sadasdasdasdasd', this.name)
    }
}
// console.log(pers.name)
// console.log(pers['age'])
// console.log(pers)
// pers.greet()
// pers.age++
// pers.languages.push('by')
// delete pers['key_4']
// console.log(pers)

// const {name, age, languages} = pers
// console.log(name,age,languages)

// for (let key in pers) {
//     if (pers.hasOwnProperty(key)) {
//         console.log('key_', key )
//         console.log('value_', pers[key])
//     }
// }

const keys = Object.keys(pers)
console.log(keys)

const logger = {
    keys(obj) {
        console.log('obj_', Object.keys(obj))
    }
}

logger.keys(pers)

// pers.info()
//https://youtu.be/Bluxbh9CaQ0?t=13996