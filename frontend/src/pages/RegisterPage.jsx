import React, { useState } from "react";

export const RegisterPage = () => {
    const [full_name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form action="/register" method="POST">
            <h1>Please Register!</h1>
            <div><input type="text" placeholder="Full Name" value={full_name} onChange={e => setName(e.target.value)} /></div>
            <div><input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /></div>
            <div><input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /></div>
            <button type="submit" onClick={async (e) => {
                e.preventDefault();
                try {
                    let response = await fetch("http://localhost:5000/register", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            full_name: full_name,
                            email: email,
                            password: password,
                        }),
                    });
                } catch (err) {
                    console.log(err);
                }
            }}>Register</button>
        </form>
    )
}