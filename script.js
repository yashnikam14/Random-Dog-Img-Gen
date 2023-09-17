const dogBtn = document.getElementById('dogBtn');
const dogImg = document.getElementById('dogImg');

const displayDog = () => {
    //url to fetch the data from api
    fetch('https://dog.ceo/api/breeds/image/random')
    //returns a promise
    .then(Response => Response.json())
    //gets data into json format
    .then(json => 
        {
            dogImg.innerHTML=`<img src='${json.message}' style='width:100%'></img>`
            console.log({json})
        });
}

//onclick function to display the dog images
dogBtn.onclick=()=>{
    displayDog();
}