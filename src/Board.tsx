
import type { ReadonlySignal } from '@preact/signals';
import { Square } from './Square';

interface BoardProps {
  squares: ReadonlySignal<Array<string | null>>;
  onClick: (i: number) => void;
}

export function Board({ squares, onClick }: BoardProps): JSX.Element {
    function renderSquare(i: number): JSX.Element {
      return <Square squares={squares} id={i} onClick={() => onClick(i)} />;
    }
  
    return (
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  }
