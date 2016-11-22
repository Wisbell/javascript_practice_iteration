/*Increment by 10

Write a for loop that uses a counter variable initialized at 5 and 
then increments it by 10 every time it executes. Use console.log() 
to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.*/
for (var counter = 5; counter < 120 ; counter+=10) {
	console.log(counter);
}



/* Decrement by division

Write a for loop with a counter variable initialized at 4096. 
Each time the loop executes divide the counter variable's value by 2. 
Use console.log() to output its value every time. When the counter 
variable's value is 1, stop execution.*/


for (var counter = 4096; counter > 1; counter/=2) {
	console.log(counter);
}


// Array iteration

// Create an array that contains the names of American Presidents.
//  Loop over that array with a for loop, and use string concatenation
//   with console.log() to output the order and name of each President

var presidents = ["George Washington",
"John Adams",
"Thomas Jefferson",
"James Madison",
"James Monroe",
"John Quincy Adams",
"Andrew Jackson",
"Martin Van Buren",
"William H. Harrison",
"John Tyler",
"James K. Polk",
"Zachary Taylor",
"Millard Fillmore",
"Franklin Pierce",
"James Buchanan",
"Abraham Lincoln",
"Andrew Johnson",
"Ulysses S. Grant",
"Rutherford B. Hayes",
"James A. Garfield",
"Chester A. Arthur",
"Grover Cleveland",
"Benjamin Harrison",
"Grover Cleveland",
"William McKinley",
"Theodore Roosevelt",
"William H. Taft",
"Woodrow Wilson",
"Warren G. Harding",
"Calvin Coolidge",
"Herbert Hoover",
"Franklin D. Roosevelt",
"Harry S. Truman",
"Dwight D. Eisenhower",
"John F. Kennedy",
"Lyndon B. Johnson",
"Richard M. Nixon",
"Gerald R. Ford",
"Jimmy Carter",
"Ronald Reagan",
"George H. W. Bush",
"Bill Clinton",
"George W. Bush",
"Barack Hussein Obama",
"Donald Trump"];

for (var i = 1; i < presidents.length + 1; i++){
	console.log("President #" + i + " was " + presidents[i-1]);
}

/* Object iteration

Use can use another kind of for loop to iterate over objects. Iterate 
over the object below and use console.log() to output the names of 
the keys in the object.
*/

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var property in antSpecies) {
	console.log(property);
} 

/* I need to practice with this for loop in order to truly understand 
how it works */