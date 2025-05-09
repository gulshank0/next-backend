"use client";
import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen flex justify-center items-center border rounded-2xl">
<div className="flex flex-col justify-center gap-8.5 border rounded-2xl h-150 w-120 p-8 m-5 ">   
  <p className="text-4xl flex justify-center pb-15 font-bold">Signup Card</p>
      <input onChange={(e)=>{
        setEmail(e.target.value);
      }} placeholder="Enter your username" type="username" className="border p-2 rounded" />
      <input onChange={(e)=>{
        setPassword(e.target.value);
      }} placeholder="Enter your password" type="password" className="border p-2 rounded" />
      <button onClick={()=>{
        axios.post("http://localhost:3000/api/user", {
          email,
          password
        })
      }} className="bg-blue-500 text-white p-2 rounded" >Submit</button>
    </div>
    </div>
  );
}
