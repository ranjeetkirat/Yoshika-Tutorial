import React, { useEffect, useRef, useState } from 'react'
function Timer() {

    const [time, setTime] = useState(0)
    const [isActive, setActive] = useState(false)
    const [isPause, setIspause] = useState(false)

    const intervalRef = useRef(null)
    const handleInput = (event) => {
        setTime(parseInt(event.target.value * 60))
    }
    const formatTime = () => {
        const min = String(Math.floor(time / 60)).padStart(2, '0')
        const sec = String(time % 60).padStart(2, "0")
        return `${min} : ${sec}`
    }
    const handleStart = () => {
        setActive(true)
        setIspause(false)
    }

    useEffect(() => {
        if (isActive && !isPause && time > 0) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev - 1)
           
            }, 1000)
        }
        else if (time === 0) {
            clearInterval(intervalRef.current)
            setActive(false)

        }
        return () => clearInterval(intervalRef.current)

    }, [isActive, isPause, time])
    const handlePause = () => {
        setIspause(!isPause)
    }
    const handleReset = () => {

        clearInterval(intervalRef.current)
        setActive(false)
        setIspause(false)
        setTime(0)

    }

    return (
        <>
            <div className="mt-20 h-screen">
                <h1 className="text-4xl font-medium m-10 ">Countdown Timer</h1>
                <input
                    type='number'

                    className="h-10 w-60 ring-1 pl-2 text-xl m-5 ring-sky-700 "
                    placeholder="Enter time in minutes"
                    onChange={handleInput}
                />
                <div className="text-3xl m-4 font-medium">{formatTime()}</div>
                <button
                    onClick={handleStart}
                    className="w-20 h-10 bg-blue-500 text-white text-xl ring-1 ring-black"
                    disabled={isActive && !isPause}>
                    Start
                </button>
                <button
                    onClick={handlePause}
                    className="w-20 h-10 bg-blue-500 text-white text-xl ring-1 ring-black ml-5 mr-5"
                    disabled={!isActive }>
                   {isPause ? 'Pause' :'Resume'} 
                </button>
                <button
                    onClick={handleReset}
                    className="w-20 h-10 bg-blue-500 text-white text-xl ring-1 ring-black">
                    Reset
                </button>
            </div>
        </>
    )
}
export default Timer;