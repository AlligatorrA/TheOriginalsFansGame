var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0
var userName = readlineSync.question("Youe Name? \n ");
console.log( chalk.blue("Hello " + userName))
var option =  readlineSync.question("Are You fan of The Originals WebShow? \n ")

if (option.toLowerCase() === "yes"){
  var questions = [{
    question:"Klaus Mikaelson was:  \n  1)vampire   2)Wolf   3)Hybrid \n ",
    answer: "Hybrid"
  },
{
  question: "what did Mikaelson  family Swear to themselves?  \n"+
  "1)family always and forever 2)friendShip always and Forever 3)Love is power \n " ,
  answer: "family always and forever"
},
{
  question: "klaus favourite sibling was \n "+
  "1)Elijah 2)Rebekah 3)kol  \n" ,
  answer: "Rebekah"
},
{
  question: "vampire Who always wears a suit  \n "+
  "1)Elijah   2)klaus   3)kol  \n" ,
  answer: "Elijah"
},
{
  question: "'no one hurts my family and lives. NO ONE' said by:  \n"+
  "1)Elijah   2)klaus   3)kol   4)Rebekah  \n" ,
  answer: "Elijah"
},
{
  question: "'Don't understimate the allure of Darkness, Stefan. Even the Purest hearts are drawn to it:  \n"+
  "1)Elijah   2)klaus   3)kol   4)Rebekah  \n" ,
  answer: "klaus"
},
{
  question: "I've broken one of your rules. And yet I cannot be killed. I am immortal. Who has the power now, friend?: said by  \n "+
  "1)Elijah   2)klaus   3)kol   4)Rebekah  \n" ,
  answer: "klaus"
},
{
  question: "'I know you are obssed with me' said by:  \n "+
  "1)Elijah   2)klaus   3)stefen   4)Damon  \n " ,
  answer:"Damon"
},
{
  question: "'Meet Your Maker' said by:  \n "+
  "1)Elijah   2)klaus   3)stefen   4)Damon  \n " ,
  answer:"klaus"
},
{
  question: "'A warrior fights for what they believe in. A warrior fights for his family.' said by:  \n "+
  "1)Elijah   2)klaus   3)stefen   4)Damon  \n " ,
  answer:"klaus"
}]

  function play(question, answer){
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() == answer.toLowerCase()){
      console.log(chalk.green("Right Answer"))
      score = score+10

    }else{
      console.log(chalk.red("Wrong Answer  "))
    }
    console.log("------------------------")
  }
  for (var i=0; i<questions.length;  i++){
        currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer);
    }



  console.log(chalk.blue("Your Score is: "+ score))  












}else if (option.toLowerCase() === "no"){
   console.log(chalk.red("You Enter no 😞 "))
}
