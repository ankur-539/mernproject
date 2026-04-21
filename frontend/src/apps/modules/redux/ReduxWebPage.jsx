import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseAge,decrementAge } from '../redux/ReduxFunctions';


function ReduxWebPage() {

  const data = useSelector((e) => e.ankur.age);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Age:{data}</h2>
      <button className='btn btn-warning me-3'onClick={()=>dispatch(increaseAge())}>increment</button>
      <button className='btn btn-warning' onClick={()=>dispatch(decrementAge())}>decrement</button>
      
      
    </div>
  )
}

export default ReduxWebPage;