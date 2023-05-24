/**Inserting an event listener for a click in login button */

document.querySelector('#login').addEventListener('click', () => {
    username = document.getElementById('username').value;
    alert("Welcome " + username + " !");
    window.location.href='views/homescreen.html';
    })

