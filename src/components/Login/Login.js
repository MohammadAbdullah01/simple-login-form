import React, { useState, useEffect } from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [error, setError] = useState({ emailError: "", passwordError: "", hookError: "" })
    const handleEmail = (event) => {
        if (/\S+@\S+\.\S+/.test(event.target.value)) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setError({ ...error, emailError: "" })
        }
        else {
            setError({ ...error, emailError: "password not validated" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handlePassword = (event) => {
        if (/.{8,}/.test(event.target.value)) {
            setUserInfo({ ...userInfo, password: event.target.value })

            setError({ ...error, passwordError: "" })
        }
        else {
            setError({ ...error, passwordError: "too short" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    useEffect(() => {
        if (hookError) {
            toast(hookError.message);
        }
    }, [hookError])
    const [show, setShow] = useState(false)

    return (
        <div>
            <ToastContainer />
            <h1>Please Login</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="login-form">
                    <form onSubmit={handleSubmit} className='form'>
                        <input onChange={handleEmail} placeholder='your email' type="email" name="email" id="email" />
                        {error?.emailError && <p style={{ color: "red" }}>{error.emailError}</p>}
                        <input onChange={handlePassword} placeholder='password' type={`${show ? "text" : "password"}`} name="password" id="password" />
                        <span onClick={() => setShow(!show)}>{show ? "hide" : "show"}</span>
                        {error?.passwordError && <p style={{ color: "red" }}>{error.passwordError}</p>}
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;