/*
 * https://github.com/CaffeinateOften/react-tutorial-101-tic-tac-toe/blob/master/src/index.js#L126
 * This calculateWinner function is from Facebook's main React.js's tutorial
 * This will be the start to my Heuristic function
 * 
 */

/**
 * Return the player ('x' or 'o') who won the tic-tac-toe game, otherwise return null
 * @param {Array[][]} squares An Array of Rows, where each Row is an Array of characters 'x', 'o', or undefined meaning Player X, Player O, or blank
 */
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }