const radomDogsElement = document.querySelector('.random-dogs');
const button = document.querySelector('.button');

const API = 'https://dog.ceo/api/breeds/image/random/3';
function OpenImage(){
  const image = document.querySelector('#image');
    const current = image.src; 
}

async function getRandomDogs(){
  radomDogsElement.innerHTML = '';
const res = await fetch(API)
    const json = await res.json();
    console.log(json.message) 


json.message.forEach(dogImage => {
  radomDogsElement.innerHTML += `
  <div class="column">
  <div class="card">
  <div class="card-image">
    <figure class="image ">
      <img src="${dogImage}" onClick="OpenImage()" id="image" alt="Placeholder image">
    </figure>
  </div>
  </div>
  `
});
}
button.addEventListener('click', getRandomDogs);