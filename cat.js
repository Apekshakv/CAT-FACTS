const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.getElementById('message');
const  fool=document.getElementById('ape');
const btn = document.querySelector("#reed");

const getFacts = async () => {
    console.log("getting facts...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.textContent =  data[0].text;
};

const Facts = async () => {
    console.log("getting facts...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.textContent =  data[1].text;
};
const geek = async () => {
    console.log("getting facts...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
   fool.textContent =  data[2].text;
};

const handleButtonClick = () => {
    setTimeout(() => {
        getFacts();
        geek();
    }, 1000);
};
btn.addEventListener("click", handleButtonClick);
btn.addEventListener("dblclick", () => {
    setTimeout(Facts,5000); 
});

