import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
function Userlogin() {
    const nav = useNavigate();
    const [showpass, setShowpass] = useState(false);


    const [login, setLogin] = useState({
        emailid: "",
        pass: ""
    })

    const updateLogin = (e) => {
        const { name, value } = e.target;
        setLogin(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const HideAndShow = (e) => {
        setShowpass(e.target.checked)
    }

    const loginFormSubmit = () => {
        axios.post("http://localhost:7676/login", login).then((e) => {
            // console.log(e)
            if (e.data.mystatus === 260) {
                toast.error(e.data.msg, { autoClose: 2000 })
            }
            if (e.data.mystatus === 270) {
                toast.error(e.data.msg, { autoClose: 2000 })
            }
            if (e.data.mystatus === 280) {
                toast.error(e.data.msg, { autoClose: 2000 })
            }
            if (e.data.mystatus === 430) {
                toast.error(e.data.msg, { autoClose: 2000 })
            }
            if (e.data.mystatus === 450) {
                toast.error(e.data.msg, { autoClose: 2000 })
            }
            if (e.data.mystatus === 500) {
                toast.error(e.data.msg, { autoClose: 2000 })
            }
            if (e.data.mystatus === 200) {
                toast.success(e.data.msg, { autoClose: 2000 })
                setTimeout(() => {
                    nav("/usermanagement/dashboard");
                }, 2000);
            }

        })
    }


    return (
        <div className="container-fluid">
            <ToastContainer />
            <div className="row">
                <div className="col-md-12 full-wid d-flex justify-content-center align-items-center hightt flex-column bg-image p-5">
                    <h3 className='mb-4 fw-bold c-font-gr'>Sign in your account</h3>
                    <div className='col-md-4 border c-wid p-5 border-0 c-shadow rounded fm back'>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name='emailid' value={login.emailid} onChange={updateLogin} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">password</label>
                            <input type={showpass ? "text" : "password"} name='pass' className="form-control" value={login.pass} onChange={updateLogin} />

                        </div>
                        <div className="mb-3 form-check d-flex gap-2">
                            <input type="checkbox" className="form-check-input" onChange={HideAndShow} />
                            <label className="form-check-label">Show password</label>
                            <p className='ms-auto fw-medium text-info cursor '>Forgot password</p>
                        </div>
                        <button type="submit" className="btn w-100 btn-primary" onClick={loginFormSubmit}>Login</button>
                        <div className='d-flex justify-content-center mt-4'>
                            <hr className='w-50' />
                            <p className='px-3'>Or</p>
                            <hr className='w-50' />
                        </div>
                        <div className='d-flex justify-content-between gap-3'>
                            <button type="button" className="btn btn-light bg-white border w-50 d-flex justify-content-center align-items-center gap-2"><FcGoogle className='fs-5' />Google</button>
                            <button type="button" className="btn btn-light bg-white border w-50 d-flex justify-content-center align-items-center gap-2"><FaGithub className='fs-5' />GitHub</button>
                        </div>
                    </div>
                    <div className='d-flex gap-2 justify-content-center mt-4'>
                        <p className='opacity-75'>Don't have an account?</p>
                        <Link to="signup" className='fw-medium text-primary cursor text-decoration-none'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlogin