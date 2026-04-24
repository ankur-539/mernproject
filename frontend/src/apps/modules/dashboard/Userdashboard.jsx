
import { ToastContainer } from "react-toastify";
// import { Mychart, MySecondGraph } from "./Graph";
import UserSignupDetails from "./UserSignupDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import ModeratorTable from "./ModeratorTable";
import UserTable from "./UserTable";

function Userdashboard() {

    const [user, setUser] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [moderator, setModerator] = useState([]);
    const [total, updateTotal] = useState(0)
    const [male, updateMale] = useState(0)
    const [female, updateFemale] = useState(0)
    const userapi = () => {
        axios.get("http://localhost:7676/usersinfo").then((e) => {
            console.log(e)

            setAdmin(e.data.data.filter((x) => {

                return x.role === "Admin"
            }))
            setUser(e.data.data.filter((x) => {
                return x.role === "User"
            }))
            setModerator(e.data.data.filter((x) => {
                return x.role === "Super Admin"
            }))
            updateFemale(
                e.data.data.filter(x => x.gender === "Female").length
            )
            updateMale(
                e.data.data.filter(x => x.gender === "Male").length
            )
            updateTotal(e.data.data.length)

        })
    }

    useEffect(() => {
        userapi()
    }, []);

    return (
        <div className="row mt-3">
            <ToastContainer />
            <div className="col-md-3">
                <div className="card text-center mb-3 hight-5">
                    <div className="card-body pt-1 overflow-auto hide-scrollbar">
                        <div className="colmd-12  fw-semibold text-start p-2 mt-1 color-1">Total Users : {total}</div>
                        <div className="col-sm-12  fw-semibold text-start p-2 mt-2 color-2">Male Users : {male}</div>
                        <div className="col-sm-12  fw-semibold text-start p-2 mt-2 color-3">Female Users : {female}</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-center mb-3 hight-5">
                    <div className="card-body pt-1 overflow-auto hide-scrollbar">
                        <AdminTable adm={admin}></AdminTable>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-center mb-3 hight-5">
                    <div className="card-body overflow-auto hide-scrollbar pt-1">
                        <ModeratorTable mdtor={moderator}></ModeratorTable>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-center mb-3 hight-5">
                    <div className="card-body pt-1 overflow-auto hide-scrollbar">
                        <UserTable userr={user}></UserTable>
                    </div>
                </div>
            </div>
            {/* <div className="col-sm-8">
                <div className="card text-center mb-3">
                    <div className="card-body">
                        <Mychart />
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card text-center mb-3">
                    <div className="card-body">
                        <MySecondGraph />
                    </div>
                </div>
            </div> */}
            <div className="col-sm-12">
                <UserSignupDetails />
            </div>
        </div>
    )
}

export default Userdashboard;