const questions = [
    {
        question: "What is Maja's zodiac sign?",
        a: "Aries",
        b: "Capricorn",
        c: "Gemini",
        d: "Taurus",
        correct: "d"
    }, {
        question: "What is Maja's favourite color?",
        a: "Purple",
        b: "Teil",
        c: "Pink",
        d: "Green",
        correct: "b"
    }, {
        question: "What job did Maja want to have as a child?",
        a: "Nurse",
        b: "Teacher",
        c: "Hairdresser",
        d: "Nothing from above",
        correct: "c"
    }, {
        question: "What is Maja's favourite brand?",
        a: "Nike",
        b: "She doesn't care for that",
        c: "Addidas",
        d: "Under Armor",
        correct: "b"
    }, {
        question: "What country would Maja like to visit the most?",
        a: "Germany",
        b: "Spain",
        c: "Japan",
        d: "India",
        correct: "c"
    }, {
        question: "Finish this: When Maja is under stress she ______",
        a: "Cries",
        b: "Eats",
        c: "Can't sleep",
        d: "Goes out to party",
        correct: "c"
    }, {
        question: "Finish this: When Maja gets upset with something / someone she ______",
        a: "Cries",
        b: "Fights",
        c: "Confronts the problem",
        d: "Ignores it",
        correct: "c"
    }, {
        question: "What's the one thing Maja could always eat",
        a: "Eggs",
        b: "Fries",
        c: "Spinach",
        d: "Fish",
        correct: "d"
    }
]

const questionText = document.querySelector(".questionText");
const result = document.getElementById("result");
const submitBtn = document.querySelector(".submitButton");
const container = document.querySelector(".container");

let counter = 0;
let score = 0;

//Display first question at the start:
const displayQuestion = () => {
    return `<form>
                <p class="questionText">${questions[counter].question}</p>
                    <div class="question">
                        <input type="radio" name="option" id="a"><label for="a">${questions[counter].a}</label>
                    </div>
                    <div class="question">
                        <input type="radio" name="option" id="b"><label for="b">${questions[counter].b}</label>
                    </div>
                    <div class="question">
                        <input type="radio" name="option" id="c"><label for="c">${questions[counter].c}</label>
                    </div>
                    <div class="question">
                        <input type="radio" name="option" id="d"><label for="d">${questions[counter].d}</label>
                    </div>
                    <button class="submitButton" type="button" onclick="next()">Submit</button>
            </form>`;
}

//Reset button event listener:
const resetBtn = () => {
    location.reload();
} 

//Get selected buttons function:
 const getSelected= () => {
    const buttons = document.querySelectorAll("input[type=radio]");
    let answer= undefined;

    buttons.forEach((btn) => {
        if(btn.checked) {
            answer = btn.id
        }
    });

    return answer;
}

//Onclick function:
const next = (e) => {
    let answer = getSelected();

    if(answer) {
        if(answer === questions[counter].correct) {
            score++;
        }

        counter++;

        if(counter < questions.length) {
            let nextQuestion = displayQuestion();
            container.innerHTML = nextQuestion;
        } else {
            result.innerHTML = `<h2>You got ${score} / ${questions.length} correct.</h2>
                                <button class="btnVisible" onclick="resetBtn()">Restart</button>`
        }
    } else {
        alert("You must choose one answer!");
    }
} 

//Get first question function:
const getFirstQuestion = () => {

    const firstQuestion = displayQuestion();
    container.innerHTML = firstQuestion;
}

//OnReady function:
const onReady = () => {
    getFirstQuestion();
  };
  if (document.readyState !== "loading") {
    onReady();
  } else {
    document.addEventListener("DOMContentLoaded", onReady);
  }
  
