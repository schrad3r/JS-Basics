//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
  if (name === "Tyler") {
    return true;
  } else {
    return false;
  }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
  var userName = prompt("What is your name?");
  return userName;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
  return alert("Welcome, " + getName());
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
function problem4() {
  var answer4 = "Paramters are values passed into functions to be used within the function, and arguments are the actual values of the parameters that are passed in.";
  return answer4;
}
//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
function problem5() {
  var answer5 = "Falsy values are false, 0, empty strings, null, undefined, NaN. The most simple way would be to use an if statement to check if something is equal to false.";
  return answer5;
}


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName() {
  return "Karoline Lisbeth Schrader";
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
function newMyName(){
return myName();
} 
//Now alert the result of invoking newMyName
newMyName();



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
  return (function() {return "Karoline Lisbeth Schrader"});
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();
