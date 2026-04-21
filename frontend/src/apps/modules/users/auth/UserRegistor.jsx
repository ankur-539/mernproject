import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

export default function UserRegistor() {
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isDisabled, setisDisabled] = useState(false);


    const HideAndShow = (e) => {
        setShowPassword(e.target.checked)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const formsubmit = (data) => {
        axios.post("http://localhost:7676/ragistor", data).then((x) => {
            // console.log(x)
            if (x.data.mystatus === 420) {
                toast.error(x.data.msg, { autoClose: 2000 })
            }
            if (x.data.mystatus === 430) {
                toast.error(x.data.msg, { autoClose: 2000 })
            }
            if (x.data.mystatus === 250) {
                toast.success(x.data.msg, { autoClose: 2000 })
                setisDisabled(true);
                setTimeout(() => {
                    nav("/usermanagement")
                }, 2000)
            }

        })
    }


    return (
        <form onSubmit={handleSubmit(formsubmit)}>
            <div className="container-fluid">
                <ToastContainer />
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center hightt flex-column bg-image">
                        <h2 className='mb-4 fw-bold c-font-gr'>Create an account</h2>
                        <div className='col-md-6 border back p-5 border-0 c-shadow rounded fm'>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" {...register("username", { required: true, minLength: 5, maxLength: 15 })} />
                                    {errors.username?.type === "required" && <p className='text-danger m-0'>username is required</p>}
                                    {errors.username?.type === "minLength" && <p className='text-info m-0'>minimum 5 charectors</p>}
                                    {errors.username?.type === "maxLength" && <p className='text-info m-0'>maximum 15 charectors</p>}
                                </div>
                                <div className="w-50">
                                    <label className="form-label text-light">Dob</label>
                                    <input type="date" className="form-control" {...register("dob", { required: true })} />
                                    {errors.dob && <p className='text-danger m-0'>dob is required</p>}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("emailid", { required: true, pattern: /^(?!\.)(?!.*\.\.)[a-zA-Z0-9.]{3,15}(?<!\.)@gmail\.com$/ })} />
                                    {errors.emailid?.type === "required" && <p className='text-danger m-0'>email is required</p>}
                                    {errors.emailid?.type === "pattern" && <p className='text-danger m-0'>enter valid gmail</p>}
                                </div>
                                <div className="w-50">
                                    <label className="form-label text-light">Phone no</label>
                                    <input type="tel" className="form-control" {...register("userphone", { required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]\d{9}$/ })} />
                                    {errors.userphone?.type === "required" && <p className='text-danger m-0'>phone no is required</p>}
                                    {errors.userphone?.type === "minLength" && <p className='text-info m-0'>minimum 10 digit required</p>}
                                    {errors.userphone?.type === "maxLength" && <p className='text-info m-0'>maximum 10 digit required</p>}
                                    {errors.userphone?.type === "pattern" && <p className='text-warning m-0'>only digits are allowed</p>}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Gender</label>
                                    <select className='form-select' {...register("gender", { required: true })} >
                                        <option value="" hidden>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.gender && (<p className='text-danger m-0'>Select One</p>)}
                                </div>
                                <div className="w-50">
                                    <label className="form-label">Role</label>
                                    <select className='form-select' {...register("role", { required: true })} >
                                        <option value="" hidden>Select</option>
                                        <option value="Male">User</option>
                                        <option value="Female">Admin</option>
                                        <option value="Other">Super Admin</option>
                                    </select>
                                    {errors.gender && (<p className='text-danger m-0'>Select One</p>)}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Password</label>
                                    <input type={showPassword ? "text" : "password"} className="form-control" {...register("pass", { required: true, minLength: 8, maxLength: 14, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} />
                                    {errors.pass?.type === "required" && <p className='text-danger'>password is required</p>}
                                    {errors.pass?.type === "minLength" && <p className='text-info'>minimum 8 charectors required</p>}
                                    {errors.pass?.type === "maxLength" && <p className='text-info'>maximum 14 charectors required</p>}
                                    {errors.pass?.type === "pattern" && <p className='text-warning'>pass:"At least 1 lowercase, 1 uppercase, 1 number and 1 specil character required</p>}
                                </div>
                                <div className="w-50">
                                    <label className="form-label">Profile pic</label>
                                    <input type="url" className="form-control" placeholder='Url only' {...register("profileurl", { required: true })} />
                                    {errors.profileurl && <p className='text-danger m-0'>img url is required</p>}
                                </div>
                            </div>
                            <div className="mb-3 form-check d-flex gap-2">
                                <input type="checkbox" className="form-check-input" onChange={HideAndShow} />
                                <label className="form-check-label">Show Password</label>
                            </div>
                            <input type="submit" className="btn w-100 btn-success mt-3" disabled={isDisabled}></input>
                        </div>


                        <div className='d-flex gap-2 justify-content-center mt-4'>
                            <p className='opacity-75'>Already have an account?</p>
                            <Link to="/usermanagement" className='fw-medium text-primary cursor text-decoration-none'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
