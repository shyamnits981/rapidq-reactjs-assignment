import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { useNavigate } from "react-router-dom";


const Signin = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid email", classes: "#e91e63 pink" })
            return
        }
        fetch("http://localhost:5000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.error) {
                M.toast({ html: data.error, classes: "#ef9a9a red lighten-3" })
            } else {
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                M.toast({ html: "signedin successfully", classes: "#e91e63 pink" })
                navigate('/detailslist')

            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='mycard'>
            <div className='card auth-card'>
                <h2>RAPIDQRBE</h2>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn waves-effect waves-light' onClick={() => PostData()}>Signin</button>
                <h5>
                    <Link to="/">Don't have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signin;