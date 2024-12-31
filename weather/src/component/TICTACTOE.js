import React, { useState } from 'react';

function TICTACTOE() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return; // Prevents changes if the cell is filled or if there's a winner

        const newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' : 'O';
        setBoard(newBoard);
        setIsXTurn(!isXTurn);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
const handleReset=()=>{
    setBoard(Array(9).fill(null))
}
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                {winner ? <h1 className="text-2xl mb-4">Winner: {winner}</h1> : <h1 className="text-2xl mb-4">Next Player: {isXTurn ? 'X' : 'O'}</h1>}
                <div className="grid grid-cols-3 gap-1">
                    {board.map((value, index) => (
                        <button
                            key={index}
                            className="w-16 h-16 bg-gray-200 ring-1 ring-gray-400 flex items-center justify-center text-3xl rounded-sm"
                            onClick={() => handleClick(index)}
                        >
                            {value}
                        </button>
                    ))}
                   
                </div>
                <button className="ring-1 ring-black m-10 w-20 bg-blue-500 text-white  h-10 text-xl" onClick={handleReset}>Reset</button> 
            </div>
        </div>
        
    );
}

export default TICTACTOE;
