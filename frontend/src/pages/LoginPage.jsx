import React, { useState } from "react";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <h1>Please Login!</h1>
            <div><input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /></div>
            <div><input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /></div>
            <button type="submit" onClick={async (e) => {
                e.preventDefault();
                try {
                    let response = await fetch("http://localhost:5000/login", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                    });
                    console.log(response)
                    //redirect, message
                } catch (err) {
                    console.log(err);
                }
            }}>Login</button>
        </form>
    )
}