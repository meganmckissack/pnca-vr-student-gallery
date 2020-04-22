// play video when user cursor hovers over video and pauses when hovering off video

const vid1 = document.getElementById('1stPlace');
vid1.pause();
AFRAME.registerComponent('videohandler1', {
  init: function () {
    this.el.addEventListener('mouseenter',function(){
      vid1.play();
   });
   this.el.addEventListener('mouseleave',function(){
      vid1.pause();
   })
  }
});

const vid2 = document.getElementById('HM8');
vid2.pause();
AFRAME.registerComponent('videohandler2', {
  init: function () {
    this.el.addEventListener('mouseenter',function(){
      vid2.play();
   });
   this.el.addEventListener('mouseleave',function(){
      vid2.pause();
   })
  }
});

const vid3 = document.getElementById('HM143');
vid3.pause();
AFRAME.registerComponent('videohandler3', {
  init: function () {
    this.el.addEventListener('mouseenter',function(){
      vid3.play();
   });
   this.el.addEventListener('mouseleave',function(){
      vid3.pause();
   })
  }
});

const vid4 = document.getElementById('HM1');
vid4.pause();
AFRAME.registerComponent('videohandler4', {
  init: function () {
    this.el.addEventListener('mouseenter',function(){
      vid4.play();
   });
   this.el.addEventListener('mouseleave',function(){
      vid4.pause();
   })
  }
});

