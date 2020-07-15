// Take two numbers, and add them
// Return the sum
function getSum(num1, num2) {
    return num1 + num2;
}


let mySum = function (num1: any, num2: any): number {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

console.log(mySum('3', 5));
console.log(getSum(1, 4));

function getName(firstName: string, lastName?: string): string {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + '' + lastName;
}
console.log(getName('John', 'Doe'));
console.log(getName('John'))
