var readlineSync = require("readline-sync");
var chalk = require("chalk");
const log = console.log;

var score = 0;

log(chalk.keyword("pink").bgBlue.underline.bold("Check how much do you know about Bangalore City ;-)"));

var userName = readlineSync.question(chalk.bgCyan.bold.keyword("orange")("\nEnter your Name:") + " ");

log(chalk.keyword("pink").bgBlue.underline("\nWelcome ") + chalk.keyword("pink").bgBlue.underline(userName));

log(chalk.red.bold(chalk.red.underline("\n--Rules:") + "\n>There are total 10 MCQ questions." + "\n>You will get 2 points for each correct answer." + "\n>One mark will deduct for each wrong answer.\n"))

var leaderBoard = [
  {
    place : 1,
    name : "Aman",
    score : 17
  },

  {
    place : 2,
    name : "Medha",
    score : 14
  },

  {
    place : 3,
    name : "Vaibhav",
    score : 11
  }
]

log(chalk.green.bold.underline("LEADERBOARD:"));
log(chalk.keyword("orange").underline.bold("Place\t" + "Name\t" + "\tScore"));

for(var i=0; i<leaderBoard.length; i++) {
  log(leaderBoard[i].place + "\t\t" + leaderBoard[i].name + "\t\t" + leaderBoard[i].score)
}

log("---------------------------------------------------");

var questions = [
  {
    question : "Bangalore is also known as ____ city of India.",
    options : ["Garden", "Jewel", "Pink", "Temple"],
    answer : "Garden"
  },

  {
    question : "What was the old name of Bangalore?",
    options : ["Mysore", "Madras", "Indraprastha", "None of these"],
    answer : "None of these"
  },

  {
    question : "Bangalore is also known as ____",
    options : ["Fruit City", "Pensioner paradise", "Flower City", "City of lakes"],
    answer : "Pensioner paradise"
  },

  {
    question : "Which of the following cricketer hails from Bangalore?",
    options : ["Sachin Tendulkar", "Anil Kumble", "Virendra Sehwag","Mohd. Azharuddin"],
    answer : "Anil Kumble"
  },

  {
    question : "In 1985, which company was the first multinational corporation to set up base in Bangalore?",
    options : ["Texas Instruments", "IBM", "Intel", "Microsoft"],
    answer : "Texas Instruments"
  },

  {
    question : "Bangalore is located on which Plateau in the south-eastern part of Karnataka?",
    options : ["Deccan Plateau", "Mangi-Tungi", "Bhander Plateau","Mysore Plateau"],
    answer : "Deccan Plateau"
  },

  {
    question : "What is the original name of Bangalore in Kannada language?",
    options : ["Bangaru", "Begur", "Bengaluru", "None of these"],
    answer : "Bengaluru"
  },

  {
    question : "Bangalore has a number of lakes, but much of its water supply comes from one of the most important rivers of India. Which river is this?",
    options : ["Narmada", "Yamuna", "Kaveri", "Ganga"],
    answer : "Kaveri"
  },

  {
    question : "Who is said to be the founder of the city of Bangalore?",
    options : ["Sir M Visvesvaraya", "Kempegowda", "Chamaraja Wodeyar", "Kengal Hanumanthayya"],
    answer : "Kempegowda"
  },

  {
    question : "Bangalore is also known for its film industry. By what name is the Bangalore film industry known?",
    options : ["Bollywood", "Tollywood", "Sandalwood", "Kollywood"],
    answer : "Sandalwood"
  }
]

function quiz(options, question, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question)
  if(options[userAnswer] === answer) {
    log(chalk.green("\n--Right" + "\n"));
    score = score + 2;
    log(chalk.green("Current Score : " + score));
    log("===================================================")
  }
  else {
    log(chalk.red("\n--Wrong" + "\n"));
    score = score - 1;
    log(chalk.red("Current Score : " + score));
    log("===================================================")
  }
}

var j = 1;

for(var i=0; i<questions.length; i++) {
  log(chalk.keyword("pink").bgBlue.underline.bold("\nQuestion " + j++))
  quiz(questions[i].options, questions[i].question, questions[i].answer)
}

log(chalk.green("Final Score: " + score));

var highScores = [17, 14, 11];

for(var i=0; i<highScores.length; i++) {
  if(score>highScores[i]) {
    log(chalk.keyword("pink").bgBlue.bold("\nCongratulations!! you are a high scorer. DM me the screenshot of your score on twitter @aman11s :-D"));
    break;
  }
}