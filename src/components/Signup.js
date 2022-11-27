import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
    const navigate = useNavigate();
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const PostData = ()=>{

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html:"invalid email"})
        return
    }
  

    fetch("http://localhost:5000/signup",{
        method:"POST",
        headers:{
             "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
            M.toast({html:data.error, classes:"#d50000 red accent-4"})
        }else{
            M.toast({html:data.message,classes:"#2e7d32 green darken-3"})
            navigate('/signin')
            
           
        }
   
    }).catch(err=>{
        console.log(err);
    })
    
}

    return(
<div className='mycard'>
<div className='card auth-card'>
    <h2>RAPIDQRBE</h2>
    <input type="text" placeholder="name"  value={name} onChange={(e)=>setName(e.target.value)} />
    <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <button className='btn waves-effect waves-light'onClick={()=>PostData()}>Signup</button>

<h5>
    <Link to="signin">Alredy have an account?</Link>
</h5>
</div>
</div>
)
}
export default Signup;