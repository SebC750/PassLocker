document.addEventListener('DOMContentLoaded', function()
        {
        document.querySelector('#input').onsubmit = function()    
        {
            let nameDis = document.getElementById('name').value;
            document.getElementById('welcome').innerHTML = 
                    `Hello ${nameDis}!`;
        return false;
        }
});
var quiz = 

    [
    {
     id: 1,
     question: "Which one of these choices is a primitive type?", 
     answer1: "int",
     answer2: "String",
     answer3: "Array",
     answer4: "Class",
     correct: "int"
    },
    {
     id: 2,
     question:"For a printer that is printing material for multiple people in an office, what data structure is best suited for this scenario?", 
     answer1: "Stack",
     answer2: "Queue",
     answer3: "Bucket Sort",
     answer4: "ArrayList",
     correct: "Queue"
    },
    {
     id: 3,
     question:"What is the big O notation of n^3+1000n+6", 
     answer1: "O(nlogn)",
     answer2: "O(n!)",
     answer3: "O(n^2)",
     answer4: "O(n^3)",
     correct: "O(n^3)"
    },
    {
     id: 4,
     question:"One of the drawbacks of an array is that its size cannot be changed dynamically. In what other way can it change?", 
     answer1: "Create a new array that carries over the values from the original array.",
     answer2: "Change the size variable to a float",
     answer3: "Write a for loop that increments the size.",
     answer4: "Write a do while loop that increments the size.",
     correct: "Create a new array that carries over the values from the original array."
    },
    {
     id: 5,
     question:"Can you insert values in a stack?", 
     answer1: "Yes, only on the bottom of the stack.",
     answer2: "Yes, you can insert values anywhere in the stack.",
     answer3: "No, stack values must be inserted before using them.",
     answer4: "Yes, only on top of the stack.",
     correct: "Yes, only on top of the stack."
    },
     {
     id: 6,
     question:"Which array values can be searched through most efficiently?", 
     answer1: "[8,9,34,1,2,54,23]",
     answer2: "[64,78,42,31,30]",
     answer3: "[0,1,2,3]",
     answer4: "[900,790,361,442,102]",
     correct: "[0,1,2,3]"
    },
      {
     id: 7,
     question:"Choose the correct java syntax", 
     answer1: "int 90 = 100;",
     answer2: "int = 100;",
     answer3: "int num = 100",
     answer4: "int num = 100;",
     correct: "int num = 100;"
    },
    {
     id: 8,
     question:"Which data structure is First in, First out?", 
     answer1: "Stacks",
     answer2: "LinkedList",
     answer3: "Queues",
     answer4: "Priority Queues",
     correct: "Queues"
    },
    {
     id: 9,
     question:"Which programming language is most suited for data science?", 
     answer1: "Java",
     answer2: "Python",
     answer3: "Ruby",
     answer4: "C++",
     correct: "Python"
    },
    {
     id: 10,
     question:"What are the operators of a stack?", 
     answer1: "push(), pop(), peek(), isEmpty(), clear()",
     answer2: "push(), pop(), enqueue()",
     answer3: "enqueue(), dequeue(), clear(), pop()",
     answer4: "add(), remove(), dequeue()",
     correct: "push(), pop(), peek(), isEmpty(), clear()"
    },
    {
     id: 11,
     question:"Which exception do you throw when the current index value is greater than the size of the stack?", 
     answer1: "throw new StackOverflowError();",
     answer2: "throw new ArrayOutOfBoundsException();",
     answer3: "throw new Exception();",
     answer4: "throw new FileNotFoundException();",
     correct: "throw new StackOverflowError();"
    },
    {
     id: 12,
     question:"Which type of attribute is best suited as a primary key in a relational database?", 
     answer1: "Last names",
     answer2: "first names",
     answer3: "home address",
     answer4: "identification number",
     correct: "identification number"
 }
    ];
    
   

var questions, a, b, c, d, currentQuestion = 0, correct = 0, score, test, ques, ans, finalDisplay;
function calc()
{
    finalDisplay = document.getElementById("final");
    score = (correct/quiz.legnth)*100;
    if(score > 80)
    {
       finalDisplay = "Wow! You really know your stuff!";
    }
    else if(score < 80)
    {
        finalDisplay = "Not too shabby. Keep it up!";
    }
    else if(score < 60)
    {
        finalDisplay = "Could use a little review! Good try!";
    }
    else if(score < 40)
    {
        finalDisplay = "A lot more misses than hits! Better luck next time!";
    }
    else if(score < 20)
    {
        finalDisplay = "Had one too many naps in class, eh?"
    }
    return finalDisplay.innerHTML;
}
function nextQuestion()
{
    ques = document.getElementById("quest");
if(currentQuestion >= quiz.length)
{
   calc();
   document.getElementById("done").innerHTML = "<p> The quiz is over. You earned a " +score.text+ " out of 100</p>";
   return false;
}
else
   
    document.getElementById("Title").innerHTML = "Question #"+(quiz[currentQuestion].id)+" of "+quiz.length;
    questions = quiz[currentQuestion].question;
 
 a = " a. "+quiz[currentQuestion].answer1;
 b = " b. "+quiz[currentQuestion].answer2;
 c = " c. "+quiz[currentQuestion].answer3;
 d = " d. "+quiz[currentQuestion].answer4;
 ques.innerHTML = "<h1 style = 'text-align: center;'>" +questions+ "</h1>";
 ques.innerHTML += "<li> <input type='radio' name='select'>" +a+ "</input> </li> ";
 ques.innerHTML += "<li> <input type='radio' name='select'>" +b+ "</input> </li> ";
 ques.innerHTML += "<li> <input type='radio' name='select'>" +c+ "</input> </li> ";
 ques.innerHTML += "<li> <input type='radio' name='select'>" +d+ "</input> </li> ";
}

function scoreBoard()
{
    let scoreDisplay = getElementById("score");
    scoreDisplay.innerHTML = "Score: "+correct+" out of "+quiz.length;
    return scoreDisplay.innerHTML;
}
function check() 
{
    var compliment = document.getElementById("message");
    select = document.getElementsByName("select");
    
    if(select == quiz[currentQuestion].correct.toString())
    {
      compliment.innerHTML = "<p> Great Job! You got it right! </p>";
      correct+= 1;
    }
    else
    {
        compliment.innerHTML = "<p> Ouch! That wasn't quite it. The right answer was "+quiz[currentQuestion].correct+"</p>";
    }
    currentQuestion++;
    nextQuestion();
}