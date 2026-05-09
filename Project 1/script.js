const questions = [
  {
  question: 'Which planet is known as the Red Planet?',
  answers: [
    { text: 'Earth', correct: false },
    { text: 'Mars', correct: true },
    { text: 'Jupiter', correct: false },
    { text: 'Venus', correct: false },
  ]
},

{
  question: 'Who is known as the Father of the Nation in India?',
  answers: [
    { text: 'Jawaharlal Nehru', correct: false },
    { text: 'Subhas Chandra Bose', correct: false },
    { text: 'Mahatma Gandhi', correct: true },
    { text: 'Bhagat Singh', correct: false },
  ]
},

{
  question: 'Which is the longest river in the world?',
  answers: [
    { text: 'Amazon River', correct: false },
    { text: 'Nile River', correct: true },
    { text: 'Ganga River', correct: false },
    { text: 'Yangtze River', correct: false },
  ]
},

{
  question: 'What is the capital of Japan?',
  answers: [
    { text: 'Beijing', correct: false },
    { text: 'Seoul', correct: false },
    { text: 'Tokyo', correct: true },
    { text: 'Bangkok', correct: false },
  ]
},

{
  question: 'Which gas do plants absorb from the atmosphere?',
  answers: [
    { text: 'Oxygen', correct: false },
    { text: 'Nitrogen', correct: false },
    { text: 'Carbon Dioxide', correct: true },
    { text: 'Hydrogen', correct: false },
  ]
},

{
  question: 'How many players are there in a cricket team?',
  answers: [
    { text: '9', correct: false },
    { text: '10', correct: false },
    { text: '11', correct: true },
    { text: '12', correct: false },
  ]
},

{
  question: 'Which is the national animal of India?',
  answers: [
    { text: 'Lion', correct: false },
    { text: 'Tiger', correct: true },
    { text: 'Elephant', correct: false },
    { text: 'Leopard', correct: false },
  ]
},

{
  question: 'What is the boiling point of water at sea level?',
  answers: [
    { text: '90°C', correct: false },
    { text: '100°C', correct: true },
    { text: '110°C', correct: false },
    { text: '120°C', correct: false },
  ]
},

{
  question: 'Which is the largest ocean on Earth?',
  answers: [
    { text: 'Atlantic Ocean', correct: false },
    { text: 'Indian Ocean', correct: false },
    { text: 'Pacific Ocean', correct: true },
    { text: 'Arctic Ocean', correct: false },
  ]
},

{
  question: 'Who invented the telephone?',
  answers: [
    { text: 'Thomas Edison', correct: false },
    { text: 'Alexander Graham Bell', correct: true },
    { text: 'Nikola Tesla', correct: false },
    { text: 'Isaac Newton', correct: false },
  ]
},

{
  question: 'Which is the hardest natural substance on Earth?',
  answers: [
    { text: 'Gold', correct: false },
    { text: 'Iron', correct: false },
    { text: 'Diamond', correct: true },
    { text: 'Quartz', correct: false },
  ]
},

{
  question: 'Which country is known as the Land of the Rising Sun?',
  answers: [
    { text: 'China', correct: false },
    { text: 'Japan', correct: true },
    { text: 'Thailand', correct: false },
    { text: 'South Korea', correct: false },
  ]
},

{
  question: 'How many colors are there in a rainbow?',
  answers: [
    { text: '5', correct: false },
    { text: '6', correct: false },
    { text: '7', correct: true },
    { text: '8', correct: false },
  ]
},

{
  question: 'Which is the tallest mountain in the world?',
  answers: [
    { text: 'K2', correct: false },
    { text: 'Mount Everest', correct: true },
    { text: 'Kangchenjunga', correct: false },
    { text: 'Makalu', correct: false },
  ]
},

{
  question: 'What is the currency of India?',
  answers: [
    { text: 'Dollar', correct: false },
    { text: 'Rupee', correct: true },
    { text: 'Yen', correct: false },
    { text: 'Euro', correct: false },
  ]
}
  
];

const questionElement =  document.getElementById('question');
const answerButtons =  document.getElementById('answer-buttons');
const nextButton =  document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}


function resetState(){
  nextButton.style.display = 'none';
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if(isCorrect){
    selectedBtn.classList.add('correct');
    score++;
  }
  else{
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === 'true'){
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'block';
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener('click', () =>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
});

startQuiz();