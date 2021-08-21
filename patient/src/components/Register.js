import React,{useState} from "react"
function Register()
{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

async function SignUp(){
    let item={name,password,email}
    console.warn(item)
    let result= await fetch("http://127.0.0.1:8000/api/register",{
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
            <h1>Patient Sign Up</h1>
            Username:<input type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)} className= "form-control"/>
            <br />
            Password:<input type="text" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} className= "form-control"/>
            <br />
            Email:<input type="text" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} className= "form-control"/>
            <br />
            <button onClick={SignUp} className= "btn btn-primary">Sign Up</button>
          

        </div>
    )

}

export default Register