import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";


const ExpertsPart = () => {
    const[expert,setExpert]=useState([])

    const getdata =async()=>{
        let data= await axios.get('http://localhost:8000/experts')
        setExpert(await data.data)
    }
    useEffect(() => {
    getdata()
    }, [])

    return (
      
      <div id="carousel">
        <div className="carousel">
          <Swiper
            slidesPerView={4}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={35}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {expert?.map((el) => {
              return (
                
                <SwiperSlide>
                  
                    <div className="card1">
                      <img src={el.img} alt="" className="carouselimg" />
                      <div className="info">
                        <h3 className="expName">{el.name}</h3>
                        <p className="expdescription">{el.description}</p>
                      </div>
                    </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
}

export default ExpertsPart