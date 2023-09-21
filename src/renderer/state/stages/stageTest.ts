// const message:string = "hello world! \n";
// console.log(message);

// let x = 6, y = 9;

// let z = Math.round(x/y);
// let xz = Math.floor(x/y);
// let zat = x/y;

// let a = 3, b = 4;

// let c = Math.round(a/b);
// let ac = Math.floor(a/b);
// let cee = a/b;

// console.log(z, "using Math.round, or", xz, "using Math.floor, or", zat);
// console.log(c, "using Math.round, or", ac, "using Math.floor, or", cee);

// z == c ? console.log("\nThe fractions compile to equal using Math.round!") : console.log("\nThe fractions do NOT compile to equal using Math.round.");
// xz == ac ? console.log("The fractions compile to equal using Math.floor!") : console.log("The fractions do NOT compile to equal using Math.floor.");
// zat == cee ? console.log("The fractions compile to equal alone!") : console.log("The fractions do NOT compile to equal alone.")

/*OUTPUT:

hello world! 

1 using Math.round, or 0 using Math.floor, or 0.6666666666666666
1 using Math.round, or 0 using Math.floor, or 0.75

The fractions compile to equal using Math.round!
The fractions compile to equal using Math.floor!
The fractions do NOT compile to equal alone.

[Execution complete with exit code 0]

*/

//rounding to 2 decimal places:

let x = 6, y = 9;

let z = Math.round(x/y * 100) / 100;
let xz = Math.floor(x/y * 100) / 100;
let zat = x/y;

let a = 3, b = 4;

let c = Math.round(a/b * 100) / 100;
let ac = Math.floor(a/b * 100) / 100;
let cee = a/b;

console.log(z, "using Math.round, or", xz, "using Math.floor, or", zat);
console.log(c, "using Math.round, or", ac, "using Math.floor, or", cee);

z == c ? console.log("\nThe fractions compile to equal using Math.round!") : console.log("\nThe fractions do NOT compile to equal using Math.round.");
xz == ac ? console.log("The fractions compile to equal using Math.floor!") : console.log("The fractions do NOT compile to equal using Math.floor.");
zat == cee ? console.log("The fractions compile to equal alone!") : console.log("The fractions do NOT compile to equal alone.")


/*OUTPUT:

0.67 using Math.round, or 0.66 using Math.floor, or 0.6666666666666666
0.75 using Math.round, or 0.75 using Math.floor, or 0.75

The fractions do NOT compile to equal using Math.round.
The fractions do NOT compile to equal using Math.floor.
The fractions do NOT compile to equal alone.

[Execution complete with exit code 0]

*/

// I am using this as reference on how to make the fractions useful to equate between challenge and canvas.
// There needs to be a way to make the fractions equivalent, and I think I can do that by rounding to 2 decimal places.
// I will need to make a function that will round to 2 decimal places, and then I will need to make a function that will
// compare the two fractions and return true if they are equal, and false if they are not equal.

/*

Halves:
1/2 = 0.5
2/2 = 1

Thirds:
1/3 = 0.333...
2/3 = 0.666...
3/3 = 1

Fourths:
1/4 = 0.25
2/4 = 0.5
3/4 = 0.75
4/4 = 1

Sixths:
1/6 = 0.166...
2/6 = .333...
3/6 = 0.5
4/6 = 0.666...
5/6 = 0.833...
6/6 = 1

Eighths:
1/8 = 0.125
2/8 = 0.25
3/8 = 0.375
4/8 = 0.5
5/8 = 0.625
6/8 = 0.75
7/8 = 0.875
8/8 = 1

Ninths:
1/9 = 0.111...
2/9 = 0.222...
3/9 = .333...
4/9 = 0.444...
5/9 = 0.555...
6/9 = 0.666...
7/9 = 0.777...
8/9 = 0.888...
9/9 = 1

*/