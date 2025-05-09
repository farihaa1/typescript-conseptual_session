function fn(input: string | number): number {
    let multi:number = 1;
    if(typeof input ==="number"){
       multi = input * 2;
    }
    return multi;
}
console.log(fn(4))