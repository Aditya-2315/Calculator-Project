let ques = document.querySelector(".ques")
let op = document.querySelector(".options")
let start = document.querySelector(".start")
const qaArray = [
    {
        question: "What is the capital of France?",
        options: [ "London","Paris", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: [ "Earth", "Saturn","Jupiter", "Mars"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: [ "O2","H2O", "CO2", "H2"],
        correctAnswer: "H2O"
    },
    {
        question: "How many continents are there on Earth?",
        options: [ "Five", "Six","Seven", "Eight"],
        correctAnswer: "Seven",
    },
    {
        question: "What is the square root of 64?",
        options: [ "6", "7", "9","8"],
        correctAnswer: "8"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Alan Turing","Charles Babbage",  "John von Neumann", "Thomas Edison"],
        correctAnswer: "Charles Babbage"
    },
    {
        question: "What is the speed of light?",
        options: [ "150,000,000 meters per second", "299,792 meters per second","299,792,458 meters per second", "1,000,000 meters per second"],
        correctAnswer: "299,792,458 meters per second"
    },
    {
        question: "Which element has the atomic number 6?",
        options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [ "Vincent van Gogh","Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    }
];
let currQuesindex = 0;
let score = 0;
let OPTIONS = qaArray[currQuesindex].options
    // console.log(qaArray[currQuesindex].correctAnswer,qaArray[currQuesindex].options.length)
function startQuiz(){
        currQuesindex = 0;
        score = 0;
        showQuestion();
    }

function showQuestion(){
    reset()
    let currQuestion = qaArray[currQuesindex];
    let ques_no = currQuesindex + 1;
    ques.innerHTML = ques_no + "." + currQuestion.question
 
    currQuestion.options.forEach(answer =>{
        const button = document.createElement("div")
        button.innerHTML = answer
        button.classList.add("option")
        op.appendChild(button)
        button.addEventListener("click", selectAnswer)
    })

}

function reset(){
    document.querySelector(".nxt-btn").style.display = "none"
    document.querySelector(".nxt-btn").innerHTML = "Next"
    while(op.firstChild){
        op.removeChild(op.firstChild)
    }
}

start.addEventListener("click",()=>{
    start.classList.add("hidden")
    startQuiz()
    start.classList.add("hidden")
    
})

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = (selectedBtn.innerHTML === qaArray[currQuesindex].correctAnswer)
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(op.children).forEach(button=>{
        if(button.innerHTML === qaArray[currQuesindex].correctAnswer ){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    document.querySelector(".nxt-btn").style.display = "block"
}

document.querySelector(".nxt-btn").addEventListener("click",()=>{
    if(currQuesindex < qaArray.length){
        NextQues()
    }
    else{
        startQuiz()
    }
})

function NextQues(){
    currQuesindex++
    if(currQuesindex < qaArray.length){
        showQuestion()
    }
    else{
        ShowScore()
    }
}

function ShowScore(){
    reset()
    ques.innerHTML = `You scored ${score} out of ${(qaArray.length)}`
    document.querySelector(".nxt-btn").innerHTML = "Play Again"
    document.querySelector(".nxt-btn").style.display = "block"
}

console.log(document.getElementsByClassName("ques"+`${currQuesindex+1}`))
