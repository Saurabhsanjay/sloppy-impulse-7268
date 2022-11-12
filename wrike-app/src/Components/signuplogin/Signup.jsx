import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
  
    const Navigate=useNavigate()

    const collectData = async () => {
        
        let result = await fetch('http://localhost:5000/register', {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type':'application/json'
            }
        })

        result=await result.json()
        console.log(result);

        if(result){
            localStorage.setItem("user",JSON.stringify(result))
            Navigate("/")
        }
    }
    return (
        <div>
            <h1>Register</h1>

            <input onChange={(e) => setname(e.target.value)} value={name} type="text"  placeholder='Enter Name' />
            <input onChange={(e) => setemail(e.target.value)} value={email} type="text" placeholder='Enter Email' />
            <input onChange={(e) => setpassword(e.target.value)} value={password} type="password"  placeholder='Enter Password' />
            <button onClick={collectData}>Signup</button>
        </div>
    )
}

export default Signup
