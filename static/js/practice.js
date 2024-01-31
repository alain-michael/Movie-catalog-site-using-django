const logo = document.querySelector("#searchBar");
const search = document.createElement('input');
const navBar = document.querySelector('#navBar');
const login = document.querySelector('#account');
const popup = document.querySelector('.login');
const waiting = document.querySelector('#randtext');
const userName = document.querySelector('#userName');
const passWord = document.querySelector('#passWord');
search.setAttribute('type', 'text');
search.setAttribute('id', 'trams')
search.setAttribute('placeholder', 'Search');
search.setAttribute('class', 'inputField')
console.log(search)
function rotate() {
    logo.style.transform = 'rotate(134deg)';
    logo.style.transition = 'transform 1s ease, translate 1s ease 0.8s, opacity 1s ease 0.8s';
    logo.style.translate = '-80px 0';
    logo.style.opacity = '0';
    setTimeout( () => logo.replaceWith(search), 2000);
    let x = window.matchMedia("(max-width: 520px)");
    if(x.matches){
        search.animate([
            {width: '0'},
            {width: '80vw'}
        ], {
            duration: 400,
            fill: 'both',
            delay: 2000
        });
    }
    else {
        console.log("didn't work")
        search.animate([
            {width: '0'},
            {width: '20vw'}
        ], {
            duration: 400,
            fill: 'both',
            delay: 2000
        });
    }
}
function loginPage() {
    overlay = document.createElement('div')
    overlay.setAttribute('class', 'overlay')
    overlay.style.position = 'absolute';
    overlay.style.top = '0'
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = '0.6';
    document.body.append(overlay);
    popup.style.display = 'block';
    popup.style.zIndex = '2';
    popup.animate([
        {left: '-100%'},
        {left: '0'}
    ],{
        duration: 1000,
        fill: 'forwards',
        easing: 'ease-out',
    })
    overlay.addEventListener('click', () => {popup.animate([
        {left: '-100%'},
        {left: '0'}
    ],{
        duration: 1000,
        fill: 'forwards',
        easing: 'ease-out',
        direction: "reverse"
    });setTimeout( () => overlay.remove(), 1000)})
}
logo.addEventListener('click', rotate)
login.addEventListener('click', loginPage)
let message = ''
let pmessage = ''
let loginStatus = false;
function checkPassword() {
    if(userName.value.length < 1 && message != "<div style='color: brown'>Username can't be empty</div>") {
        message = "<div style='color: brown'>Username can't be empty</div>"
        userName.insertAdjacentHTML('afterEnd', message)
    }
    if(passWord.value.length < 1 && pmessage != "<div style='color: brown'>Password can't be empty</div>"){
        pmessage = "<div style='color: brown'>Password can't be empty</div>"
        passWord.insertAdjacentHTML('afterEnd', pmessage)
    }
    if(passWord.value.length >= 1 && userName.value.length >= 1) {
        if(userName.value == "Michael" && passWord.value == "123"){
            alert('you are now logged in')
            loginStatus = true
            displayMessage()
            
        }
        else{
            alert("incorrect identifiers")
        }
    }
}
var timeoutId;
var timeoutId2;
var timeouts = []
function displayMessage() {
    let welcomeMessage;
    if(loginStatus){
        for(item of timeouts) {
            clearTimeout(item)
        }
        welcomeMessage = `Welcome to my movie catalog site ${userName.value}.`;
    }
    else {
        welcomeMessage = 'Welcome to my movie catalog site. Log-in to get personalized recs.';
    }
    for(let i=0; i<welcomeMessage.length; i++) {
        waiting.innerHTML = '';
        timeoutId = setTimeout( () => waiting.innerHTML += welcomeMessage[i], i*80);
        timeouts.push(timeoutId)
    }
    timeoutId2 = setTimeout( () => waiting.innerHTML += '<span class="waiting">|</span>', welcomeMessage.length*80);
    timeouts.push(timeoutId2)
}
displayMessage();
