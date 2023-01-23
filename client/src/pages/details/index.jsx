import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const [deleteById, setDeleteById] = useState([]);
  const { _id } = useParams();

  const navigate = useNavigate();

  const getData = async () => {
    let data = await axios.get(`http://localhost:8000/courses/${_id}`);
    setDetail(await data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8000/courses/${_id}`);
    let newList = deleteById.filter((q) => q._id !== _id);
    setDeleteById(newList);
    navigate("/");
  };

  return (
    <div id="Details">
      <button className="goBack" onClick={() => navigate(-1)}>
        {" "}
        Go Back
      </button>
      <button className="Delete" onClick={() => handleDelete(_id)}>
        {" "}
        Delete
      </button>

      <div className="detail">
        <div className="info">
          <p className="courseName">
            <span>Title:</span> {detail.title}
          </p>
          <p className="desc">
            <span>Description:</span> {detail.description}
          </p>
          <span className="detailsPrice">
            <span>Price: </span> $ {detail.price}
          </span>
        </div>
        <img src={detail.img} alt="" />
      </div>
    </div>
  );
};

export default Detail;
