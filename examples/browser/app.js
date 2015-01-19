(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function createRandomGrid(width, height, pWall) {
    var grid = [];
    for(var y=0; y<height; y++) {
        var row = [];
        for(var x=0; x<width; x++) {
            var isBlock = (Math.random() < pWall ? true : false);
            row.push(isBlock);
        }
        grid.push(row);
    }
    return grid;
};

function createBoundaryWalls(grid, width, height) {
    for(var y=0; y<height; y++) {
        grid[y][0] = true;
        grid[y][width-1] = true;
    }
    for(var x=0; x<width; x++) {
        grid[0][x] = true;
        grid[height-1][x] = true;
    }

    return grid;
}

function makeGeneration(grid, width, height, minWalls) {
    var tGrid = [];
    for(var y=0; y<height; y++) {
        var tRow = [];
        for(var x=0; x<width; x++) {
            var minX = Math.max(x-1, 0), maxX = Math.min(x+2, width),
                minY = Math.max(y-1, 0), maxY = Math.min(y+2, height);

            var wCount = 0, checkedTiles = 0;
            for(var ty = minY; ty<maxY; ty++) {
                for(var tx = minX; tx < maxX; tx++) {
                    if(grid[ty][tx]) wCount++;
                    checkedTiles++;
                }
            }
            if(wCount >= minWalls ) tRow.push(true);
            else tRow.push(false);
        }
        tGrid.push(tRow);
    }
    return tGrid;
};

module.exports = function(width, height, opts) {
    // Set the default options, if not supplied
    if(!opts) opts = {};
    if(!opts.initialProbability)    opts.initialProbability = 0.4;
    if(!opts.iterations)            opts.iterations = 5;
    if(!opts.aliveThreshold)        opts.aliveThreshold = 5;

    this.grid = createRandomGrid(width, height, opts.initialProbability);     // Place some initial random walls
    this.grid = createBoundaryWalls(this.grid, width, height);                // Place walls around the matrix

    // Let the cellular atomaton run a few iterations
    for(var i=0; i<opts.iterations; i++) this.grid = makeGeneration(this.grid, width, height, opts.aliveThreshold);

    // Enforce boundary walls again
    this.grid = createBoundaryWalls(this.grid, width, height);

    return this;
};

},{}],2:[function(require,module,exports){
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

},{"../../dungeon":1}]},{},[2]);
