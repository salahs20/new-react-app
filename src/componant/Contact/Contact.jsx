import React from "react";

export default function Contact() {
  return (
    <>
      <div className="h text-center p-5">
        <h1>CONATCT SECTION</h1>
      </div>
      <form action="" className="container mt-5 w-75">
        <input
          type="text"
          placeholder="userName"
          className="form-control m-4"
        />
        <input
          type="numper"
          placeholder="userAge"
          className="form-control m-4"
        />
        <input
          type="email"
          placeholder="userEmail"
          className="form-control m-4"
        />
        <input
          type="password"
          placeholder="userPassword"
          className="form-control m-4"
        />
        <button className="btn btn-success m-4">Send Massge</button>
      </form>
    </>
  );
}
