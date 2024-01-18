import React, { useMemo } from "react";
import { calculateWinner } from "./utils/calculateWinner";
import { Signal, computed } from "@preact/signals";
import { GameState } from "./types/state";

const GameInfo: React.FC<{ state: Signal<GameState> }> = ({ state }) => {
    const winner = computed(() => calculateWinner(state.value.squares));
    const nextPlayer = computed(() => state.value.xIsNext ? 'X' : 'O');

    let status: string;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (nextPlayer);
    }
  
return <div className="game-info">
    <div>{status}</div>
    </div>
}

export { GameInfo };