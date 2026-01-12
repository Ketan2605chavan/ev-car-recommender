import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // demo validation
    if (!email || !password) return alert("Enter email & password");
    // pretend success
    onLogin?.();
    nav("/");
  };

  return (
    <div className="container">
      <div className="card-form">
        <h2 className="center">Login</h2>
        <form onSubmit={submit}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" />
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button type="submit" className="cta-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
