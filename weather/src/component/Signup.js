import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [isSignup, setIssignup] = useState()
    const navigate=useNavigate()
    
    const formik=useFormik({
        initialValues:{
            name:'',
            password:''
        },
         validationSchema:Yup.object({
        name:Yup.string()
        .required('fild is required'),

        password:Yup.string()
        .required('fild is required')
    }),
    onSubmit:(values,{setsubmitting})=>{
       fetch('http://localhost:3000/signup',{
        method:'post',
        headers:{
            'Content-Type':'application/JSON'
        },
        body:JSON.stringify(values)
       })
       console.log(values)
       localStorage.setItem('user',JSON.stringify(values))
       navigate('/')
    }

    })
    


    return (
        <>
<div className="grid grid-cols-5">
<div></div>
<div className="grid col-span-3 mt-10 ">
        <div className="border-4 border-blue-500 ">
        <div className="flex mt-10">
            <div className="w-60 h-12 bg-white ml-36 flex items-center justify-center rounded-md shadow-md shadow-lime-400  ">
                <button onClick={()=>setIssignup(true)} className={isSignup ? 'w-60 h-12 bg-blue-500 text-white rounded-md' : ""}>Sign Up</button>
            </div>
            <div className="w-60 h-12 bg-white shadow-md flex items-center justify-center rounded-md shadow-lime-400 ">
                <button onClick={()=>setIssignup(false)} className={!isSignup ? 'w-60 h-12 bg-blue-500 text-white rounded-md' : ""}>Log In</button>
            </div>
            </div>

            {( isSignup ? <formik>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                   <h1 className="font-medium text-4xl m-5">Sign Up</h1>
                        <input
                            type='text'
                            placeholder='Enter your name'
                            name='name'
                            className="text-xl h-12 w-96 mt-10 shadow-md rounded-md shadow-lime-400"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        /><br></br><br></br>
                        <input
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            className="text-xl h-12 w-96 shadow-md rounded-md shadow-lime-400"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        /><br /><br />
                        <button className="h-12 w-96 mb-20 bg-blue-500 text-white text-xl rounded-md">Sign Up</button>
                    </div>

                </form>
            </formik>:<h1>Login</h1>)}
            </div>
            </div>
            <div></div>
            </div>
        </>
    )
}

export default Signup
