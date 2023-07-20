import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Appointment = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2xoypnh",
        "template_klk0orf",
        form.current,
        "eJw1yOsZJSAMJWVIK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="container" style={{ width: "39rem", marginTop: "6rem" }}>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            for="exampleFormControlInput1"
            className="form-label"
            style={{ fontWeight: "500" }}
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="user_name"
          />
          <label
            for="exampleFormControlInput1"
            className="form-label"
            style={{ fontWeight: "500" }}
          >
            Email address
          </label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-2">
          <label
            for="exampleFormControlTextarea1"
            className="form-label"
            style={{ fontWeight: "500" }}
          >
            Massage
          </label>
          <textarea
            className="form-control"
            name="user_message"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <div>
            <button
              type="submit"
              className="btn btn-primary mt-4 p-1 text-light"
              style={{ width: "15rem" }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
