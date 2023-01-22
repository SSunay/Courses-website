import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'

const Detail = () => {
  const[detail,setDetail]=useState([])
  const { _id } = useParams();

  const navigate = useNavigate();

  const getData=async()=>{
      let data = await axios.get(`http://localhost:8000/courses/${_id}`)
      setDetail(await data.data)
  }
  useEffect(() => {
   getData()
  }, [])
  
  return (
    <div id="Details">
      
      <button className="goBack" onClick={() => navigate(-1)}> Go Back</button>
      {/* <div className="container"> */}
        <div className="detail">
          <div className="info">
            <p className="courseName"><span>Title:</span> {detail.title}</p>
            <p className="desc"><span>Description:</span> {detail.description}</p>
            <span className="detailsPrice"><span>Price: </span> $ {detail.price}</span>
          </div>
          <img src={detail.img} alt="" />
        </div>
      {/* </div> */}
    </div>
  )
}

export default Detail