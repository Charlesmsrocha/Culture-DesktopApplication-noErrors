/**Inserting an event listener for a click in login button */

document.querySelector('#goindex').addEventListener('click', () => {
    signupusername = document.getElementById('signupusername').value;
    alert("Thank you for join us " + signupusername + "!");
    window.location.href="homescreen.html";
    })

