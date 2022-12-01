let score = 0;
const question = 10;
document.getElementById(`quiz`).addEventListener(`submit`, calculateScore);

function calculateScore() {
    // Make sure that the original result paragraph, if any, is removed
    if (document.getElementById(`resultPara`)) {
        document.getElementById(`resultPara`).remove();
    }
        
    // Question 1
    if (document.getElementById(`q1c`).checked) {
        score++;
    }

    // Question 2
    if (document.getElementById(`q2b`).checked) {
        score++;
    }

    // Question 3
    if (document.getElementById(`q3a`).checked && document.getElementById(`q3c`).checked && document.getElementById(`q3d`).checked && !document.getElementById(`q3b`).checked && !document.getElementById(`q3e`).checked) {
        score++;
    }

    // Question 4
    if (document.getElementById(`q4a`).checked && document.getElementById(`q4b`).checked && !document.getElementById(`q4c`).checked && !document.getElementById(`q4d`).checked && !document.getElementById(`q4e`).checked) {
        score++;
    }

    // Question 5
    if (document.getElementById(`q5d`).checked) {
        score++;
    }

    // Question 6
    if (document.getElementById(`q6c`).checked) {
        score++;
    }

    // Question 7
    if (Number(document.getElementById(`q6c`).value) === 1967) {
        score++;
    }

    // Question 8
    if (document.getElementById(`q8c`).checked) {
        score++;
    }

    // Question 9
    if (document.getElementById(`q9a`).checked) {
        score++;
    }

    // Question 10
    if (document.getElementById(`q10b`).checked) {
        score++;
    }

    // Invoke displayResult() to create the HTML element for displaying result
    displayResult();
}

function displayResult() {
    // Create the result paragraph element
    // Include class and id attributes
    let resultPara = document.createElement(`p`);
    let result = ``;
    if (score === 1) {
        result = document.createTextNode(`You have got ${score} correct answer from the ${question} questions!`);
    } else {
        result = document.createTextNode(`You have got ${score} correct answers from the ${question} questions!`);
    }
    resultPara.appendChild(result);
    resultPara.classList.add(`resultdisplay`);
    resultPara.setAttribute(`id`, `resultPara`);
    document.getElementById(`quiz`).appendChild(resultPara);

    // Reset the score to 0
    score = 0;
}