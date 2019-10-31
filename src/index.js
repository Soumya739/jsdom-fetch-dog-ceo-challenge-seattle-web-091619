console.log('%c HI', 'color: firebrick')
const breedURL = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", () => {
   console.log("This page exists");
   fetchImages();
   getBreed();
});
function fetchImages(){
   const imgURL = "https://dog.ceo/api/breeds/image/random/4"
   fetch(imgURL)
   .then(function(response) {
       responseToJson = response.json();
       return responseToJson;
   })
   .then(function(json) {
       console.log(json)
       renderImages(json)
   });
}

function renderImages(dogs){
  let dogImage = document.getElementById("dog-image-container")
  for(let i = 0; i < dogs.message.length; i++){
    let message = dogs.message[i];
    let image = document.createElement('img')
    image.src = message
    dogImage.appendChild(image)
  }
}


function getBreed(){
   return fetch(breedURL)
   .then(function(response) {
       return response.json();
   })
   .then(function(json) {
       console.log(json)
       renderBreed(json)
       changeColorOnClick();
       filterBreedNames();
   });
}

function renderBreed(breeds){
  let breedInfo = document.getElementById("dog-breeds");
  let breed = breeds.message
  for(const key in breed) {
      let breedName = key
      // let li = document.createElement('li');
      let li = document.createElement('li');
      li.textContent = breedName
      breedInfo.appendChild(li);
  }
}


function changeColorOnClick(){
   let dogBreeds = document.getElementById("dog-breeds");
   let liTexts = dogBreeds.getElementsByTagName('li')
   console.log(liTexts)
   console.log('length',liTexts.length)
   for(const element of liTexts){
       element.addEventListener('click', () =>{
         element.style.color = "red"
       })
   }
   console.log("color Changed!!")
}


function filterBreedNames(){
   let select = document.getElementById('breed-dropdown')
   select.addEventListener('change', () =>{
     if (select.value === "a"){
       console.log("aaaaa")
       getBreed()
       .then(() => {
         getBreedByLetter("a")
       })
     }
     if (select.value === "b"){
       console.log("bbbbbbbbb")
       getBreed()
       .then(() => {
         getBreedByLetter("b")
       })
     }
     if (select.value === "c"){
       console.log("ccccc")
       getBreed()
       .then(() => {
         getBreedByLetter("c")
       })
     }
     if (select.value === "d"){
       console.log("ddddddd")
       getBreed()
       .then(() => {
         getBreedByLetter("d")
       })
     }
   })
   console.log(select)
}

function getBreedByLetter(letter){
  let dogBreeds = document.getElementById("dog-breeds");
  let liTexts = dogBreeds.getElementsByTagName('li')
  let arrayOfMatchedWords = []
  for(const element of liTexts){
    console.log(element['textContent'])
      if (element['textContent'].startsWith(letter)) {
        arrayOfMatchedWords.push(element['textContent'])
      }
  }
  console.log("You got it")
  console.log(arrayOfMatchedWords)
  clearList()
  renderNewList(arrayOfMatchedWords)
}

function clearList(){
  let list = document.getElementById("dog-breeds");
  list.innerHTML = ''
}

function renderNewList(array){
  let breedInfo = document.getElementById("dog-breeds");
  for (const element of array){
    let breedName = element
    let li = document.createElement('li');
    li.textContent = breedName
    breedInfo.appendChild(li);
  }
}
