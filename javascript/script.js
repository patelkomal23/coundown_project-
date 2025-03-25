let time = 86400;
let Timer = () => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    document.getElementById('timer').innerText = `Event Starts In: ${hours}h ${minutes}m ${seconds}s`;
    if (time > 0)
        time--;
}
setInterval(Timer, 1000);



let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-item");
function currSlide(n) {
    displaySlide(slideIndex + n);
}


function displaySlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slides[slideIndex].classList.add("active");
}

displaySlide(slideIndex);
setInterval(() => {
    currSlide(1);
}, 2000);



let quote = document.querySelector('.blockquote p');
let footer = document.querySelector('.blockquote-footer');

const sportsQuotes = [
    "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Champions keep playing until they get it right. – Billie Jean King",
    "The only way to prove you are a good sport is to lose. – Ernie Banks",
    
];

console.log(sportsQuotes);

let  changeQuote=()=>{
    let index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index].quote;
    footer.textContent = quotes[index].author;    
}
changeQuote();
setInterval(() => {
    changeQuote();

}, 1000);
