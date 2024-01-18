import { Board } from './Board';
import { batch, computed, signal } from '@preact/signals';
import { GameInfo } from './GameInfo';
import { calculateWinner } from './utils/calculateWinner';
import { GameState } from './types/state';


const gameState = signal<GameState>({
  squares: Array(9).fill(null),
  xIsNext: true,
});

function handleClick(i: number): void {
  console.log('handleClick', i);
 
  const squareValues = gameState.peek().squares.slice();
  if (calculateWinner(squareValues) || squareValues[i]) {
    return;
  }

  batch(() => {
    squareValues.splice(i, 1, gameState.peek().xIsNext ? 'X' : 'O');
    gameState.value = {
      squares: squareValues,
      xIsNext: !gameState.peek().xIsNext,
    };
  });
  console.log(gameState.peek().squares);
}

function App(): JSX.Element {
  const squares = computed(() => gameState.value.squares);
  console.log(squares);
  console.log(gameState.value.xIsNext)
  return (
    <div className="game">
      <div className="game-board">
        <Board
          state={gameState}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <GameInfo state={gameState} />
    </div>
  );
}

export default App;
