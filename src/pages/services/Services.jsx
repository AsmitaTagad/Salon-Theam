import React, { useState } from "react";
import { ServicesData } from "../../data/ServicesData";
import "./Services.css";
import { Link } from "react-router-dom";

export const Services = () => {
  const [data, setData] = useState(ServicesData);
  const filterInitailData = ServicesData.filter(
    (item) => item.gender === "female"
  );
  const [filterData, setFilterData] = useState(filterInitailData);

  const handleFilter = (gender) => {
    const filterItems = data.filter((item) => item.gender === gender);
    setFilterData(filterItems);
  };

  return (
    <div className="ServiceContainer">
      <div>
        <div className="heading">
          <span>
            <span className="span1">List Of</span> Services
          </span>
        </div>

        <div className="buttons">
          <button onClick={() => handleFilter("female")}>Female</button>
          <button onClick={() => handleFilter("male")}>Male</button>
          <button onClick={() => handleFilter("kids")}>Kids</button>
        </div>

        {filterData.map((item) => {
          return (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Link to={`/offers/${item.id}`}>
                    <img
                      src={item.img}
                      className="img-fluid rounded-start"
                      alt=" "
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="buttons">
                      <button>{item.gender}</button>
                    </div>
                    <h3 className="card-title">{item.Service}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
