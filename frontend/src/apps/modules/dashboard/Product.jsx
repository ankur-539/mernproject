import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaTable } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { cart } from '../redux/ReduxFunctions';

function Product() {

  const [item, updateitem] = useState([]);
  const [allFilter, allUpdate] = useState([]);
  const [opt, setOpt] = useState("");
  const [structure, setStructure] = useState("card");
  const prodapi = () => {

    // axios.get("https://jsonfakery.com/products/random/32").then((e) => {
    //   console.log(e.data);
    //   updateitem(e.data)
    // })

    axios.get('https://dummyjson.com/products?limit=194').then((e) => {
      console.log(e.data.products);
      updateitem(e.data.products);
      allUpdate(e.data.products);
    })

  };
  useEffect(() => {
    prodapi();
  }, []);


  const handleOption = (e) => {
    setOpt(e.target.value);

  };

  const filterEachItem = (d) => {
    console.log(d.target.value);
    const ankurfilter = allFilter.filter((ghr) => {
      // console.log("this is all filter value",ghr.title)
      return (d.target.value === ghr.title || d.target.value === String(ghr.price) || d.target.value === ghr.category)
    });
    updateitem(ankurfilter);

  }
  const addToCart = useSelector((al) => al.ankur.value);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <div className="row mt-4 g-0">
        <div className="col-sm-6 d-flex jus-cen">
          <div className="form-check form-check-inline p-0 ">
            <select className='form-select' onChange={handleOption}>
              <option hidden value="datafilter">Filter Product By</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="categories">Categories</option>
            </select>
          </div>

          <div className="form-check form-check-inline p-0">
            <select className='form-select' id='o' onChange={filterEachItem}>
              <option hidden>By:-{opt}</option>
              {item.map((d) => {
                if (opt === "name") {
                  return (
                    <option value={d.title} key={d.id} >{d.title}</option>
                  )
                }
                else if (opt === "price")
                  return (
                    <option value={d.price} key={d.id}>{d.price}₹</option>
                  )
                else if (opt === "categories")
                  return (
                    <option value={d.category} key={d.id}>{d.category}</option>
                  )
              })}
            </select>
          </div>
        </div>
        <div className="col-sm-6 text-end t-al-c mtt">
          <span className="badge bg-light text-black me-2 fs-5" onClick={() => setStructure("card")}><TbCards /></span>
          <span className="badge bg-light text-black me-2 fs-5" onClick={() => setStructure("table")}><FaTable /></span>
          <span className="badge bg-light text-black me-2 fs-5" onClick={() => setStructure("list")}><FaListAlt /></span>
          {/* <span className="badge bg-light text-black me-2 fs-5"><FaCartShopping /></span> */}
          <button type="button" className="btn mb-1 bg-light position-relative">
            <FaCartShopping className='fs-5' />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {addToCart}
            </span>
          </button>
        </div>
      </div>

      {structure === "card" && <div className="row">
        {item.map((d) => {
          if (d.price <= 50) {
            return (
              <div className="col-md-3" key={d.id}>
                <div className='text-decoration-none'>
                  <div className="card mt-4 border-0 shadow abc1 bg-light bg-gradient">
                    <span className="badge text-bg-info position-absolute poss blink">Top Pics</span>
                    <Link to={"details/" + d.id}><img src={d.thumbnail} className="card-img-top imggg" alt="..." /></Link>
                    <div className="card-body bg-white rounded-bottom">
                      <h5 className="card-title fw-bold">{d.title}</h5>
                      <p className="card-text"><b>Category : </b>{d.category}</p>
                      <p className="card-text"><b>Price : </b>{d.price}₹</p>
                      <h5>{d.availabilityStatus} : <span className="badge text-bg-secondary">{d.stock}</span></h5>
                      <button type="button" className="btn btn-warning w-100 mt-3 action-1" onClick={() => dispatch(cart())}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          else if (d.price > 50 && d.price <= 500) {
            return (
              <div className="col-md-3" key={d.id}>
                <Link to={"details/" + d.id} className='text-decoration-none'>
                  <div className="card mt-4 border-0 shadow abc1 bg-light bg-gradient">
                    <span className="badge text-bg-danger position-absolute poss blink">Top Sellers</span>
                    <img src={d.thumbnail} className="card-img-top imggg" alt="..." />
                    <div className="card-body bg-white rounded-bottom">
                      <h5 className="card-title fw-bold">{d.title}</h5>
                      <p className="card-text"><b>Category : </b>{d.category}</p>
                      <p className="card-text"><b>Price : </b>{d.price}₹</p>
                      <h5>{d.availabilityStatus} : <span className="badge text-bg-secondary">{d.stock}</span></h5>
                      <button type="button" className="btn btn-warning w-100 mt-3 action-1" onClick={() => dispatch(cart())}>Add to cart</button>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }

          else {
            return (
              <div className="col-md-3" key={d.id}>
                <Link to={"details/" + d.id} className='text-decoration-none'>
                  <div className="card mt-4 border-0 shadow abc1 bg-light bg-gradient">
                    <span className="badge text-bg-warning position-absolute poss blink">premium</span>
                    <img src={d.thumbnail} className="card-img-top imggg" alt="..." />
                    <div className="card-body bg-white rounded-bottom">
                      <h5 className="card-title fw-bold">{d.title}</h5>
                      <p className="card-text"><b>Category : </b>{d.category}</p>
                      <p className="card-text"><b>Price : </b>{d.price}₹</p>
                      <h5>{d.availabilityStatus} : <span className="badge text-bg-secondary">{d.stock}</span></h5>
                      <button type="button" className="btn btn-warning w-100 mt-3 action-1" onClick={() => dispatch(cart())}>Add to cart</button>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }
        })}
      </div>}

      {structure === "table" && <div className="row">
        <div className="col-sm-12 mt-4 overflow-auto">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className='border'>Id</th>
                <th scope="col" className='border'>Image</th>
                <th scope="col" className='border'>Name</th>
                <th scope="col" className='border'>Price</th>
                <th scope="col" className='border'>Categories</th>
                <th scope="col" className='border'>Stock</th>
                <th scope="col" className='border'>Rating</th>
              </tr>
            </thead>
            <tbody>
              {item.map((d) => {
                return (
                  <tr key={d.id}>
                    <td className='border align-middle'>{d.id}</td>
                    <td className='border align-middle'><img src={d.thumbnail} alt='...' className='imgggg' /></td>
                    <td className='border align-middle'>{d.title}</td>
                    <td className='border align-middle'>{d.price}₹</td>
                    <td className='border align-middle'>{d.category}</td>
                    <td className='border align-middle'>{d.stock}</td>
                    <td className='border align-middle'>{d.rating}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>}

      {structure === "list" && <div className="row">
        {item.map((d) => {
          return (
            <div className="col-sm-4 mt-4" key={d.id}>
              <ul className="list-group list-group-numbered">
                <li className="list-group-item"><b>Name: </b>{d.title}</li>
                <li className="list-group-item"><b>Price: </b>{d.price}₹</li>
                <li className="list-group-item"><b>Categories: </b>{d.category}</li>
                <li className="list-group-item"><b>Stock: </b>{d.stock}</li>
              </ul>
            </div>
          )
        })}
      </div>}

    </div>
  )
}

export default Product;



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaTable, FaListAlt } from "react-icons/fa";
// import { TbCards } from "react-icons/tb";

// function Product() {
//   const [item, setItem] = useState([]);
//   const [filteredItem, setFilteredItem] = useState([]);

//   const [opt, setOpt] = useState("");
//   const [search, setSearch] = useState("");
//   const [priceRange, setPriceRange] = useState(2000);
//   const [structure, setStructure] = useState("card");

//   /* ================= API ================= */
//   useEffect(() => {
//     axios.get("https://dummyjson.com/products?limit=100").then((res) => {
//       setItem(res.data.products);
//       setFilteredItem(res.data.products);
//     });
//   }, []);

//   /* ============ FILTER TYPE ============= */
//   const handleOption = (e) => {
//     setOpt(e.target.value);
//     setFilteredItem(item);
//   };

//   /* ============ DROPDOWN FILTER ========= */
//   const filterdata = (e) => {
//     const value = e.target.value;
//     let result = [];

//     switch (opt) {
//       case "name":
//         result = item.filter((d) => d.title === value);
//         break;
//       case "price":
//         result = item.filter((d) => d.price === Number(value));
//         break;
//       case "categories":
//         result = item.filter((d) => d.category === value);
//         break;
//       default:
//         result = item;
//     }
//     setFilteredItem(result);
//   };

//   /* ============ SEARCH =================== */
//   const searchFilter = filteredItem.filter((d) =>
//     d.title.toLowerCase().includes(search.toLowerCase())
//   );

//   /* ============ PRICE RANGE ============== */
//   const finalData = searchFilter.filter(
//     (d) => d.price <= priceRange
//   );

//   /* ============ UNIQUE DROPDOWN ========== */
//   const dropdownValues = [
//     ...new Set(
//       item.map((d) =>
//         opt === "name"
//           ? d.title
//           : opt === "price"
//             ? d.price
//             : opt === "categories"
//               ? d.category
//               : null
//       )
//     ),
//   ];

//   return (
//     <div className="container-fluid">

//       {/* ================= TOP FILTER BAR ================= */}
//       <div className="row mt-4 g-2 align-items-center">

//         <div className="col-md-2">
//           <select className="form-select" onChange={handleOption}>
//             <option hidden>Filter By</option>
//             <option value="name">Name</option>
//             <option value="price">Price</option>
//             <option value="categories">Category</option>
//           </select>
//         </div>

//         <div className="col-md-2">
//           <select className="form-select" onChange={filterdata}>
//             <option hidden>Select {opt}</option>
//             {dropdownValues.map((v, i) => (
//               <option key={i} value={v}>
//                 {opt === "price" ? `${v}₹` : v}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="col-md-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search product..."
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <div className="col-md-3">
//           <label className="form-label fw-bold">
//             Max Price: {priceRange}₹
//           </label>
//           <input
//             type="range"
//             className="form-range"
//             min="0"
//             max="2000"
//             value={priceRange}
//             onChange={(e) => setPriceRange(e.target.value)}
//           />
//         </div>

//         <div className="col-md-2 text-end">
//           <span className="badge bg-light text-dark fs-5 me-2"
//             onClick={() => setStructure("card")}><TbCards /></span>
//           <span className="badge bg-light text-dark fs-5 me-2"
//             onClick={() => setStructure("table")}><FaTable /></span>
//           <span className="badge bg-light text-dark fs-5"
//             onClick={() => setStructure("list")}><FaListAlt /></span>
//         </div>
//       </div>

//       {/* ================= CARD VIEW ================= */}
//       {structure === "card" && (
//         <div className="row">
//           {finalData.map((d) => (
//             <div className="col-md-3" key={d.id}>
//               <Link to={"details/" + d.id} className="text-decoration-none">
//                 <div className="card mt-4 shadow border-0">
//                   <img src={d.thumbnail} className="card-img-top" />
//                   <div className="card-body">
//                     <h6>{d.title}</h6>
//                     <p>{d.category}</p>
//                     <b>{d.price}₹</b>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ================= TABLE VIEW ================= */}
//       {structure === "table" && (
//         <div className="table-responsive mt-4">
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Stock</th>
//               </tr>
//             </thead>
//             <tbody>
//               {finalData.map((d) => (
//                 <tr key={d.id}>
//                   <td>{d.id}</td>
//                   <td><img src={d.thumbnail} width="60" /></td>
//                   <td>{d.title}</td>
//                   <td>{d.price}₹</td>
//                   <td>{d.category}</td>
//                   <td>{d.stock}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* ================= LIST VIEW ================= */}
//       {structure === "list" && (
//         <div className="row">
//           {finalData.map((d) => (
//             <div className="col-md-4 mt-4" key={d.id}>
//               <ul className="list-group">
//                 <li className="list-group-item"><b>Name:</b> {d.title}</li>
//                 <li className="list-group-item"><b>Price:</b> {d.price}₹</li>
//                 <li className="list-group-item"><b>Category:</b> {d.category}</li>
//                 <li className="list-group-item"><b>Stock:</b> {d.stock}</li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}

//     </div>
//   );
// }

// export default Product;
