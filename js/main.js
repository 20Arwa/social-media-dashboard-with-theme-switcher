// Call Elements
let body = document.querySelector("body");
let toggle = document.querySelector("header > div:last-of-type > div");
let followers = document.querySelectorAll(".followers > div");
let overview = document.querySelectorAll(".overview > .content > .square");
let p = document.querySelectorAll("p");
let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");
// Dark Mood
function darkMood() {
    body.classList.add("dark");
    toggle.classList.add("dark");
    followers.forEach(ele => ele.classList.add("dark"));
    overview.forEach(ele => ele.classList.add("dark"));
    p.forEach(ele => ele.style.color = "hsl(228, 34%, 66%)");
    h1.forEach(ele => ele.style.color = "white");
    h2.forEach(ele => ele.style.color = "white");
}
// Light Mood
function lightMood() {
    body.classList.remove("dark");
    toggle.classList.remove("dark");
    followers.forEach(ele => ele.classList.remove("dark"));
    overview.forEach(ele => ele.classList.remove("dark"));
    p.forEach(ele => ele.style.color = "hsl(228, 12%, 44%)");
    h1.forEach(ele => ele.style.color = "#000000");
    h2.forEach(ele => ele.style.color = "#000000");
}
// On Click To Change Mood
toggle.addEventListener("click", function(){
    if (body.classList.contains("dark") == false){
        darkMood();
        window.localStorage.setItem("mood", "dark")
    }
    else {
        lightMood();
        window.localStorage.removeItem("mood")
    }
})
// Check If User Choose Dark Mood Befor
window.localStorage.getItem("mood") == "dark" ? darkMood() : lightMood();