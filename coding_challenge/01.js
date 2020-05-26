/********************
* Coding Challenge 01
*/
/*
Mar and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass/height^2 
(mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3.
*/

var markHeight, markMass, markBMI;
var johnHeight, johnMass, johnBMI;

markHeight = prompt("What is Mark height (m)?",2.0);
markMass = prompt("What is Mark mass (kg)?",90);
console.log("Mark m:"+markMass+" h:"+markHeight);

johnHeight = prompt("What is John height (m)?",1.9);
johnMass = prompt("What is John mass (kg)?",87);
console.log("John m:"+johnMass+" h:"+johnHeight);

markBMI = markMass / (markHeight*markHeight);
johnBMI = johnMass / (johnHeight*johnHeight);
console.log("Mark BMI:"+markBMI+" John BMI:"+johnBMI);

isMarkBMIHigher = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? ", isMarkBMIHigher);