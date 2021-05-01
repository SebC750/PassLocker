


document.addEventListener('DOMContentLoaded', function()
        {
        document.querySelector('#input').onsubmit = function()    
        {
            let nameDis = document.getElementById('name').value;
            document.getElementById('welcome').innerHTML = 
                    `<p style = 'color:white; '> Hello ${nameDis}! </p>`;
        return false;
        }
});

var score = 0;
var correct = 0;
var index = 0;
async function getQuiz()
{
const quiz = await fetch('https://my-json-server.typicode.com/SebC750/staticAPI/quiz');

 const model = await quiz.json();
 update(model);
};
getQuiz();
function update(model)
{
     
    var display = document.querySelector("#displays");

     let questions = model[index].question;
     let a = model[index].answer1;
     let b = model[index].answer2;
     let c = model[index].answer3;
     let d = model[index].answer4;
     let num = model[index].id;
    display.innerHTML = "<h1 style = 'color: white;'> Question #"+num+" of "+model.length+"</h1>";
    display.innerHTML += "<h3 style = 'color: white;'>"+questions+"</h3>";
    display.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: red; display: inline-block;'> <input type='radio' name='select' value = '1'>" +a+ "</input> </div>";
    display.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: blue; display: inline-block;'> <input type='radio' name='select' value = '2'>" +b+ "</input> </div> ";
    display.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: green; display: inline-block;'> <input type='radio' name='select' value = '3'>" +c+ "</input> </div> ";
    display.innerHTML += "<div style = 'font-size: 24px;color:black; padding: 30px; background-color: yellow; display: inline-block;'> <input type='radio' name='select' value = '4'>" +d+ "</input> </div> ";
     
     /*
    display.innerHTML = "<h1>"+questions+"</h1>"
    display.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: red; display: inline-block;'> <input type='radio' name='select' value = '1'>" +a+ "</input> </div>";
    display.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: blue; display: inline-block;'> <input type='radio' name='select' value = '2'>" +b+ "</input> </div> ";
    display.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: green; display: inline-block;'> <input type='radio' name='select' value = '3'>" +c+ "</input> </div> ";
    display.innerHTML += "<div style = 'font-size: 24px;color:black; padding: 30px; background-color: yellow; display: inline-block;'> <input type='radio' name='select' value = '4'>" +d+ "</input> </div> ";
    */
};
var selection;
function oneSecond()
{
setTimeout(function()
{
   document.querySelector("#message").innerHTML = '';
}, 1000);
};
function check(model)
{
    let message = document.querySelector("#message");
    select = document.getElementsByName("select");
    for(var i = 0; i < select.length; i++)
    {
        if(select[i].checked)
           selection = select[i].value;
    }
    if(selection == model[index].correct)
    {
             message.innerHTML = "<br> Great job! </br>";
             correct += 1;
             
    }
    else
        message.innerHTML = "<br> Sorry! You got it wrong! </br>";
        oneSecond();
        score = (correct/model.length)*100;
        index++;
        getQuiz();
        return false;
       
};

