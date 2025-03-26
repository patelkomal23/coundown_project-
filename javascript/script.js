let time = 86400;
let Timer = () => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    document.getElementById('timer').innerText = ` ${hours}h ${minutes}m ${seconds}s`;
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

let quote = document.getElementById('quote-text');
let footer = document.getElementById('quote-author');

const quotes = [
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { text: "Champions keep playing until they get it right.", author: "Billie Jean King" },
    { text: "The only way to prove you are a good sport is to lose.", author: "Ernie Banks" },
    { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
    { text: "Never say never because limits, like fears, are often just an illusion.", author: "Michael Jordan" }
];

let sportQuote = () => {
    let index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index].text;
    footer.innerHTML = quotes[index].author};
sportQuote();
setInterval(() => {
    sportQuote();

}, 1000);
