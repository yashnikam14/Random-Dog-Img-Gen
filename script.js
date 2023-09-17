const dogBtn = document.getElementById('dogBtn');
const dogImg = document.getElementById('dogImg');

const displayDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(Response => Response.json())
    .then(json => 
        {
            dogImg.innerHTML=`<img src='${json.message}' style='width:100%'></img>`
            console.log({json})
        });
}

dogBtn.onclick=()=>{
    displayDog();
}