import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="relative h-screen flex justify-center items-center overflow-hidden"
        style={{ background: "#000D3F" }}
      >
        {/* Background Ellipse */}
        <img src="/ellipse.svg" alt="" />

        {/* Text Section */}
        <div className="absolute h-screen w-screen text-white">
          {/* AI Club Logo */}
          <img
            src="/AI Club Logo.png"
            alt="AI Club Logo"
            className="absolute top-8 left-8 w-[8vw] lg:w-[4vw] animate-fade-in"
          />

          {/* Title */}
          <h1 className="font-jost font-extrabold text-[8vw] lg:text-[7vw] text-center mt-10 animate-slide-up">
            SPARCWORKSHOP2k24
          </h1>
        </div>


        {/* Logos for NITC, SPARC, and University of Utah
        <div className="absolute top-8 right-8 flex gap-4">
          <img
            src="/nitc-logo.png" // Update with the path to the NITC logo
            alt="NITC Logo"
            className="w-[8vw] lg:w-[4vw] object-contain"
          />
          <img
            src="/spark-logo.png" // Update with the path to the SPARC logo
            alt="SPARC Logo"
            className="w-[8vw] lg:w-[4vw] object-contain"
          />
          <img
            src="/utah-logo.png" // Update with the path to the University of Utah logo
            alt="University of Utah Logo"
            className="w-[8vw] lg:w-[4vw] object-contain"
          />
        </div> */}



        {/* Image of the Doctor */}
        <img
          className="absolute bottom-0 mx-auto w-[300px] md:w-[400px] lg:w-[550px] animate-floating"
          src="/doctor.png"
          alt="Modern doctor with AR"
        />

        {/* Register Button Section */}
        <div className="absolute bottom-8 flex flex-col items-center gap-4">
          {/* <a
            href="google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-bl from-[#112dbc] via-[#1a33af] to-[#2238a4] px-6 py-2 font-jost text-white tracking-wide rounded-md"
          >
            Register Now
          </a> */}
          <img
            src="/arrow.png"
            alt="Arrow icon"
            className="hover:animate-bounce cursor-pointer animate-floating"
          />
        </div>
      </div>

      {/* Animations using TailwindCSS */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 2s ease-in-out;
          }

          .animate-slide-up {
            animation: slideUp 1.5s ease-in-out;
          }

          .animate-floating {
            animation: floating 3s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes floating {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
    </>
  );
};

export default Hero;
