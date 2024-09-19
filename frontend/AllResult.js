
function getCurrentUsersResult()
{
    var result = JSON.parse(localStorage.getItem('result')) || [];

    var usernam = localStorage.getItem('current_user');
    var passw = localStorage.getItem('current_pass');
    // var resulttofind = localStorage.getItem('resulttofind');


    var myresult;
    var myscore;
    var time;
    var TypeId;
    for (i of result) {
        if (usernam == i.name && passw == i.pass) {
            myresult = i.resul;
            myscore = i.score;
            TypeId = i.TypeId;
            time = i.time;
        }
    }

    console.log("Current User", usernam);
    console.log("Total Test Attempted: ", myresult.length);
    console.log(myresult);
    console.log(myscore);
    console.log(time);
    console.log(TypeId);

}

getCurrentUsersResult();
