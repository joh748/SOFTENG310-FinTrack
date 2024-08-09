import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function SignupForm() {
    const labelStyle = "text-2xl";
    const inputStyle = "border-2 w-64 h-8 p-2 rounded-lg mb-4 mt-2 border-black focus:border-blue-800 focus:outline-none";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:4000/user/signup", {
            email: email,
            password: password
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <form className="flex flex-col border-2 items-center border-blue-800 w-80 p-4 rounded-xl bg-blue-100">
            <h2 className="text-4xl font-bold text-center mb-4">Sign Up To FinTrack!</h2>
            <div className="flex flex-col">
                <label className={labelStyle} htmlFor="email">Email</label>
                <input className={inputStyle} required type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} />
            </div>
            <div className="flex flex-col">
                <label className={labelStyle} htmlFor="password">Password</label>
                <input className={inputStyle} required type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} />
            </div>
            <button className="w-60 bg-blue-600 text-white text-2xl p-2 rounded-lg mt-4" onClick={(e) => handleSubmit(e)}>Login!</button>
            <p className="text-xl mt-4">Already have an account?</p>
            <Link to="/login" className="text-blue-800 text-xl">Log in up here!</Link>
        </form>
    );
}