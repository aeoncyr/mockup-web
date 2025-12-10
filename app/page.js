'use client';
import { useState } from 'react';


export default function Home() {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");


    async function submitData() {
        const res = await fetch('/api/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, value }),
        });


        const data = await res.json();
        setMessage(data.message);
        setName("");
        setValue("");
    }


    return (
        <div className="container">
        <h1>Data Input Form</h1>
        <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={submitData}>Submit</button>
        {message && <p>{message}</p>}
        <a href="/dashboard">Go to Dashboard →</a>
        </div>
    );
}