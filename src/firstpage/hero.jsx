import React from "react";


const Hero = () => {
  return (
    <>
  <div className="relative h-screen flex justify-center items-center overflow-hidden" style={{ background: '#000D3F' }}>
  {/* Background Ellipse */}
  <img src="/ellipse.svg" alt="" />

  {/* Text Section */}
  <div className="absolute h-screen w-screen text-white">
    {/* AI Text */}
    <p className="absolute top-8 left-8 font-jost font-medium text-[6vw] lg:text-[2.5vw]">AI</p>

    {/* Title */}
    <h1 className="font-jost font-extrabold text-[8vw] lg:text-[7vw] text-center mt-10">
      SPARCWORKSHOP2k24
    </h1>
  </div>

  {/* Image of the Doctor */}
  <img
    className="absolute bottom-0 mx-auto w-[300px] md:w-[400px] lg:w-[550px]"
    src="/doctor.png"
    alt="Modern doctor with AR"
  />

  {/* Register Button Section */}
  <div className="absolute bottom-8 flex flex-col items-center gap-4">
    <a
      href="google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-bl from-[#112dbc] via-[#1a33af] to-[#2238a4] px-6 py-2 font-jost text-white tracking-wide rounded-md"
    >
      Register Now
    </a>
    <img src="/arrow.png" alt="Arrow icon" />
  </div>
</div>


  </>
    
  );
};

export default Hero;