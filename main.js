// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const articleHeartLikes = document.querySelectorAll(".like-glyph");

function heartCallback(e) {
  const like = e.target;
  mimicServerCall("bogusUrl")
    .then(function () {
      if (like.innerText === EMPTY_HEART) {
        like.innerText = FULL_HEART;
        like.className = "activated-heart";
      } else {
        like.innerText = EMPTY_HEART;
        like.className = "";
      }
    })
    .catch(function (error) {
      const modal = document.querySelector("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => (modal.className = "hidden"), 3000);
    });
}

for (const glyph of articleHeartLikes) {
  glyph.addEventListener("click", heartCallback);
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
