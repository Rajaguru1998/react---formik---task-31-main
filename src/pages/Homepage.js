import React from "react";

const Homepage = () => {
  return (
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mt-5">
      <div class="col-9 col-sm-8 col-lg-6">
        <img
          src="https://cdn.pixabay.com/photo/2023/07/13/09/04/ai-generated-8124265_1280.jpg"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="600"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="text col-lg-5">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-center" style={{color: "#04AA6D",fontSize:75}}>
          Library Management System
        </h1>
        <p class="lead text-center" style={{color: "#FFF4A2",fontSize:35}}>
          Designed By Rajaguru
          <span class="material-symbols-outlined">deployed_code</span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
