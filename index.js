/*
 * https://github.com/CaffeinateOften/react-tutorial-101-tic-tac-toe/blob/master/src/index.js#L126
 * This calculateWinner function is from Facebook's main React.js's tutorial
 * This will be the start to my Heuristic function
 */

/**
 * Return the player ('x' or 'o') who won the tic-tac-toe game, otherwise return null. (Does not handle 'draw' state)
 * @param {Array[][]} squares An Array of Rows, where each Row is an Array of characters 'x', 'o', or undefined meaning Player X, Player O, or blank
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
    
    let blankSpaceExists = false;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // if 3 matches, return winner letter immediately
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
      // track if there are any open spaces left
      else if(!squares[a] || !squares[b] || !squares[c]){
        blankSpaceExists = true;
      }
    }

    // if there are, return null, board is not in terminal state
    if(blankSpaceExists){
        return null;
    }
    // otherwise board is full, it is a draw
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

function isInTerminalState(board){
  return calculateWinner(board) !== null;
}

function minimax(board, depth, isMaximizerPlayer){

  const player = 'x';
  const opponent = 'o';

  if(isInTerminalState(board)){
    return evaluate(calculateWinner(board));
  }

  if(isMaximizerPlayer){
    let bestValue = -Infinity;
    for(let i=0; i<board.length; i++){
      if(!board[i]){
        board[i] = player;
        bestValue = Math.max(bestValue, minimax(board, depth+1, !isMaximizerPlayer));
        board[i] = undefined;
      }
    }
    return bestValue;
  }
  else{
    let bestValue = Infinity;
    for(let i=0; i<board.length; i++){
      if(!board[i]){
        board[i] = opponent;
        bestValue = Math.min(bestValue, minimax(board, depth+1, !isMaximizerPlayer));
        board[i] = undefined;
      }
    }
  }
}