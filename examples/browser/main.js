var Dungeon = require('../../dungeon');
var level = new Dungeon(50, 50),
    ctx   = document.querySelector('canvas').getContext('2d');

// Display the level:

ctx.fillStyle = 'blue';

for(var y=0; y<50; y++) {
  for(var x=0; x<50; x++) {
    if(level.grid[y][x]) {
      ctx.fillRect(x * 10, y * 10, 10, 10);
    }
  }
}
