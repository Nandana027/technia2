import React from "react";
import Footer from "../Components/Footer";



const Home=()=>{
    return(
        <div className="flex flex-col gap-7" >
         <div className="flex flex-row justify-center items-center gap-x-[20%] mt-[5%] bg-gradient-to-r from-pink-300 p-[10%] ">
            <p className="text-blue-900 font-bold text-6xl">Enhance your learning with Technies Acadmia <br></br><span className="text-violet-900 font-light text-lg text-cente justify-center">learn with technis learn with technia learn with technia learn with technia learn with technia</span></p>
           
           <div className="flex flex-col gap-10">
           <p className="text-pink-500 font-bold text-4xl font-sans">KNOW MORE ABOUT US</p>
           <button className="border-solid border-2 border-indigo-900 rounded-3xl p-3 text-2xl font-semibold bg-blue-800 text-white">Explore</button>
           </div>
            

            
         </div>

         <div className="flex flex-row gap-[20%] mt-[4%] justify-evenly items-center p-10  ">
            <div className="border-solid border-2 shadow-lg shadow-black-500/90 rounded-lg  flex flex-col justify-evenly p-2 "> 
                <img src="https://img.freepik.com/premium-vector/word-blog-blogging-concept-illustration-web-blogger_186380-3328.jpg?w=360" width="700px" ></img>
                <br></br>
                <br></br>
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-pink-700">Click here</button>
            </div>
            <div className="border-solid border-2 shadow-lg shadow-black-500/90 rounded-lg  flex flex-col justify-evenly p-3"> 
                <img src="https://27860354.s21i.faiusr.com/2/ABUIABACGAAg54CQigYo3PLMhgEwoAY4wgM.jpg"width="750px" ></img>
                <br></br>
                <br></br>
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-pink-700">Click here</button>
            </div>
            <div className="border-solid border-2 shadow-lg shadow-black-500/90 rounded-lg  flex flex-col justify-evenly p-2"> 
                <img src="https://dms.iitd.ac.in/wp-content/uploads/2018/07/Courses.png" width="700px"></img>
                <br></br>
                <br></br>
                <br></br>
                <button className="border-solid border-2  text-white rounded p-3  bg-pink-700">Click here</button>
            </div>
         </div>
         <Footer/>
        </div>
    )
}
export default Home;