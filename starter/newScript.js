function reverseString(str) {
    let newString = ""
    for (let i = str.length - 1; i >= 0; i-- ){
        newString += str[i]
    }
    return newString;
}


function factorialize(num) {
    let fac = 1
   for (let i = fac; i <= num; i++){
       fac *= i
   }
    return fac;
}

function recursiveFactorial (num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * recursiveFactorial(num - 1);
}


