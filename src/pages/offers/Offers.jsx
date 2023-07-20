import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServicesData } from "../../data/ServicesData";
import "./Offers.css";

export const Offers = () => {
  const { id } = useParams();
  const findData = ServicesData.find((item) => item.id === parseInt(id));
  const [data, setData] = useState([findData]);

  return (
    <div className="container px-4" style={{ width: "100%" }}>
      <h1 style={{ display: "flex", justifyContent: "center", margin: "2rem" ,FontWeight:"400" }}>
        {" "}
        Offers
      </h1>
      <div className="row">
        {data.map((i) => {
          return (
            <>
              {i.offers.map((item) => {
                return (
                  <div className="col-4" style={{ width: "16rem" }}>
                    <img src={item.image} className="card-img-top " alt="" />
                    <div className="card-body">
                      <h4 className="card-text">{item.offerService}</h4>
                      <h5>{item.price}</h5>
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};
