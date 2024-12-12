// Import React and Tailwind
import React from "react";

const Second = () => {
  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ background: "#000D3F", color: "white" }}
    >
      <div className="relative container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center">
        {/* Ellipse */}
        <div
          className="absolute rounded-full"
          style={{
            width: "1111.64px",
            height: "1111.64px",
            left: "603px",
            opacity: 0,
            background: "#ffffff",
          }}
        ></div>

        {/* Shadow behind the image */}
        <div
          className="absolute rounded-full"
          style={{
            width: "1000px",
            height: "1000px",
            left: "603px",
            opacity: 1,
            background:
              "radial-gradient(50% 50% at 50% 50%, #5C1EFE 0%, rgba(1, 0, 255, 0) 92.71%)",
          }}
        ></div>

        {/* Left Section */}
        <div className="lg:w-2/3 text-left">
          <h1 className="text-4xl font-bold mb-4">AI</h1>
          <h2 className="text-3xl font-extrabold leading-snug mb-6">
            LOW-COST GPU AND AI BASED COMPUTATIONAL TOOL-SUITE FOR CANCER
            DIAGNOSIS AND RADIOTHERAPY TREATMENT
          </h2>

          <div className="bg-blue-800 text-center text-white py-3 px-6 rounded-lg inline-block mb-6">
            <span className="font-bold text-lg">16-20 DECEMBER 2024</span>
          </div>

          <h3 className="text-2xl font-bold mb-4">TOPICS COVERED</h3>
          <ul className="text-sm space-y-2">
            {[
              "INTRODUCTION TO PARALLEL AND GPU COMPUTING",
              "PARALLEL MODELS, DATA STRUCTURES AND ALGORITHMS",
              "ADVANCED GPU PROGRAMMING",
              "MACHINE LEARNING AND NEURAL NETWORK BASICS",
              "CONVOLUTIONAL NEURAL NETWORKS",
              "IMAGE SEGMENTATION AND U-NET",
              "AI IN CANCER DETECTION",
              "AI IN RADIOTHERAPY",
              "EARLY DETECTION OF CERVICAL CANCER USING OBJECT DETECTION AND CLASSIFICATION",
              "MEDICAL IMAGING",
              "GENERATIVE ADVERSARIAL NETWORKS (GAN)",
              "SYNTHESIS OF FBCT IMAGES FROM MR AND CBCT IMAGES",
            ].map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0 relative">
          <img
            src="doctor.png" // Replace with the path to your image
            alt="Doctor with VR"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
