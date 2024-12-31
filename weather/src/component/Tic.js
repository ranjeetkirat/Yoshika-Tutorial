import React, { useState } from 'react'

function Tic() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)
    const [winner,setWinner]=useState(null)
    const renderSquare = (index) => {
        return (<button onClick={() => handleClick(index)} className="border-2 text-xl border-lime-600 h-10 w-10">{board[index]}</button>)
    }
    const handleClick = (index) => {
        if(board[index] !=null || winner){
            return;
        }
        console.log(index, 'Click')
        const NewBoard = [...board]
        NewBoard[index] = isXTurn ? 'X' : 'O'
        setBoard(NewBoard)
        setIsXTurn(!isXTurn)
        const winnercombination =CheckWinner(NewBoard)
        if(winnercombination){
            setWinner(NewBoard[winnercombination[0]])
        }

    }
    const CheckWinner = (NewBoard) => {
        const combination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < combination.length; i++) {
            const [a, b, c] = combination[i];
            if (NewBoard[a] === NewBoard[b] && NewBoard[b] === NewBoard[c]){
                return combination[i]
            }
            
        }
        return null
    }
     const handleReset=()=>{
        setBoard(Array(9).fill(null))
        setWinner(null)
     }
    return (
        <>
            <div className="space-x-1 mb-1">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}

            </div>
            <div className="space-x-1 mb-1">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}

            </div>
            <div className="space-x-1 mb-1">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}

            </div>
            <button className="ring-1 ring-black bg-blue-800 text-white text-xl p-1 pl-2 pr-2 rounded-md" onClick={handleReset}>Reset</button>
        {winner &&( <div className="text-xl font-bold text-green-600">{winner} Wins! </div>)}
        
              </>
    )
}

export default Tic
