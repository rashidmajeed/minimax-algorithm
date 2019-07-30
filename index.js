/*
 * https://github.com/CaffeinateOften/react-tutorial-101-tic-tac-toe/blob/master/src/index.js#L126
 * This calculateWinner function is from Facebook's main React.js's tutorial
 * This will be the start to my Heuristic function
 */

/**
 * Return the player ('x' or 'o') who won the tic-tac-toe game, otherwise return null. (Does not handle 'draw' state)
 * @param {string[]} squares An Array of characters 'x', 'o', or undefined meaning Player X, Player O, or blank. 1D Array representing 9 spaces on tictactoe board
 */
function worseCalculateWinner(squares) {
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

/**
 * Return the decided evaluation score given
 * @param {finalState} string 'x', 'o', or 'draw'
 */
function evaluate(finalState){
    return {
        'x': 10,
        'o': -10,
        'draw': 0
    }[finalState]
}

/**
 * Same as above, except handles scenario of 'draw'
 * Return the player ('x' or 'o') who won the tic-tac-toe game, 'draw' if the game ended in draw, otherwise return null
 * @param {string[]} squares An Array of characters 'x', 'o', or undefined meaning Player X, Player O, or blank. 1D Array representing 9 spaces on tictactoe board.
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
    
    let blankSpaceExists = false;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
      if(!squares[a] || !squares[b] || !squares[c]){
        blankSpaceExists = true;
      }
    }

    if(blankSpaceExists){
        return null;
    }
    else {
        return 'draw';
    }
  }

  let finalBoardStates = [
    [   // 'o' wins, minimizer, -10
        'o', 'o', 'o',
        'x',    , 'x',
        'x',    ,    
    ],
    [   // 'x' wins, maximizer, +10
        'x', 'x', 'o',
        'x',    , 'x',
        'x',    ,    
    ],
    [   // 'draw', 0
        'o', 'x', 'o',
        'x', 'o', 'x',
        'x', 'o', 'x'
    ],
  ]

  console.log('actual:')
  for(const finalBoardState of finalBoardStates){
    const winner = calculateWinner(finalBoardState);
    const score = evaluate(winner)
    console.log(winner, score)
  }

  console.log(`
expected: 
o -10
x 10
draw 0
`);
