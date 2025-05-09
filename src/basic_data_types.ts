const str: string = "Fariha";

// ss bb u nn => string, symbol, bigInt, boolean, undefined, number, null
// non-primitive => array, objects.

let anyVar: number = 1;

let arr: number[] = [1, 2, 3]

type toObj ={
    name: string;
    age: number;
    education?: {
        institution: "University" | "College" | "Diploma"
    };

}

const obj: toObj = {
    name:"Fariha",
    age:21,
    education: {
        institution: "College" 
    }
}
const obj1: toObj = {
    name:"Fariha",
    age:21,
   
}

console.log(obj)