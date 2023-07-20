import React from "react";

export const AboutUs = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div style={{ height: "auto", width: "60vw" }}>
        <div className="card-body" style={{ margin: "0.5rem" }}>
          <img
            className="img-fluid"
            src="https://images.adsttc.com/media/images/6260/4372/3e4b/3139/b100/0001/large_jpg/salao-beleza-12.jpg?1650475882"
            alt=""
            style={{
              width: "45vw",
              height: "40vh",
              marginLeft: "3rem",
              borderRadius: "7px",
              marginBottom: "1rem",
            }}
          />
          <p>
            The ‘Organization Name’ was established by business person Kate
            Cynthia in 1976. Joined by her little girls, Larry and keeth, before
            long, the trio has developed the business to what it is today. The
            honor winning sisters have buckled down and keep on working
            unendingly on enhancing and keeping up benchmarks over the business
            and are now extremely energized with the presentation of the new
            Beauty and Skin Clinic on Grafton Street “Our customers are vital to
            us, so we constantly train our specialists to guarantee that all
            medicines are of the most astounding standard and that every
            customer gets the best consideration”
          </p>
        </div>
      </div>
    </div>
  );
};
