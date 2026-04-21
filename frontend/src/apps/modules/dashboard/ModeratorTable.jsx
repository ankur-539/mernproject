import React, { Fragment } from 'react'

function ModeratorTable(props) {

    const a = props.mdtor;

    return (
        <Fragment>
            <p className="m-0 fs-5 fw-bold">Super Admin</p>
            <table className="table table-info table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col" className='border'>U.Name</th>
                        <th scope="col" className='border'>Password</th>
                        <th scope="col" className='border'>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {a.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td className='border align-middle'>{user.username}</td>
                                <td className='border align-middle'>{user.pass}</td>
                                <td className='border align-middle'>{user.dob}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ModeratorTable