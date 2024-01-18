import { ReadonlySignal } from "@preact/signals";




interface SquareProps {
  squares: ReadonlySignal<(string | null)[]>;
  onClick: () => void;
  id: number;
}

export function Square({ squares, onClick, id }: SquareProps): JSX.Element {
  console.log(squares.value[id]);
  return (
    <button className="square" onClick={onClick}>
      {squares.value.squares[id].value}
    </button>
  );
}
