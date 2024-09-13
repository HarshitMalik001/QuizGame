function fun1(){
    let info ={
        name:document.getElementById("name").value,
        mail : document.getElementById("mail").value,
        pass : document.getElementById("password").value
    }

    var profileItems = JSON.parse(localStorage.getItem('profile')) || [];

    profileItems.push(info);

    localStorage.setItem('profile', JSON.stringify(profileItems));
}


document.getElementById('signupform').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var passw = document.getElementById("password").value;
    var cpassw = document.getElementById("cpassword").value;
    
    if(passw==cpassw){
        fun1();
        window.location.href = 'login.html';
    }
    else{
        alert("Password Does'nt match");
    }
}
);
