import React from "react";
import { motion } from "framer-motion";

const Second = () => {
  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ background: "#000D3F", color: "white" }}
    >
      <div className="relative container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center">
        {/* Ellipse with fade-in animation */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "1111.64px",
            height: "1111.64px",
            left: "603px",
            background: "#ffffff",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        {/* Shadow behind the image with scale and opacity animation */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "1000px",
            height: "1000px",
            left: "603px",
            background:
              "radial-gradient(50% 50% at 50% 50%, #5C1EFE 0%, rgba(1, 0, 255, 0) 92.71%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        ></motion.div>

        {/* Left Section */}
        <motion.div
          className="lg:w-2/3 text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <h1 className="text-4xl font-bold mb-4">AI</h1> */}
          <img
            src="/AI Club Logo.png"
            alt="AI Club Logo"
            className="w-[100px] lg:w-[50px] mb-4"
          />
          <h2 className="text-3xl font-extrabold leading-snug mb-6">
            LOW-COST GPU AND AI BASED COMPUTATIONAL TOOL-SUITE FOR CANCER
            DIAGNOSIS AND RADIOTHERAPY TREATMENT
          </h2>

          {/* Animated Date Section */}
          <motion.div
            className="bg-blue-800 text-center text-white py-3 px-6 rounded-lg inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <span className="font-bold text-lg">16-20 DECEMBER 2024</span>
          </motion.div>

          <h3 className="text-2xl font-bold mb-4">TOPICS COVERED</h3>
          <motion.ul
            className="text-sm space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
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
          </motion.ul>
        </motion.div>

        {/* Right Section with bounce-in animation */}
        <motion.div
          className="lg:w-1/3 flex justify-center mt-8 lg:mt-0 relative"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Animated Doctor Image with Floating Effect */}
          <motion.img
            src="doctor.png" // Replace with the path to your image
            alt="Doctor with VR"
            className="rounded-lg w-full h-auto"
            initial={{ y: 0 }}
            animate={{
              y: [0, -10, 0], // Move up and down to create floating effect
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Second;
