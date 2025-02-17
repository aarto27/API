let btn = document.querySelector("button");
let result = document.querySelector("#result");
let dog = document.querySelector("#dog");
let img = document.querySelector('img');
let url2 = "https://dog.ceo/api/breeds/image/random";

//Get random cat fact
btn.addEventListener("click", async () => {
    
    let fact = await getFact();
    console.log(fact);
    result.innerHTML = fact;
    result.style.display = "block";
    
});


let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.log();
        return "No fact found";
    }
};

// Get random dog images
async function getDog() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (error) {
        console.log();
        return "No Dog image found";
    }
};
dog.addEventListener("click", async () =>{
    let dogFact = await getDog();
    console.log(dogFact);
    img.src = dogFact;
    img.style.display = "block";
});

let url3 = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         // const header = { accept: "application/json" };
//         let res = await axios.get(url3);
//         console.log(res);
//         // return res.data;
//     } catch (error) {
//         console.log();
//         return "No joke found";
//     }
// };

// Get random jokes
async function getJokes() {
    try {
        const headers = { accept: "application/json" }; 
        let res = await fetch(url3, { headers });  
            const data = await res.json();  
            return data.joke;
    } catch (error) {
        console.log(error);
        return "No joke found";
    }
};

let p = document.querySelector("#jokes");
let joke =document.querySelector("#joke-btn");

joke.addEventListener("click", async () => {
    
    let fact = await getJokes();
    p.innerHTML = fact;
    p.style.display = "block";
    
});

// List of universities.
let uniLink = "http://universities.hipolabs.com/search?name=";
let uniBtn = document.querySelector("#university-btn");


uniBtn.addEventListener("click", async () =>{
    let input = document.querySelector("#input").value;
    list.innerText = "";  
    console.log(input);
   let colArr = await getColleges(input);
   show(colArr);
});

function show (colArr){
    let list = document.querySelector("#list");
    for ( col of colArr ) {
        console.log(col.name);
        let li = document.createElement("li");
        li.textContent = col.name;
        list.appendChild(li);
    }
}

async function getColleges(input) {
    try {
        let res = await axios.get(uniLink + input);
        return res.data;
    } catch (error) {
        console.log();
        return "No college found";
    }
};