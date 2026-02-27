const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const inputs = document.querySelectorAll("input");
    const email = inputs[0].value;
    const fullname = inputs[1].value;
    const username = inputs[2].value;
    const password = inputs[3].value;

    if(email === "" || fullname === "" || username === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Account Created Successfully 🚀");

});