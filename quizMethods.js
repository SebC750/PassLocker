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
var model = 
{
    "quiz": [
    {
     "id": "1",
     "question":"Which one of these choices is a primitive type?", 
     "answer1": "int",
     "answer2": "String",
     "answer3": "Array",
     "answer4": "Class",
     "correct": "int"
    },
    {
     "id": "2",
     "question":"For a printer that is printing material for multiple people in an office, what data structure is best suited for this scenario?", 
     "answer1": "Stack",
     "answer2": "Queue",
     "answer3": "Bucket Sort",
     "answer4": "ArrayList",
     "correct": "Queue"
    },
    {
     "id": "3",
     "question":"What is the big O notation of n^3+1000n+6", 
     "answer1": "O(nlogn)",
     "answer2": "O(n!)",
     "answer3": "O(n^2)",
     "answer4": "O(n^3)",
     "correct": "O(n^3)"
    },
    {
     "id": "4",
     "question":"One of the drawbacks of an array is that its size cannot be changed dynamically. In what other way can it change?", 
     "answer1": "Create a new array that carries over the values from the original array.",
     "answer2": "Change the size variable to a float",
     "answer3": "Write a for loop that increments the size.",
     "answer4": "Write a do while loop that increments the size.",
     "correct": "Create a new array that carries over the values from the original array."
    },
    {
     "id": "5",
     "question":"Can you insert values in a stack?", 
     "answer1": "Yes, only on the bottom of the stack.",
     "answer2": "Yes, you can insert values anywhere in the stack.",
     "answer3": "No, stack values must be inserted before using them.",
     "answer4": "Yes, only on top of the stack.",
     "correct": "Yes, only on top of the stack."
    },
     {
     "id": "6",
     "question":"Which array values can be searched through most efficiently?", 
     "answer1": "[8,9,34,1,2,54,23]",
     "answer2": "[64,78,42,31,30]",
     "answer3": "[0,1,2,3]",
     "answer4": "[900,790,361,442,102]",
     "correct": "[0,1,2,3]"
    },
      {
     "id": "7",
     "question":"Choose the correct java syntax", 
     "answer1": "int 90 = 100;",
     "answer2": "int = 100;",
     "answer3": "int num = 100",
     "answer4": "int num = 100;",
     "correct": "int num = 100;"
    },
    {
     "id": "8",
     "question":"Which data structure is First in, First out?", 
     "answer1": "Stacks",
     "answer2": "LinkedList",
     "answer3": "Queues",
     "answer4": "Priority Queues",
     "correct": "Queues"
    },
    {
     "id": "9",
     "question":"Which programming language is most suited for data science?", 
     "answer1": "Java",
     "answer2": "Python",
     "answer3": "Ruby",
     "answer4": "C++",
     "correct": "Python"
    },
    {
     "id": "10",
     "question":"What are the operators of a stack?", 
     "answer1": "push(), pop(), peek(), isEmpty(), clear()",
     "answer2": "push(), pop(), enqueue()",
     "answer3": "enqueue(), dequeue(), clear(), pop()",
     "answer4": "add(), remove(), dequeue()",
     "correct": "push(), pop(), peek(), isEmpty(), clear()"
    },
    {
     "id": "11",
     "question":"Which exception do you throw when the current index value is greater than the size of the stack?", 
     "answer1": "throw new StackOverflowError();",
     "answer2": "throw new ArrayOutOfBoundsException();",
     "answer3": "throw new Exception();",
     "answer4": "throw new FileNotFoundException();",
     "correct": "throw new StackOverflowError();"
    },
    {
     "id": "12",
     "question":"Which type of attribute is best suited as a primary key in a relational database?", 
     "answer1": "Last names",
     "answer2": "first names",
     "answer3": "home address",
     "answer4": "identification number",
     "correct": "identification number"
    }
   ]
     

}

var currentQuestion = this.id;
var correct = 0;
function loadQuiz()
{
     document.getElementById("show").innerHTML = `<h2> Question #${this.id} </h2>`;
}
 