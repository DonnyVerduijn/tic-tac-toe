import { Signal } from '@preact/signals';
import { Square } from './Square';
import { GameState } from './types/state';

interface BoardProps {
  // squares: Array<string | null>;
  state: Signal<GameState>
  onClick: (i: number) => void;
}

export function Board({ state, onClick }: BoardProps): JSX.Element {
    function renderSquare(i: number): JSX.Element {
      return <Square value={state.value.squares[i]} onClick={() => onClick(i)} />;
    }
  
    return (
      <div>
        {state.value.xIsNext ? 'X' : 'O'}
        <div className="board-row">
        <Square value={state.value.squares[0]} onClick={() => onClick(0)} />
        <Square value={state.value.squares[1]} onClick={() => onClick(1)} />
        <Square value={state.value.squares[2]} onClick={() => onClick(2)} />
          {/* {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)} */}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {/* {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)} */}
        </div>
      </div>
    );
  }
