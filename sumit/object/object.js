function parent() {
    const a = 5;
    return function child() {
        console.log(5); // child closes over the variable 'a'; 
    }
}

const result = parent();

console.log(result());
// console.log(parent());