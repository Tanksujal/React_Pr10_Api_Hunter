import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Axios = () => {
  const [card, setcard] = useState("");
  const getdata = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    setcard(data.data);
  };
  useEffect(() => {
    getdata();
  });
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-2">
                <Link to={"/fetch"} className="btn btn-primary mt-2">Fetch</Link>
            </div>
        </div>
        <div className="row">
          {
            card && card.map((val)=>{
                return(
                    <div className="col-3 mt-5">
            <div className="card" style={{ height:"100%"}}>
              <img src={val.image} className="card-img-top" alt="..."style={{height:"50%",objectFit:"contain"}} />
              <div className="card-body">
                <h5 className="card-title">{val.category}</h5>
                <p className="card-text">
                  {val.description}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
                )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Axios;
