// import { myData } from "./data/data";

const myData = [
    {title:"General Knowledge Quiz", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://www.themanthanschool.co.in/blog/wp-content/uploads/2019/12/general-knowledge.jpg"},
    {title:"General Knowledge Quiz", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 15, time : 450, imgLink : "https://www.themanthanschool.co.in/blog/wp-content/uploads/2019/12/general-knowledge.jpg"},
    {title:"General Knowledge Quiz", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 20, time : 600,imgLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrsM5fkK4h676xn1CprWiVCcKTvLEFGGBTA&s"},
    
]


function myFuction()
{
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        const questions = data.results;
        const arrOfQuestions = [];

        questions.forEach(question => {
            arrOfQuestions.push({
                Question: question.question,
                Correct_Answer: question.correct_answer,
                Incorrect_Answers: question.incorrect_answers
            })
        });
        sessionStorage.setItem('MyQuestions', JSON.stringify(arrOfQuestions));
        window.location.href = 'QuizPage.html';
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
    

}

function fillQuizMain()
{
    var myMainBox = document.getElementById("quizmain");

    myData.forEach((data)=>{
        var quizBox = document.createElement("div");
        quizBox.className = "quizBox";
        quizBox.innerHTML = `<div class="quizImage">
          <img src="${data.imgLink}" alt="${data.title} Image">
      </div>
      <div class="quizContent">
          <h3 class="quizTitle">${data.title}</h3>
          <div class="quizTime">
              <div>From :<span class="quizStartTime">${data.from}</span></div>
              <div>to <span class="quizEndTime">${data.to}</span></div>
          </div>
          <div class="quizDetails">
              <div class="quizInfo">
                  <div class="quizQuestions">${data.NoOfQuestions} Questions</div>
                  <div class="quizDuration">${data.time} sec Duration</div>
              </div>
              <div class="quizPlayButton">
                  <button class="playButton" onclick="myFuction()" >Play</button>
              </div>
          </div>
      </div>`
        myMainBox.appendChild(quizBox);
    })
}

fillQuizMain();