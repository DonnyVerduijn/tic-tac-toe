import { memo } from "react";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square = memo(function({ value, onClick }: SquareProps): JSX.Element {
  // console.log(value);
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
})

export { Square };
