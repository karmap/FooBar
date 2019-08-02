/*
* Returns the same number or:
* "Foo" if is divisible by 3
* "Bar" if is divisible by 5
* "FooBar" if is divisible by 3 and 5
*
* Restrictoin: no "if" sentences allowed
*/
function fooBarByNumber(number) {
    let resultObject = {};

    // Assign the number to index 0
    resultObject[0] = number;

    // Try modulus operator to assing the string
    // using the remainder as index
    resultObject[number%3] = 'Foo';
    resultObject[number%5] = 'Bar';
    resultObject[number%15] = 'FooBar';

    // Return the value of index 0
    return resultObject[0];
}

/*
* Prints Foo/Bar from 1 to 100 
*/
function fooBarPrintAll() {
    // Just make a for loop calling the function
    for(let i=1;i<=100;i++){
        console.log( fooBarByNumber(i) );
    } 
}

// Printing 1 to 100 results
fooBarPrintAll();

// Make some testing
console.log();

// 3 should be Foo
console.log(fooBarByNumber(3) == 'Foo');

// 5 should be Bar
console.log(fooBarByNumber(5) == 'Bar');

// 13 should be 13
console.log(fooBarByNumber(13) == '13');

// 15 Should be FooBar
console.log(fooBarByNumber(15) == 'FooBar');

// 30 Should be FooBar
console.log(fooBarByNumber(30) == 'FooBar');

// 65 Should be Bar
console.log(fooBarByNumber(65) == 'Bar');

// 80 Should be Bar
console.log(fooBarByNumber(80) == 'Bar');

// 97 should be 97
console.log(fooBarByNumber(97) == '97');

// 99 Should be Foo
console.log(fooBarByNumber(99) == 'Foo');
