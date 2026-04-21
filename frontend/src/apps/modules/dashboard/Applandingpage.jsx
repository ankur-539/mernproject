
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { FaChartPie } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useRef } from "react";
import { VscGraph } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { FaTable } from "react-icons/fa";

function Applandingpage() {

  const searchRef = useRef(null);
  const handelSearch = (event) => {
    searchRef.current.focus();
  }

  const userinfo = JSON.parse(localStorage.getItem("logininfo"));
  

  return (
    <div className="container-fluid overflow-hidden fm">
      <div className="row d-flex ">
        {/**************start side bar*******************/}
        <div className="col-1 g-0 w-auto d-flex">
          <div className="hight width px-2 d-flex flex-column align-items-center gap-4 py-3 c-bg-3 text-white shadow">
            <VscLayoutSidebarLeft className="fs-3" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
              aria-expanded="false" aria-controls="collapseWidthExample" />
            <hr className="w-100 m-0" />
            <Link to={""} className="text-white"><MdDashboard></MdDashboard></Link>
            <Link to={"contact"} className="text-white" ><MdContacts></MdContacts></Link>
            <Link to={"product"} className="text-white"><MdProductionQuantityLimits></MdProductionQuantityLimits></Link>
            <Link to={"graph"} className="text-white"><VscGraph></VscGraph></Link>
            <Link to={"redux"} className="text-white"><FaChartPie></FaChartPie></Link>
            <Link to={"calender"} className="text-white"><SlCalender></SlCalender></Link>
            <Link to={"table"} className="text-white"><FaTable></FaTable></Link>
            <Link to={"setting"} className="text-white mt-auto mb-2 fs-5"><AiFillSetting></AiFillSetting></Link>
          </div>

          <div className="collapse collapse-horizontal w-75 hide" id="collapseWidthExample">
            <div className="card card-body rounded-0 border-0 hight c-bg-4 gap-3">
              <p className="m-0 fw-bold fm text-light fs-4 fw-bold">AppName</p>
              <hr className="w-100 m-0 mb-1 text-light">
              </hr>
              <Link to={""} className="m-0 py-1 text-decoration-none fw-bold fm text-light abc">Dashboard</Link>
              <Link to={"contact"} className="m-0 py-1 text-decoration-none fw-bold fm text-light abc">Contact</Link>
              <Link to={"product"} className="m-0 py-1 text-decoration-none fw-bold fm text-light abc">Product</Link>
              <Link to={"graph"} className="m-0 py-1 text-decoration-none fw-bold fm text-light abc">Graph</Link>
              <Link to={"redux"} className="m-0 py-1 text-decoration-none fw-bold fm text-light abc">Redux</Link>
              <Link to={"calender"} className="m-0 py-1 text-decoration-none fw-bold fm text-light abc">Calender</Link>
              <Link to={"table"} className="m-0 py-1 text-decoration-none fw-bold fm text-light abc">PaginationTable</Link>
              <Link to={"addnew"} type="button" className="btn btn-outline-light m-0 mt-auto">
                + add new entry
              </Link>
            </div>
          </div>
        </div>
        {/**************end side bar*******************/}

        <div className="col-1 g-0 flex-grow-1">
          {/**************start search bar*******************/}
          <div className=" shadow d-flex align-items-center px-4 py-3 c-bg-4 text-white hight-3">
            <FaSearch className='fs-5 hide' onClick={handelSearch}></FaSearch>
            <input className="form-control border-0 w-50 mx-3 " type="search" placeholder="Search" aria-label="Search" ref={searchRef} />
            <FaRegBell className='ms-auto me-4 c-pointer fs-4 hide'></FaRegBell>
            <div className='pro me-3 p-3'></div>
            <div className="dropdown text-white">
              <div className="dropdown-toggle c-pointer" data-bs-toggle="dropdown" aria-expanded="false">{userinfo.uemail}</div>
              <ul className="dropdown-menu mt-3">
                <li><Link to="" className="dropdown-item" href="#">User profile</Link></li>
                <li><Link to="/usermanagement" className="dropdown-item" href="#">Sign out</Link></li>
              </ul>
            </div>
          </div>
          {/**************end search bar*******************/}

          {/**************start containt area*******************/}

          <div className="container-fluid hight-1 bg-info overflow-y-auto">
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
          </div>
          {/**************end containt area*******************/}

          {/**************start footer*******************/}
          <div className="c-bg-4 text-light shadow d-flex align-items-center gap-4 p-4 hight-2 ">
            <div>©Company</div>
            <IoLogoFacebook className='ms-auto fs-5 c-pointer opacity-75'></IoLogoFacebook>
            <IoLogoInstagram className='fs-5 c-pointer opacity-75'></IoLogoInstagram>
            <RiTwitterXLine className='fs-5 c-pointer opacity-75'></RiTwitterXLine>
            <ImGithub className='fs-5 c-pointer opacity-75'></ImGithub>
            <FaYoutube className='fs-5 c-pointer opacity-75'></FaYoutube>
          </div>
        </div>
        {/**************start footer*******************/}
      </div>
    </div>
  );
};
export default Applandingpage;