var play = true;

function toggleFullScreen() {
  if (!document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 70) {
    toggleFullScreen();
  } else if (e.keyCode === 33) {
    $('.slider').slider('prev');
  } else if (e.keyCode === 34) {
    $('.slider').slider('next');
  } else if (e.keyCode === (32 || 179) && !play) {
    $('.slider').slider('start');
    play = true;
    Materialize.toast('Play', 4000);
  } else if (e.keyCode === (32 || 179) && play) {
    $('.slider').slider('pause');
    play = false;
    Materialize.toast('Pause', 4000);
  }
}, false);
// play key is 179
