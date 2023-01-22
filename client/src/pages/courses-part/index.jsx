import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./index.scss";
const CoursesPart = () => {
    const[course,setCourse]=useState([])

    const getData =async()=>{
        let data = await axios.get('http://localhost:8000/courses')
        setCourse(await data.data)
    }

    useEffect(() => {
     getData();
    }, [])
    


  return (
    <div id="courses">
      <div className="title">
        <h1>Our featured courses</h1>
      </div>
      <div id="allCard">
          {course.map((element)=>{
            return(
               <Link to={`home-page/${element._id}`}>
                <div className="courseCard">
                    <div className="courseImg"><img src={element.img} alt="" /></div>
                    <div className="courseText">
                        <h1>{element.title}</h1>
                        <h3>{element.description}</h3>
                        <h2>$ {element.price}</h2>
                    </div>
                </div>
               </Link>
            )
        })}

      </div>
      
    </div>
  );
};

export default CoursesPart;
