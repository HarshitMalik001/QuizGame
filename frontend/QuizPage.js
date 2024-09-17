let timer;
let timeLeft = 300; // Time in seconds (5 minutes)

function updateTimer() {
    const timerElement = document.getElementById("timer");
    if (timeLeft <= 0) {
        clearInterval(timer);
        // Handle time out scenario
        return;
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
}


function myFunctionnext(a)
{
    document.getElementById(`quiz${a}`).style.display = "none";
    // console.log();
    document.getElementById(`quiz${parseInt(a) +1 }`).style.display = "block";
}

function myFunctionprev(a)
{
    // console.log(a);
    document.getElementById(`quiz${a}`).style.display = "none";
    // console.log(`quiz${a - 1}`);
    document.getElementById(`quiz${parseInt(a) - 1}`).style.display = "block";
}


function displayTheQuiz() {
    var profileItems = JSON.parse(sessionStorage.getItem('MyQuestions'));

    if (profileItems == undefined) {
        console.error('No quiz questions found or invalid format.');
        var ParentBox = document.getElementById("Parent-Box");
        ParentBox.innerHTML = `
        SOMETHING WENT WRONG PLEASE TRY AGAIN
        `
        return;
    }

    var ParentBox = document.getElementById("Parent-Box");

    ParentBox.innerHTML += `
    <div class="timer" id="timer">5:00</div>
    `;

    profileItems.forEach((cur, ind) => {
        var quizBox = document.createElement("div");
        quizBox.className = "quiz-container";
        quizBox.id = `quiz${ind + 1}`;

        var next = ``;
        var prev = ``;

        if(ind != 0)
        {
            prev = `<button id="prev${ind + 1}" value="${ind + 1}" onclick="myFunctionprev(this.value)" >Prev</button>`
        }
        if(ind != profileItems.length - 1)
        {
            next = `<button id="Next${ind + 1}" value="${ind + 1}" onclick="myFunctionnext(this.value)" >Next</button>`
        }
        quizBox.innerHTML = `
        <div class="quiz-header">
        <h2 id="question${ind + 1}">Q${ind + 1}. ${cur.Question}</h2>
      </div>
      <ul>
        <li>
          <input type="radio" name="answer${ind + 1}" id="a${ind + 1}" class="answer">
          <label for="a${ind + 1}" id="a_text${ind + 1}">${cur.Correct_Answer}</label>
        </li>
        <li>
          <input type="radio" name="answer${ind + 1}" id="b${ind + 1}" class="answer">
          <label for="b${ind + 1}" id="b_text${ind + 1}">${cur.Incorrect_Answers[0]}</label>
        </li>
        <li>
          <input type="radio" name="answer${ind + 1}" id="c${ind + 1}" class="answer">
          <label for="c${ind + 1}" id="c_text${ind + 1}">${cur.Incorrect_Answers[1]}</label>
        </li>
        <li>
          <input type="radio" name="answer${ind + 1}" id="d${ind + 1}" class="answer">
          <label for="d${ind + 1}" id="d_text${ind + 1}">${cur.Incorrect_Answers[2]}</label>
        </li>
      </ul>
      ${prev}
      ${next}
        `
        ParentBox.appendChild(quizBox);
    });

    timer = setInterval(updateTimer, 1000); 

}

displayTheQuiz();