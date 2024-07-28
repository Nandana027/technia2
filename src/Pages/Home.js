import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Features from "../Components/Features";
import Testimonial from "../Components/Testimonial";
import Mentors from "../Components/Mentors";
import CourseCarousel from "../Components/CouresSlide";
import useInView from "../Components/UseInView";

const Home = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });
  const [setRef3, inView3] = useInView({ threshold: 0.1 });
  const [setRef4, inView4] = useInView({ threshold: 0.1 });
  const [setRef5, inView5] = useInView({ threshold: 0.1 });

  return (
    <div className="flex flex-col gap-7">
      {/* Gradient part */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-center items-center gap-x-[30%]  bg-gradient-to-r from-yellow-500 p-[10%] text-center md:text-left"
        ref={setRef1}
      >
        <p className="text-black font-bold text-3xl md:text-6xl ">
          Enhance your learning with Technies Acadmia <br />
          <span className="text-black font-light text-lg">
            learn with technis learn with technia learn with technia learn with technia 
          </span>
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col gap-10 mt-10 md:mt-0"
        >
          <p className="text-yellow-700 font-bold text-2xl md:text-4xl">KNOW MORE ABOUT US</p>
          <button className="border-solid border-2 border-black rounded-2xl p-3 text-2xl font-semibold bg-black text-white transition transform hover:scale-105">
            Explore
          </button>
        </motion.div>
      </motion.div>

      {/* Features card */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: inView2 ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        ref={setRef2}
      >
        <Features />
      </motion.div>

      {/* Testimonial */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: inView3 ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        ref={setRef3}
      >
        <Testimonial />
      </motion.div>

      {/* Mentor */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: inView4 ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        ref={setRef4}
      >
        <Mentors />
      </motion.div>

      {/* Courses */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView5 ? 1 : 0}}
        transition={{ duration: 1, delay: 0.3 }}
        ref={setRef5}
      >
        <h1 className="text-center text-4xl md:text-6xl font-bold text-yellow-500 mt-10 space-y-10">Our Top Courses!!</h1>
        <CourseCarousel />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: inView5 ? 1 : 0 }}
        transition={{ duration: 0, delay: 0 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
