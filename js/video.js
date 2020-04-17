// play video when user gets close


const video = document.getElementById('1stPlace');
video.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const userPosition = this.el.getAttribute('position')["z"];

    if (userPosition <= -13) {
      video.play();
    } else {
      video.pause();
    }
  }
});

const video2 = document.getElementById('HM8');
video.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const userPosition = this.el.getAttribute('position')["z"];

    if (userPosition <= 4) {
      video.play();
    } else {
      video.pause();
    }
  }
});