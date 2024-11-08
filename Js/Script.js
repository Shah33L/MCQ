const questions = [
    {
     question:"1)Is European Standard Schools One of the best School of Dhaka?",
     options:["Yes","No"],
     answer:"Yes"
    },
    {
      question: "2)What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "3)Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
      answer: "William Shakespeare"
    },
    {
      question: "4)What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "5)In which year did the Titanic sink?",
      options: ["1912", "1905", "1920", "1915"],
      answer: "1912"
    },
    {
      question: "6)What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "7)How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "8)Which planet is known as the Red Planet?",
      options: ["Venus", "Saturn", "Mars", "Mercury"],
      answer: "Mars"
    },
    {
      question: "9)Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "10)What is the capital city of Japan?",
      options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
      answer: "Tokyo"
    },
    {
      question: "11)Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Iron", "Hydrogen"],
      answer: "Oxygen"
    },
    {
      question: "12)What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest"
    },
    {
      question: "13)Who is known as the 'Father of Computers'?",
      options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
      answer: "Charles Babbage"
    },
    {
      question: "14)What is the currency of the United Kingdom?",
      options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
      answer: "Pound Sterling"
    },
    {
      question: "15)Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific"
    },
    {
      question: "16)In which country is the Great Barrier Reef located?",
      options: ["Australia", "USA", "India", "South Africa"],
      answer: "Australia"
    },
    {
      question: "17)What is the primary language spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "English"],
      answer: "Portuguese"
    },
    {
      question: "18)What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "San Marino", "Malta"],
      answer: "Vatican City"
    },
    {
      question: "19)What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond"
    },
    {
      question: "20)How many bones are there in the human body?",
      options: ["206", "198", "210", "250"],
      answer: "206"
    }
  ]
  let currentIndex=0;//Current index will be 0
  let scoreval=0;//Score will be 0  
  const questionEl=document.querySelector(".Questions")
  const ans=document.querySelector(".answer")
  const optionsEL=document.querySelector(".Options")
  const score=document.querySelector(".Score")
  function loadQuestions(){
     questionEl.innerHTML=questions[currentIndex].question
     optionsEL.innerHTML = "";
     questions[currentIndex].options.forEach(option=>{
        const newBtn=document.createElement("button")
        newBtn.innerHTML=option;
        newBtn.onclick=()=>{
            Checkanswer(option)
        }
        optionsEL.appendChild(newBtn);
     })
  }
  function Checkanswer(option){
    if(questions[currentIndex].answer == option){
       scoreval++;
       score.innerHTML =`Score:${scoreval}`
    }
    currentIndex++;
    if(currentIndex<questions.length){
        loadQuestions()
    }else{
        score.innerHTML =""
        questionEl.innerHTML =`You have Completed the Quiz!!`
        optionsEL.innerHTML =""
        ans.innerHTML =`Your final Score is ${scoreval} out of ${questions.length}`
    }
    ShowAnswer();
  }
  
  loadQuestions()//Calling the Function
 