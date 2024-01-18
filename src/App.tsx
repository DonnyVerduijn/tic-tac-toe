import { useEffect, useMemo } from 'react';
import { Board } from './Board';
import { Signal, batch, signal } from '@preact/signals';

interface GameState {
  squares: Signal<Array<string | null>>;
  xIsNext: boolean;
}

const gameState = signal<GameState>({
  squares: Array(9).fill(signal(null)),
  xIsNext: true,
});

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // ...
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function handleClick(i: number): void {
  console.log('handleClick', i);
  const squares = gameState.value.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i]!.value = gameState.value.xIsNext ? 'X' : 'O';
  batch(() => {
    gameState.value.squares = squares;
    gameState.value.xIsNext = !gameState.value.xIsNext;
  });
}

function App(): JSX.Element {
  const winner = calculateWinner(gameState.value.squares);
  // const squares = useMemo(() => signal(gameState.value.squares), []);

  useEffect(() => {
    console.log('gameState', gameState.value);
    const interval = setInterval(() => {
      gameState.value.squares[0] = '1';
    }, 2000)
    return () => clearInterval(interval);
  }, []);

  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (gameState.value.xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={gameState}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}

export default App;
