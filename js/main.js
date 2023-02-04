const img = document.getElementById('main-img');

let changeImage = function(path){
    img.src = path;
}

let genrandom = function(){
    let integer = Math.floor(Math.random() * 100);
    document.getElementById("RNGspot").innerText = integer;
    setTimeout(genrandom, 1000);
}


function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }

genrandom();

toggleFullScreen();