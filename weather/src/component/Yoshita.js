import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Yoshita() {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    const [isopen, setIsopen] = useState()
    const toggleButton = () => {
        setIsopen(!isopen)
    }
    const Logout = () => {
        localStorage.clear();
        navigator('/sign')
    }
    return (
        <>
            {auth ? <nav className="hidden sm:flex">
                <div className="p-2 w-full bg-blue-500 flex justify-between ">
                    <div className="flex">
                        <h1 className="font-bold border-2 border-black p-1">Rs</h1>
                        <div className="item-center  space-x-3 text-xl ml-20 font-medium">
                            <Link to='/'>Weather</Link>
                            <Link to='/time'>Timer</Link>
                            <Link to='/tic'>Game</Link>

                        </div>
                    </div>
                    <Link to='/sign' onClick={Logout} className="text-xl font-medium "> Log Out</Link>
                </div>
            </nav> :
                <div></div>}






            <div className="sm:hidden flex bg-lime-500 w-full justify-between">
                <h1 className="font-bold border-2 border-black p-1">Rs</h1>
                <button onClick={toggleButton} className="w-20 h-10 text-white ">Side</button>
            </div>
            {(isopen && <div className="p-2 w-full bg-lime-500 sm:hidden">
                <div className="">

                    <div className="item-center text-start space-x-3 text-xl ml-20 font-medium">
                        <ul>
                            <li><Link to='/'>Weather</Link></li>
                            <li> <Link to='/time'>Timer</Link></li>
                            <li> <Link to='/tic'>Game</Link></li>
                        </ul>


                    </div>
                </div>
                <div className="text-xl font-medium text-right"> Log Out</div>
            </div>)}
        </>
    )
}

export default Yoshita
