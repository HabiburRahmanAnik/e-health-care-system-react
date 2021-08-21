import {useState} from 'react';
import React from 'react';
function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  

async function loginPage(){
    console.warn(email,password)
    let item={email,password}
    
    let result= await fetch("http://127.0.0.1:8000/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)

    })
    result=await result.json();
    console.warn("result",result)
}


    return(
        <div>
            <h1>Login page</h1>
            Email:<input type="text" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} className= "form-control"/>
            <br />
            Password:<input type="text" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} className= "form-control"/>
            <br />
            <button onClick={loginPage} className= "btn btn-primary">Log in</button>
        

        </div>
    )

}

export default Login