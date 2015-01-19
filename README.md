# cellular-dungeon
## Generate procedural dungeons

# How to use:

The example code below will generate a dungeon with default options and output
a visualisation like the one from the "Examples" section:

```javascript
  var Dungeon = require('./dungeon');
  var level = new Dungeon(40, 20);

  // Display the level:
  level.grid.forEach(function(g) {
    console.log(g.map(function(t) {
      return t ? '*' : ' ';
    }).join(''));
  });
```

You can also use the library in the browser, using [browserify](http://browserify.org/).

# Configuration

There's a few configuration options:

| Name | Description | Optional | Default |
| --- | --- | --- | --- |
| initialProbability | Probability of a tile being a wall in the initial (random) placing phase | y | 0.5 (50%) |
| iterations | Iterations of the cellular automaton running on the map | y | 5 |
| aliveThreshold | For every cell, if there's at least `aliveThreshold` walls around it, it becomes a wall | y | 5 |

# Examples

[Check the online version here](http://avgp.github.io/cellular-dungeon/examples/browser/index.html)

20x20 grid:

    ********************
    * ****             *
    * *****            *
    * *****            *
    *******           **
    *******           **
    * ****           ***
    *                ***
    *          **    ***
    *          ***    **
    *           *      *
    *                  *
    ***                *
    ****               *
    ****               *
    ***                *
    **        *        *
    *        ***       *
    *        ***       *
    ********************

40x20 grid:

    ****************************************
    ******     ***         *****************
    *******    ********  ****  **     ******
    ******      *************          *****
    ****        *************          *****
    ****       ***************        ******
    ****      *****************     ********
    ***************************    *********
    **************************    **********
    *************************     *******  *
    *****  **********  ******      *****   *
    ****    ********    *****      *****   *
    * *     *******     *****      *****   *
    *        **         ****       ****    *
    *                   ***         **     *
    *                   ***                *
    *                  *****               *
    *            ***  *******   ***     ** *
    *           ***** ******************** *
    ****************************************

# Contributing

If you find a bug, have a question, improvement, idea or other suggestion, please feel free to [open an issue](https://github.com/cellular-dungeon/issues).
Pull requests are always welcome - to submit code please do the following:

1. Fork this repository
2. Create a new branch (bonus points for naming it neatly, e.g. "issue-3-adding-examples")
3. Write the code you have in mind & push to your fork
4. Create a pull request from your fork and branch into this repository's `master` branch

Hurray!

# License

[This repository is licensed under the ISC License](http://opensource.org/licenses/ISC)