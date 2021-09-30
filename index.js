var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0
var userName = readlineSync.question("Youe Name? \n ");
console.log("Hello " +chalk.blue(  userName))
var option =  readlineSync.question("Are You fan of The Originals WebShow?(y/n) \n ")



if (option.toLowerCase() === "y"){
  console.log(chalk.yellow("lets play this game see how much you know about mikealson family\n select your option a,b,c or d "))
  var questions = [{
    question:"Klaus Mikaelson was:  \n a)vampire  \n b)Wolf  \n c)Hybrid \n\n ",
    answer: "c"
  },
{
  question: "what did Mikaelson  family Swear to themselves?  \n"+
  " a)family always and forever \n b)friendShip always and Forever\n c)Love is power\n \n " ,
  answer: "a"
},
{
  question: "klaus favourite sibling was \n "+
  "a)Elijah \n b)Rebekah\n c)kol  \n\n" ,
  answer: "b"
},
{
  question: "vampire Who always wears a suit  \n "+
  "a)Elijah  \n b)klaus  \n c)kol \n \n" ,
  answer: "a"
},
{
  question: "'no one hurts my family and lives. NO ONE' said by:  \n"+
  " a)Elijah  \n b)klaus  \n c)kol \n d)Rebekah \n \n" ,
  answer: "a"
},
{
  question: "'Don't understimate the allure of Darkness, Stefan. Even the Purest hearts are drawn to it:  \n"+
  " a)Elijah \n b)klaus \n c)kol \n d)Rebekah  \n\n" ,
  answer: "b"
},
{
  question: "I've broken one of your rules. And yet I cannot be killed. I am immortal. Who has the power now, friend?: said by  \n "+
  "a)Elijah  \n b)klaus  \n c)kol \n d)Rebekah \n \n" ,
  answer: "b"
},
{
  question: "'I know you are obssed with me' said by:  \n "+
  "a)Elijah \n b)klaus \n c)stefen  \n d)Damon \n \n " ,
  answer:"d"
},
{
  question: "'Meet Your Maker' said by:  \n "+
  "a)Elijah  \n b)klaus \n c)stefen \n d)Damon \n \n " ,
  answer:"b"
},
{
  question: "'A warrior fights for what they believe in. A warrior fights for his family.' said by:  \n "+
  "a)Elijah  \n b)klaus \n c)rebekah  \n d)Damon  \n \n" ,
  answer:"b"
}]

  function play(question, answer){
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() == answer.toLowerCase()){
      console.log(chalk.green("Right Answer"))
      score = score+10
      console.log(score)

    }else{
      console.log(chalk.red("Wrong Answer  "))
    }
    console.log("------------------------")
  }
  for (var i=0; i<questions.length;  i++){
        currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer);
    }
  


  console.log(chalk.blue("Dear "+ userName +" Your Score is: "+ score))  
     if(score == "100"){
       console.log("*********** Wow You are a True Fan of 'The Original' webShow you Scored 100/100 ***********")
     }











}else if (option.toLowerCase() === "n"){
   console.log(chalk.red("You Enter no 😞 "))
}
