
//  ---
function convertTo12HourFormat(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const convertedHours = hours % 12 || 12; 
    const formattedTime = `${convertedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    return formattedTime;
}


document.getElementById("Create-own-Quest").addEventListener('submit', (event)=>{
    event.preventDefault();

    var info = {
        title : document.getElementById('Title').value,
        from : convertTo12HourFormat(document.getElementById('From').value),
        to : convertTo12HourFormat(document.getElementById('From').value),
        NoOfQuestions : parseInt(document.getElementById('NoOfQuestions').value),
        time : parseInt(document.getElementById('Time').value),
        imgLink : document.getElementById('ImgLink').value,
        category : document.getElementById('category').value,
        createdby : localStorage.getItem('current_user')
    }
    // console.log(document.getElementById('From').value, document.getElementById('To').value);
    if(document.getElementById('From').value > document.getElementById('To').value)
    {
        alert("From can't be Greater than to");
        return ;
    }

    var MyQuestions = JSON.parse(localStorage.getItem('MyQustions')) || [];

    MyQuestions.push(info);

    localStorage.setItem('MyQustions', JSON.stringify(MyQuestions));

    window.location.href = "index.html";

})