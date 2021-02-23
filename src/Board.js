function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

const BOARD_SIZE = 3;

function Board(props) {
  function renderSquare(row, col) {
    const idx = row * BOARD_SIZE + col;

    return (
      <Square
        key={idx}
        value={props.squares[idx]}
        onClick={() => props.onClick(idx)}
      ></Square>
    )
  }

  const boardRows = Array.from({ length: BOARD_SIZE }, (_, row) => {
    return (
      <div className="board-row" key={row}>
        {Array.from({ length: BOARD_SIZE }, (_, col) => renderSquare(row, col))}
      </div>
    )
  });

  return (
    <div>{boardRows}</div>
  )
}

export default Board;
