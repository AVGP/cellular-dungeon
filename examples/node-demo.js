var Dungeon = require('./dungeon');
var level = new Dungeon(40, 20, {initialProbability: 0.4});

// Display the level:
level.grid.forEach(function(g) {
  console.log(g.map(function(t) {
    return t ? '*' : ' ';
  }).join(''));
});
