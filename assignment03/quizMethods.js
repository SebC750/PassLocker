var names = [];
function add()
{
    
    let insert = document.getElementById('name').value;
    names.push(insert);
    console.log(names);
    return false;
}

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
{
    "quiz": [
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
    }
    ]
    }
   
     


function begin()
{
var currentQuestion = 0;
var correct = 0;
var score = 0;
if(currentQuestion >= quiz.length)
{
   score = (correct/100)*100;
   document.getElementById("done").innerHTML = `<p> The quiz is over. You earned a ${score} out of 100</p>`;

}
else
    question = document.getElementById("question");
 
 a = document.getElementById("ans1");
 b = document.getElementById("ans2");
 c = document.getElementById("ans3");
 d = document.getElementById("ans4");
 question.innerHTML = "<h1>" ${question} "</h1>";
 a.innerHTML = `<input name = "choice"> ${answer1} </p>`;
 b.innerHTML = `<input name = "choice"> ${answer2} </p>`;
 c.innerHTML = `<input name = "choice"> ${answer3} </p>`;
 d.innerHTML = `<input name = "choice"> ${answer4} </p>`;
 return false;
}
function loadQuiz()
{

}
var choice;
function check() 
{
    var compliment;
    choice = document.getElementsByName("choice");
    if(choice == quiz[currentQuestion].correct)
    {
      compliment = `<p> Great Job! You got it right! </p>`;
      correct++;
    }
    currentQuestion++;
    loadQuiz();
}