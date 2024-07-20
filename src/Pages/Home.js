import React from "react";
import Footer from "../Components/Footer";
import Features from "../Components/Features";
import Testimonial from "../Components/Testimonial";
import Mentors from "../Components/Mentors";





const Home=()=>{
    return(
        <div className="flex flex-col gap-7" >


            {/* Gradient part */}
         <div className="flex flex-row justify-center items-center gap-x-[20%] mt-[5%] bg-gradient-to-r from-yellow-500 p-[10%] ">
            <p className="text-black font-bold text-6xl">Enhance your learning with Technies Acadmia <br></br><span className="text-black font-light text-lg text-cente justify-center">learn with technis learn with technia learn with technia learn with technia learn with technia</span></p>
           
           <div className="flex flex-col gap-10">
           <p className="text-yellow-700 font-bold text-4xl font-sans">KNOW MORE ABOUT US</p>
           <button className="border-solid border-2 border-black rounded-3xl p-3 text-2xl font-semibold bg-black text-white">Explore</button>
           </div>
            

            
         </div>

         
       

         {/* features card */}
         <Features/>

         
         {/* testimonial */}
         <Testimonial/>
       
         {/* mentor */}
         <Mentors/>
       
         {/* courses */}
        <h1 className="text-center text-6xl font-bold text-yellow-500 mt-10"> Our Top Courses!!</h1>
         <div className="flex flex-col">
            <div  className="flex flex-row ml-10  gap-10 mt-10">
            <div className="border-solid border-2 shadow-lg shadow-yellow-500/90 rounded-lg  flex flex-col p-2 w-[30%] h-[40%]"> 
                <img src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg" width="700px"></img>
                
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-black">Click here</button>
               
               
           </div>
           <div className="border-solid border-2 shadow-lg shadow-yellow-500/90 rounded-lg  flex flex-col p-2 w-[30%] h-[40%]"> 
                <img src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg" width="700px"></img>
               
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-black">Click here</button>
               
               
           </div>
           <div className="border-solid border-2 shadow-lg shadow-yellow-500/90 rounded-lg  flex flex-col p-2 w-[30%] h-[40%]"> 
                <img src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg" width="700px"></img>
               
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-black">Click here</button>
               
               
           </div>
            </div>
            <div className="flex flex-row ml-10  gap-10 mt-10">
            <div className="border-solid border-2 shadow-lg shadow-yellow-500/90 rounded-lg  flex flex-col p-2 w-[30%] h-[40%]"> 
                <img src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg" width="700px"></img>
               
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-black">Click here</button>
               
               
           </div>
           <div className="border-solid border-2 shadow-lg shadow-yellow-500/90 rounded-lg  flex flex-col p-2 w-[30%] h-[40%]"> 
                <img src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg" width="700px"></img>
                
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-black">Click here</button>
               
               
           </div>
           <div className="border-solid border-2 shadow-lg shadow-yellow-500/90 rounded-lg  flex flex-col p-2 w-[30%] h-[40%]"> 
                <img src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg" width="700px"></img>
                
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-black">Click here</button>
               
               
           </div>
            </div>
         </div>


         <Footer/>
        </div>
    )
}
export default Home;