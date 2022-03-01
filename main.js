// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.getElementsByClassName("like-glyph");
  Array.from(elements, (x) => x.addEventListener("click", checkHearts));
});

function checkHearts(event) {
  let heart = event.target;
  console.log(heart)
  mimicServerCall("http://mimicServer.example.com")
  .then(() => {
    if(heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART
      heart.classList = "activated-heart"
      } else {
        heart.innerHTML = EMPTY_HEART
        // heart.className = ""
        heart.classList.remove('activated-heart')
    }
  })  
  .catch((error) => {
    modal.classList.remove("hidden")
    setTimeout(() => {modal.className = "hidden"}, 3000);
  })
    
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
