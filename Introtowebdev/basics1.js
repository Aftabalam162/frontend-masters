// Block level scoping

/* It basically mean that as soon as the curly braces
occur the all the variable created inside the { } 
will just become undefined */

const abc = () => {
    if ( 2 == 2 ) {
        let thing = "aftab";
    }
    console.log(thing);
}

abc();


// built-ins

// substring - returns a part of the string (start, end, )
let str = "Hello world! This is a nice day";
console.log(str.substring(3, 5))

// .includes - returns boolean - to find if the text is
// in  the string or not

console.log(str.includes("ice"));

// Date.now() - returns the secs passed since Jan 1 1970

console.log(Date.now())

// difference between the Date.parse() and Date.UTC():
// 1. both return the diff btw Jan 1 1970 and specified date
// 2. but parse take string input while the UTC takes params

Date.parse("10 Dec, 2001"); Date.parse("2001-12-10T11:55:00.000Z");
Date.UTC(2001, 12, 10, 11, 55, 00, 00);