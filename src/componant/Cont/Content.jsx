import React from "react";

export default function Content() {
  return (
    <>
      <div className="bg-dark ">
        <div className="container p-5  text-center">
          <div className="row">
            <div className="col-md-4 pb-3 text-white">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p className="pt-2">Clark, MO 65243</p>
            </div>
            <div className="col-md-4 pb-3 text-white">
              <h2>AROUND THE WEB</h2>
              <div className="icon ">
                <i class="fa-brands fa-facebook fa-2xl m-3 "></i>
                <i class="fa-brands fa-twitter fa-2xl m-3"></i>
                <i class="fa-brands fa-facebook fa-2xl m-3"></i>
                <i class="fa-brands fa-twitter fa-2xl m-3"></i>
              </div>
            </div>
            <div className="col-md-4 pb-3 text-white">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
