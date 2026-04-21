import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TbTruckReturn } from "react-icons/tb";
import { useDispatch} from 'react-redux';
import { cart } from '../redux/ReduxFunctions';


function Productdetails() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [qntt, newQntt] = useState(1);


    const prodapi = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
            console.log(res.data);
            setItem(res.data);

        })
    }
    useEffect(() => {
        prodapi()
    }, [])

    const abc = (e) => {
        newQntt(e.target.value);
    }
    const dispatch = useDispatch();

    return (

        <div className='container-fluid hight-1 bg-white'>
            <div className='row bg-light'>
                <div className='col-md-3 border d-flex align-items-center justify-content-center flex-column'>
                    <img src={item.thumbnail} alt={item.id} />
                </div>

                <div className='col-md-7 pt-3'>
                    <h2>{item.title}</h2>
                    <p className="text-muted">{item.category}</p>
                    <p>{item.description}</p>

                    <h4 className="text-primary">
                        ₹{item.price}
                        <small className="text-secondary ms-2">
                            ({item.discountPercentage}% off)
                        </small>
                    </h4>

                    {item.reviews && item.reviews.length > 0 && (
                        <div className="mt-4 mb-3">
                            <h5>Reviews:</h5>
                            {item.reviews.map((r, idx) => (
                                <div key={idx} className="border-top pt-2">
                                    <p className="mb-1">
                                        <strong>{r.reviewerName}</strong> – ⭐ {r.rating}
                                    </p>
                                    <p className="mb-0">{r.comment}</p>
                                </div>
                            ))}
                            {/* <p className='fs-4 fw-bold  border '>{item.warrantyInformation}</p> */}
                            <div className='p-3 bg-white rounded mt-2'><pre className='bg-light py-2 fw-bold text-danger rounded px-1 d-inline me-3'>{item.brand}</pre>{item.warrantyInformation}</div>
                            <div className='p-3 bg-white rounded mt-2'><TbTruckReturn className=' me-2 ' />{item.returnPolicy}</div>
                        </div>
                    )}
                </div>

                <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <div className="card" >
                        <div className="card-body">
                            <h2 className="card-title">₹{item.price * qntt}</h2>
                            <select className="form-select mt-4" defaultValue="6" aria-label="Default select example" value={qntt} onChange={abc}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button type="button" className="btn btn-warning w-100 mt-3 action-1" onClick={() => dispatch(cart())}>Add to cart</button>
                            <button type="button" className="btn btn-danger w-100 mt-3">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Productdetails