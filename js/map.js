// This wall-generator was inspiried by Shane Hudon's post
// https://24ways.org/2016/first-steps-in-vr/

// Walls generator
// This will auto generate a map. Right now it needs to be an equal height and width
// Numbers are used to create the map

// NUMBER KEY:
// 0 = no walls
// 1 = normal wall
// 2 = black wall
// 3 = secret wall
// 4 = brick walls
// 8 = user start position
// 9 = console log position

const map = {
  "data": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  

  ],
  "height":16,
  "width":16
}


document.querySelector('a-scene').addEventListener('render-target-loaded', () => {
  const WALL_SIZE = 3;
  const WALL_HEIGHT = 12;
  const el = document.querySelector('#walls');
  let playerPos

    for (var x = 0; x < map.height; x++)  {
      for (var y = 0; y < map.width; y++) {

        const i = (y * map.width ) + x;
        const position = `${((x - (map.width / 2)) * WALL_SIZE)} 1.5 ${(y - (map.height / 2)) * WALL_SIZE}`;

     
        // set player position if the number is a 2
        if (map.data[i] === 8)  {
          playerPos = position;
        }

        if (map.data[i] === 9) {
          console.log(position);
        }
      }
    }
    document.querySelector('#player').setAttribute('position', playerPos);
});
