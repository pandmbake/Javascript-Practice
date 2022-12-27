const randomWords = [
    "cat",
    "dog",
    "coffee",
    "music",
    "dance",
    "guitar",

];

//sets up random word
function produceWord () {
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

//This function takes the random word and assigns it to the element that will display it (creats the innerHTML)
function changeInnerHTML () {
  const randomWord = produceWord();
  document.getElementById('result').innerHTML = randomWord;

}

//This section makes the button functional 
const button = document.getElementById('button');
button.addEventListener('click', changeInnerHTML);

