let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


async function short(){
    let oldLink = document.getElementById("oldlink").value;
    let newLink = document.getElementById("newlink");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${oldLink}`);
    const data = await result.json();

    newLink.value = data.result.short_link2;




let newURL = document.getElementById("newlink");
let copyButton = document.getElementById("copy");


copyButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}
}