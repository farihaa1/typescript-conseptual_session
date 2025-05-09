let user = {
    name2: "fariha",
    age: 22
}

let user2 = {
    id: 1,
    ...user,
    address: "Dhaka"
}

// console.log(user2)

const number: number[] = [1, 2, 3, 4, 5];
const numbers2: number[] = [2, ...number, 7, 8];
// console.log(numbers2[3])


// rest-operator
function fun(...num: number[]): void {
    console.log(num)
}

// fun(1, 2, 3, 4)

// destructuring
const { name2, age } = user2;

console.log(name2, age)