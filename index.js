for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var word = this.innerHTML.toLowerCase();
    audioPlay(word);
    addAnimation(word);
  });
}

document.addEventListener("keypress", function (event) {
  audioPlay(event.key.toLowerCase());
  addAnimation(event.key.toLowerCase());
});

function audioPlay(condi) {
  switch (condi) {
    case "w":
      var audio = new Audio(
        "https://github.com/thomasantony12/DRUMS-player/blob/main/sounds/crash.mp3?raw=true"
      );
      audio.play();
      break;
    case "a":
      var audio1 = new Audio(
        "https://github.com/thomasantony12/DRUMS-player/blob/main/sounds/kick-bass.mp3?raw=true"
      );
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio(
        "https://github.com/thomasantony12/DRUMS-player/blob/main/sounds/snare.mp3?raw=true"
      );
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio(
        "https://github.com/thomasantony12/DRUMS-player/blob/main/sounds/tom-1.mp3?raw=true"
      );
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio(
        "https://github.com/thomasantony12/DRUMS-player/blob/main/sounds/tom-2.mp3?raw=true"
      );
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio(
        "https://github.com/thomasantony12/DRUMS-player/blob/main/sounds/tom-3.mp3?raw=true"
      );
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio(
        "https://github.com/thomasantony12/DRUMS-player/blob/main/sounds/tom-4.mp3?raw=true"
      );
      audio6.play();
      break;
    default:
      console.log("wrong key");
  }
}

function addAnimation(btn) {
  var currentBtn = document.querySelector("." + btn);
  currentBtn.classList.add("pressed");
  setTimeout(function () {
    currentBtn.classList.remove("pressed");
  }, 50);
}
