//VARIABLES

const go = document.querySelector(".go");
const roulette = document.querySelector(".roulette-img");
const back = document.querySelector(".back");
const form = document.querySelector(".form");

//BACK

back.addEventListener("click",()=>{
    window.open("../html/main.html");
    window.close("../html/roulette.html");
});

//GO

go.addEventListener("click",()=>{
    roulette.style.transform += "rotate(360deg)";
}); 

//GET-RESULT

const getResult = (number)=>{
    let numberChoose = number.value;
    let numberRandom = Math.floor(Math.random()*36);
    console.log(numberRandom);

    if(numberChoose == numberRandom){
        alert("WIN");
        alert(`WINNING NUMBER: ${numberRandom}`);
    }else{
        alert("LOSE");
        alert(`WINNING NUMBER: ${numberRandom}`);
    };
};

//NUMBER

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const {number} = e.target;
    setTimeout(() => {
        getResult(number);
    }, 4000);
});