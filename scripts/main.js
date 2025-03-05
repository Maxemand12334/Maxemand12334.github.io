let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.addEventListener("click", () =>{
    setUserName();

});

function setUserName(){
    const myName = prompt("please enter your name.");
    if (!myName){setUserName()}else{
    localStorage.setItem("name",myName);
    myHeading.textContent = `Hey ${myName}, you are visiting Kennys hotdog image website!`}
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hey ${storedName}, you are visiting Kennys hotdog image website`
};

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "images/kennyHotdog.jpg")
        {myImage.setAttribute("src","images/yeah.png");     
        } else {
            myImage.setAttribute("src","images/kennyHotdog.jpg");
                }
});


