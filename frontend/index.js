// import { myData } from "./data/data";


const myData = [
    {title:"General Knowledge Quiz", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://www.themanthanschool.co.in/blog/wp-content/uploads/2019/12/general-knowledge.jpg",category : 9},

    {title:"General Knowledge Quiz", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 15, time : 450, imgLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqyhfzb3V1YvhoRUCk7t8b71IlYHHTjPNxg&s",category : 9},

    {title:"General Knowledge Quiz", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 20, time : 600,imgLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrsM5fkK4h676xn1CprWiVCcKTvLEFGGBTA&s",category : 9},

    {title:"Sports ", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhg2mLFAqpgulGhfvnLSmBg2fRFkB3tGEZQ&s",category : 21},

    {title:"Sports ", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 15, time : 450, imgLink : "https://static1.squarespace.com/static/58ee0b551e5b6c8ff18b94ad/58ee41fa414fb5fa31858382/62fe887fb367333c1deca022/1716972818473/sports+quiz+questions+and+answers.jpg?format=1500w",category : 21},  

    {title:"Sports ", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 20, time : 600,imgLink : "https://img.jagranjosh.com/images/2024/January/2112024/indian-sports.jpg",category : 21},

    {title:"History", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 20, time : 600,imgLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDtwg7SiWaysHs5qmhMMw_eCiMxM-WkD1Xw&s",category : 23},

    {title:"History", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Mh-GNWBiaY_VzO3ggHkMBBo7GB4cNZ_OhQ&s",category : 23},

    {title:"Animal", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://kwizzbit.com/wp-content/uploads/2023/02/animal.jpg.webp",category : 27},

    {title:"Entertainment: Film", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://usf.no/wp-content/uploads/filmquiz-1.jpg",category : 11},

    {title:"Entertainment: Music", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://assets.genially.com/s3fs-public/Musical%20quizen.png?VersionId=x57QFrKcI_ulgW5V2By_eaH3Ml3rcSTn",category : 12},

    {title:"Entertainment: Video Games", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2wN6zZwcYPnAQgB5vt6h6cJ6DxgLcw-wjQ&s",category : 15},

    {title:"Actors ", from : "9:00 AM" , to : "9:00 PM",NoOfQuestions : 10, time : 300, imgLink : "https://cdn.images.express.co.uk/img/dynamic/79/750x445/1279824.jpg",category : 26},
]


var isLogged = localStorage.getItem('isLogged');

function checkLogged()
{
    if(isLogged)
    {
        document.getElementById("UserName").innerHTML = `${localStorage.getItem('current_user')}`
    }
}

function CheckLogIn()
{
    console.log("I am clard");
    if(isLogged)
    {
        window.location.href = "AllResult.html";
    }
    else
    {
        window.location.href = "login.html";
    }
}

checkLogged();


function myFuction(a)
{
    // console.log(a);
    // return;
    fetch(`https://opentdb.com/api.php?amount=${a.NoOfQuestions}&category=${a.category}&difficulty=easy&type=multiple`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
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
        sessionStorage.removeItem('CurRemainTime');
        sessionStorage.setItem('CurRemainTime', a.time);
        
        // alert(a.time);
        // alert(sessionStorage.getItem('CurRemainTime'));
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
        var stringContent = JSON.stringify({
            time : data.time,
            NoOfQuestions : data.NoOfQuestions,
            category : data.category
        });

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
                  <button class="playButton" onclick='myFuction(${stringContent})' >Play</button>
              </div>
          </div>
      </div>`
        myMainBox.appendChild(quizBox);
    })
}

fillQuizMain();