const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const button = document.querySelector("#new-quote");

button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicked!");
    quote.innerHTML = "<em>Loading...</em>";
    person.innerHTML = "<em>Loading...</em>";

    const random = Math.floor(Math.random()*1643);

    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(q => {
        const obj = q[random];
        quote.innerHTML = obj['text'];
        person.innerHTML = obj['author'];
    })
});