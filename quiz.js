'use strict';
document.getElementById('next').disabled = true;
document.getElementById('next').classList.remove("next");
let score = 0;
let button1 = document.getElementById("wrongAnswer1");
let button2 = document.getElementById("correctAnswer");
let button3 = document.getElementById("wrongAnswer2");
let button4 = document.getElementById("wrongAnswer3");
function correct() {
    score += 1;
    console.log(score);
    button2.classList.remove("answer");
    button2.classList.add("correct");
    button1.classList.remove("answer");
    button3.classList.remove("answer");
    button4.classList.remove("answer");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    document.getElementById('next').disabled = false;
    document.getElementById('next').classList.add("next");
};
function wrong() {
    score = score;
    console.log(score);
    button2.classList.remove("answer");
    button2.classList.add("correct");
    button1.classList.remove("answer");
    button1.classList.add("wrong");
    button3.classList.remove("answer");
    button3.classList.add("wrong");
    button4.classList.remove("answer");
    button4.classList.add("wrong");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    document.getElementById('next').disabled = false;
    document.getElementById('next').classList.add("next");
};
const questions = [{
    question1: {
        q: 'what is the fastest animal on earth?',
        options: ['Human', 'Leopard', 'Fox', 'Lion'],
    },
}, {
    question2: {
        q: 'What is the largest animal on earth?',
        options: ['Elephant', 'Bluewhale', 'Girafee', 'Lion'],
    },
}, {
    question3: {
        q: 'Which of the following is Carnivores?',
        options: ['Human', 'Lion', 'Goat', 'Deer'],
    },
}];
let question;
let option1;
let option2;
let option3;
let option4;
question = document.getElementById("question").textContent;
option1 = document.getElementById("wrongAnswer1").textContent;
option2 = document.getElementById("correctAnswer").textContent;
option3 = document.getElementById("wrongAnswer2").textContent;
option4 = document.getElementById("wrongAnswer3").textContent;
let questionCurrent;
let index = 0;
function nextIndex() {
    questionCurrent = questions[index];
    index += 1;
    if (index < questions.length) {
        nextquestion();
        clean();
    } else if (index == questions.length) {
        document.getElementById("next").value = "Submit";
        nextquestion();
        clean();
    } else {
        console.log(score);
        resetPage();
        addPage();
    };
};
function nextquestion() {
    let [{ q, options }] = Object.values(questionCurrent);
    question = q;
    [option1, option2, option3, option4] = options;
    document.getElementById("question").textContent = question;
    document.getElementById("wrongAnswer1").textContent = option1;
    document.getElementById("correctAnswer").textContent = option2;
    document.getElementById("wrongAnswer2").textContent = option3;
    document.getElementById("wrongAnswer3").textContent = option4;
};
function clean() {
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button2.classList.remove("correct");
    button2.classList.add("answer");
    button1.classList.remove("wrong");
    button1.classList.add("answer");
    button3.classList.remove("wrong");
    button3.classList.add("answer");
    button4.classList.remove("wrong");
    button4.classList.add("answer");
    document.getElementById('next').disabled = true;
    document.getElementById('next').classList.remove("next");
};
function resetPage() {
    document.getElementById("question").remove();
    document.getElementById("wrongAnswer1").remove();
    document.getElementById("correctAnswer").remove();
    document.getElementById("wrongAnswer2").remove();
    document.getElementById("wrongAnswer3").remove();
};
function addPage() {
    document.getElementById("box").classList.add("scored");
    document.getElementById("box").innerHTML = `your score is ${score}/${questions.length + 1}`;
};