/*
var quiz = 

    [
    {
     id: 1,
     question: "Which one of these choices is a primitive type?", 
     answer1: "int",
     answer2: "String",
     answer3: "Array",
     answer4: "Class",
     correct: "1"
    },
    {
     id: 2,
     question:"For a printer that is printing material for multiple people in an office, what data structure is best suited for this scenario?", 
     answer1: "Stack",
     answer2: "Queue",
     answer3: "Bucket Sort",
     answer4: "ArrayList",
     correct: "2"
    },
    {
     id: 3,
     question:"What is the big O notation of n^3+1000n+6", 
     answer1: "O(nlogn)",
     answer2: "O(n!)",
     answer3: "O(n^2)",
     answer4: "O(n^3)",
     correct: "4"
    },
    {
     id: 4,
     question:"One of the drawbacks of an array is that its size cannot be changed dynamically. In what other way can it change?", 
     answer1: "Create a new array that carries over the values from the original array.",
     answer2: "Change the size variable to a float",
     answer3: "Write a for loop that increments the size.",
     answer4: "Write a do while loop that increments the size.",
     correct: "1"
    },
    {
     id: 5,
     question:"Can you insert values in a stack?", 
     answer1: "Yes, only on the bottom of the stack.",
     answer2: "Yes, you can insert values anywhere in the stack.",
     answer3: "No, stack values must be inserted before using them.",
     answer4: "Yes, only on top of the stack.",
     correct: "4"
    },
     {
     id: 6,
     question:"Which array values can be searched through most efficiently?", 
     answer1: "[8,9,34,1,2,54,23]",
     answer2: "[64,78,42,31,30]",
     answer3: "[0,1,2,3]",
     answer4: "[900,790,361,442,102]",
     correct: "3"
    },
      {
     id: 7,
     question:"Choose the correct java syntax", 
     answer1: "int 90 = 100;",
     answer2: "int = 100;",
     answer3: "int num = 100",
     answer4: "int num = 100;",
     correct: "4"
    },
    {
     id: 8,
     question:"Which data structure is First in, First out?", 
     answer1: "Stacks",
     answer2: "LinkedList",
     answer3: "Queues",
     answer4: "Priority Queues",
     correct: "3"
    },
    {
     id: 9,
     question:"Which programming language is most suited for data science?", 
     answer1: "Java",
     answer2: "Python",
     answer3: "Ruby",
     answer4: "C++",
     correct: "2"
    },
    {
     id: 10,
     question:"What are the operators of a stack?", 
     answer1: "push(), pop(), peek(), isEmpty(), clear()",
     answer2: "push(), pop(), enqueue()",
     answer3: "enqueue(), dequeue(), clear(), pop()",
     answer4: "add(), remove(), dequeue()",
     correct: "1"
    },
    {
     id: 11,
     question:"Which exception do you throw when the current index value is greater than the size of the stack?", 
     answer1: "throw new StackOverflowError();",
     answer2: "throw new ArrayOutOfBoundsException();",
     answer3: "throw new Exception();",
     answer4: "throw new FileNotFoundException();",
     correct: "2"
    },
    {
     id: 12,
     question:"Which type of attribute is best suited as a primary key in a relational database?", 
     answer1: "Last names",
     answer2: "first names",
     answer3: "home address",
     answer4: "identification number",
     correct: "1"
 },
 {
    id: 13,
     question:"What does the document.getElementById(); syntax do?", 
     answer1: "Adds a new value into an array.",
     answer2: "Deletes a value from a stack.",
     answer3: "Gets an element or an input from the html id tag that it comes from.",
     answer4: "Gets an element or an input from the html class tag that it comes from.",
     correct: "3"
 }
    ]; 
    

var score = 0;  

function test()
{
     console.log(score);
}
var questions, a, b, c, d, currentQuestion = 0, correct = 0, score, test, ques, ans, finalDisplay;

function nextQuestion()
{
    document.getElementById('score').innerHTML = "<p style = 'color:white;'> Score: "+score;
   
if(currentQuestion >= quiz.length)
{
   finalDisplay = document.getElementById("final");
    score = (correct/quiz.legnth)*100;
   
    document.getElementById("done").innerHTML = "<p style = 'color: white;'> The quiz is over. You earned a " +score+ " out of 100</p>";
   return false;
}
else
   
    document.getElementById("Title").innerHTML = "<h1 style = 'background-color: purple; padding: 40px; text-align: center;'> Question #"+(quiz[currentQuestion].id)+" of "+quiz.length;
    questions = quiz[currentQuestion].question;
 
 a = quiz[currentQuestion].answer1;
 b = quiz[currentQuestion].answer2;
 c = quiz[currentQuestion].answer3;
 d = quiz[currentQuestion].answer4;
 ques = document.getElementById("quest");
 ques.innerHTML = "<h1 style = 'text-align: center; padding: 40px; color: white;'>" +questions+ "</h1>";
 ques.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: red; display: inline-block;'> <input type='radio' name='select' value = '1'>" +a+ "</input> </div> ";
 ques.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: blue; display: inline-block;'> <input type='radio' name='select' value = '2'>" +b+ "</input> </div> ";
 ques.innerHTML += "<div style = 'font-size: 24px;color:white; padding: 30px; background-color: green; display: inline-block;'> <input type='radio' name='select' value = '3'>" +c+ "</input> </div> ";
 ques.innerHTML += "<div style = 'font-size: 24px;color:black; padding: 30px; background-color: yellow; display: inline-block;'> <input type='radio' name='select' value = '4'>" +d+ "</input> </div> ";
}
var selection;




function check() 
{
    var compliment = document.getElementById("message");
    select = document.getElementsByName("select");
    for(var i = 0; i < select.length; i++)
    {
        if(select[i].checked)
           selection = select[i].value;
    }
    if(selection == quiz[currentQuestion].correct)
    {
      compliment.innerHTML = "<p style = 'color: white;'> Great Job! You got it right! </p>";
      correct+= 1;
    }
    else
    {
        compliment.innerHTML = "<p style = 'color: white;'> Ouch! That wasn't quite it. The right answer was "+quiz[currentQuestion].correct+"</p>";
    }
    score = (correct/quiz.length)*100;
    currentQuestion++;
    nextQuestion();
}
*/