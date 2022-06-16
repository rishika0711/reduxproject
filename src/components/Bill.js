import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBill, deleteBill, removeBill } from '../actions';
import "./bill.css";

const Bill = () => {

  const [inputData, setInputData] = useState('');
  const list = useSelector((state)=>state.billReducers.list);

  const dispatch = useDispatch();
  
  return (
    <>
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <figcaption>Add your Bills Here</figcaption>
        </figure>
        <div className='addItems'>
          <input type="text" placeholder='Add Items'
          value={inputData}
          onChange={(event)=> setInputData(event.target.value)}
          />
          <i className='fa fa-plus add-btn' onClick={() =>dispatch(addBill(inputData)) } ></i>
        </div>

        <div className='showItems'>
            {
                list.map((elem) => {
                    return(
                    <div className='eachItem' key={elem.id}>
                <h3>{elem.data}</h3>
                <div className='bill-btn'>
                <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={()=>dispatch(deleteBill(elem.id),setInputData(''))}></i>
            </div>
            </div>
                    )
                })
            }
            
        </div>
        <div className='showItms'>
            <button className='btn effect04'data-sm-link-text="remove All"
            onClick={()=>dispatch(removeBill())}
            ><span>Check List</span></button>
        </div>

      </div>
    </div>
    </ >
  )
}

export default Bill;