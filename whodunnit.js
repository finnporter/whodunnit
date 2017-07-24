//Episode 1
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// var name is a variable that stores a string 'Keith'. it exists globally and is accessible to all functions.
// var printName is a variable that stores a whole function that has no name on its own.
// in this function we console.log, i.e. print to the screen, a string 'My name is' and then access the variable called name.
// Since name stands for 'Keith', 'Keith' gets inserted after the string and printed to the screen as well.
// printName() simply calls the function so that all of this actually happens.


//Episode 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// score is a variable that like 'name' in Episode 1 lives on its own and is globally accessible. It is also missing a 'var' which makes it a global
// variable. This should be avoided but for the sake of the exercise, I'll assume it was on purpose.
// var result is a variable that stores a nameless function
// in this function there is another variable called score which is local to the function (because it is within the function body).
// Here score is set to 3 instead of 5.
// Then, the variable is returned.
// After that the result function gets called and printed to the screen which will print a score of 3 because "it's the closest variable by that name".
// return score will look for the nearest occurence of var score and take that as the correct value.


//Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// var myAnimals stores an array of three animals, because why wouldn't it.
// var listAnimals stores a whole function.
// In this function we find a variable that is global and will therefore overwrite the previous variable of the same name.
// The complicated rest is a for loop that iterates over the newly overwritten array and prints each index and the corresponding animal to the screen. The i in the for loop stands for index.
//and to make that all actually happen, the function gets called after all of this.


//Episode 4
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// There are four shifty suspects, each stored in their own variable. Since those variables are global, I must assume these are internationally wanted criminals.
// var allSuspects stores a function. Whithin we find a local, small time delinquent called Harvey. He got stored in the same variable that Keith got stored in earlier. That is sloppy police work!
//The function also prints something to the screen. It is a list of all suspects. Suspect #3 will be Harvey as he is stored in the closest variable of that name.
//allSuspects() calls the function to make sure the rest of Interpol knows who to look for.
//In the end, someone must have noticed that Interpol is not really interested in Harvey and prints the correct suspect, Keith, to the screen from outside the function.


//Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//Interpol has not succeeded. Clearly, we need a more qualified person to do the job.
//Enter variable detective, which stores a sleuthing object by name Ace Ventura, who has a pet monkey sidekick.
//To make sure there are no further confusions, we store a function in a variable printName. This function takes in a parameter called detective and then returns that detective's name.
//But what is this? There is a second mysterious function stored in a variable detectiveInfo! It looks a lot like the competition is sending in a more experienced man to solve the crime. This new function sets the name of our detective object to Poirot. Which means Ace's pet sidekick now belongs to Poirot, too, and Ace is forgotten. detectiveInfo then calls the previous function. As any attentive reader knows, printName takes in an argument. In this case, detective, which refers to our global object from the beginning, only it has a changed name now.
//So when we call detectiveInfo and print it to the screen on the next line, tadaaa, Poirot is printed out. He will solve the case for sure.


//Episode 6
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//Things are getting heated and Poirot has called everyone to come to the drawing room so he can reveal who the murderer is.
//var murderer suggests that a person name rick has killed the victim. A global variable, he was Interpol's suspect four.
//our variable outerFunction stores...surprise!...a function of no name that gives us another name in the same variable, but local to this function. Inside this function is another one, stored in a variable innerFunction. Maybe Poirot will find his murderer inside this veritable matryoshka function? The innerFunction gives us another global criminal named valerie. The mystery is getting more mysterious by the minute.
//First, the innerFunction gets called. The murderer must be Valerie but no, undefined.
//Then, the outerFunction gets called. The murderer should be Marc, but again, undefined.
//Finally, Poirot logs the  murderer to the console, I mean, reveals the real culprit and it is...Rick.


console.log('-----------------------------------');
console.log('Episode 7');

var who = ['reverend green', 'colonel mustard', 'professor plum', 'miss scarlett', 'mrs. white'];
var where = ['kitchen', 'ballroom', 'conservatory', 'library', 'hall', 'study'];
var what_with = ['candlestick', 'dagger', 'lead pipe', 'revolver', 'spanner']

var suspects = function() {
  for (var i = 0; i < who.length; i++) {
    console.log("Suspect Number " + (i +1) + " is: " + who[i]);
  }
}

var rooms = function() {
  where.unshift('lounge')
  return where[4];
}

var murder_weapon = function(weapon) {
  var new_weapon = weapon;
  what_with.push(new_weapon);
  return what_with[what_with.length - 1];
}

var murderer = [];
var sentence = 'The killer must be revrend green, colonel mustard or miss scarlet'

for (var i=0; i<who.length; i++) {
    if (sentence.indexOf(who[i]) != -1){
        murderer.push(who[i]);
    }
}

suspects();
console.log('The crime happend in the:', rooms());
console.log('The murderer used', murder_weapon('rope'));
console.log("The killer is:", murderer);