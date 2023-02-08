//variables

const allGames = document.querySelector(".all-games");
const title = document.querySelector(".title");
const welcome = document.querySelector(".welcome");

//NAME

let userName = localStorage.getItem("name");
welcome.textContent = `Welcome ${userName}`;

//DATA

const json = [
    {
        "id": 1,
        "img": "../assets/loteria.gif",
        "title": "LOTTERY"
    },
    {
        "id": 2,
        "img": "../assets/roulette.gif",
        "title": "ROULETTE"
    },  
    {
        "id": 3,
        "img": "../assets/slot.gif",
        "title": "SLOT MACHINE"
    }  
]

for(let item of json){
    allGames.innerHTML += `
        <div class="div-card">
            <img id=${item.id} class="image-card" src="${item.img}" alt="img-game"/>
            <p class="title-card">${item.title}</p>
        </div>
    `;
};

//ROUTES

allGames.addEventListener("click",(e)=>{
    if(e.target.id == 1){
        window.open("../html/lottery.html");
        window.close("../html/index.html");
    }else if(e.target.id == 2){
        window.open("../html/roulette.html");
        window.close("../html/index.html");
    }else if(e.target.id == 3){
        window.open("../html/slot.html");
        window.close("../html/index.html");
    }/*else if(e.target.id == 4){
        window.open("../html/lottery.html");
        window.close("../html/index.html");
    };*/
});



