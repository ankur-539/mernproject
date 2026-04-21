import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

function UserEdit() {

    const nav = useNavigate();
    const { id } = useParams();
    const [user, updateUser] = useState({
        emailid: "",
        pass: "",
        dob: "",
        profileurl: "",
        gender: "",
        role: "",
        username: "",
        userphone: ""
    });

    const usereditt = (e) => {
        const { name, value } = e.target;
        updateUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const [showPassword, setShowPassword] = useState(false);

    const getUserEdit = async () => {
        await axios.get(`http://localhost:7676/edit/${id}`).then((r) => {
            // console.log(r)
            updateUser(r.data.user)
        })
    }
    useEffect(() => {
        getUserEdit()
    }, [])

    const HideAndShow = (e) => {
        setShowPassword(e.target.checked)
    }

    const { register, handleSubmit } = useForm();

    const formsubmit = () => {
        axios.patch(`http://localhost:7676/usersinfo/${id}`, user)
        toast.success("User updated successfully",{autoClose:2000});
        setTimeout(() => {
            nav("/usermanagement/dashboard");
        }, 2000);
    }

    return (
        <form onSubmit={handleSubmit(formsubmit)}>
            <div className="container-fluid g-0">
                <ToastContainer />
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center highttt flex-column bg-image">
                        <h2 className='mb-4 fw-bold c-font-gr'>User Edit Page</h2>
                        <div className='col-md-6 border back p-5 mb-3 border-0 c-shadow rounded fm'>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" {...register("username")} value={user.username} name='username' onInput={usereditt} />
                                </div>
                                <div className="w-50">
                                    <label className="form-label text-light">Dob</label>
                                    <input type="date" className="form-control" {...register("dob")} value={user.dob} name='dob' onInput={usereditt} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("emailid")} value={user.emailid} name='emailid' onInput={usereditt} />
                                </div>
                                <div className="w-50">
                                    <label className="form-label text-light">Phone no</label>
                                    <input type="tel" className="form-control" {...register("userphone")} value={user.userphone} name='userphone' onInput={usereditt} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Gender</label>
                                    <select className='form-select' {...register("gender")} value={user.gender} name='gender' onChange={usereditt} >
                                        <option value="" hidden>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="w-50">
                                    <label className="form-label">Role</label>
                                    <select className='form-select' {...register("role")} value={user.role} name='role' onChange={usereditt} >
                                        <option value="" hidden>Select</option>
                                        <option value="User">User</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Super Admin">Super Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Password</label>
                                    <input type={showPassword ? "text" : "password"} className="form-control" {...register("pass")} value={user.pass} name='pass' onInput={usereditt} />
                                </div>
                                <div className="w-50">
                                    <label className="form-label">Profile pic</label>
                                    <input type="url" className="form-control" placeholder='Url only' {...register("profileurl")} value={user.profileurl} name='profileurl' onInput={usereditt} />
                                </div>
                            </div>
                            <div className="mb-3 form-check d-flex gap-2">
                                <input type="checkbox" className="form-check-input" onChange={HideAndShow} />
                                <label className="form-check-label">Show Password</label>
                            </div>
                            <input type="submit" value={"Update"} className="btn w-100 btn-success mt-3"></input>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UserEdit