import './style.css'

const btnEl = document.getElementById ("btn");
const jokeEl = document.getElementById ("joke-place");

btnEl.addEventListener("click",async ()=>{
    const response = await fetch("https://v2.jokeapi.dev/joke/Any",{
        method:"GET",
    });
    const data=await response.json();
    console.log(data);
    if (data.setup){
        jokeEl.innerHTML=data.setup;
    }else{
        jokeEl.innerHTML=data.joke;
    }
})