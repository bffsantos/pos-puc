// Exercício 01
console.log('Hello World!!!')

// Exercício 02
function avaliaParidade(limiteSuperior){
    for(let i=0; i<limiteSuperior; i++){
        if(i%2 == 0)
            console.log(i+ ": é par")
        else
            console.log(i+ ": é ímpar")
    }
}

avaliaParidade(10)

// Exercício 3
var mySet = new Set()

mySet.add(0)
console.log(mySet)
console.log("========")

mySet.add(1)
console.log(mySet)
console.log("========")

mySet.add(1)
console.log(mySet)
console.log("========")

mySet.add(2)
console.log(mySet)
console.log("========")

mySet.add(3)
console.log(mySet)
console.log("========")

mySet.add(2)
console.log(mySet)
console.log("========")