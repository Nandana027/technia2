import React from "react";
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <div className="bg-black flex flex-row gap-10 justify-around p-7">
            
            <div className="text-white ">
                <h1 className="text-xl font-bold ">Contact Us</h1>
                <ul className="flex flex-col gap-2 text-yellow-500 mt-[5%] text-lg">
                   <li>Phone:</li>
                   <li>Landline:</li>
                   <li>Email:</li>
                  
                </ul>
            </div>
            <div className="text-white ">
                <h1 className="text-xl font-bold ">Social Handles</h1>
                <ul className="flex flex-col gap-2 text-yellow-500 mt-[5%] text-lg">
                   <li>
                   <Link to="/">Instagram</Link>
                   </li>
                   <li>
                   <Link to="/">Facebook</Link>
                   </li>
                   <li>
                   <Link to="/">Twitter</Link>
                   </li>
                   <li>
                   <Link to="/">Linkdin</Link>
                   </li>
                  
                </ul>
            </div>
            <div className="text-white ">
                <h1 className="text-xl font-bold ">Social Handles</h1>
                <ul className="flex flex-col gap-2 text-yellow-500 mt-[5%] text-lg">
                   <li>
                   <Link to="/">LMS</Link>
                   </li>
                   <li>
                   <Link to="/">Smart Mirror</Link>
                   </li>
                   <li>
                   <Link to="/">Software solutions</Link>
                   </li>
                   
                  
                </ul>
            </div>
            <div className="text-white ">
                <h1 className="text-xl font-bold">Newsletter</h1>
                <input placeholder="Enter your email id" className="p-2 mt-[10%] rounded-lg"/>
                <button className="p-2 text-white bg-red-600 ml-3 rounded-lg">Subscribe</button>

            </div>
            </div>
       

    );
}
export default Footer;