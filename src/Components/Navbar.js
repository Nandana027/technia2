import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";


const Navbar=(props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <div className="flex justify-evenly text-2xl shadow-lg shadow-black-500/40 p-[2%]  w-[100%]">
        <Link to="/">
        <img src=" "></img>
        </Link>

        <nav>
            <ul className="flex gap-5 text-black  font-bold  ">
                <li>
                   <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                <NavLink to="/">Contact us</NavLink>
                </li>
                <li>
                <NavLink to="/">Blogs</NavLink>
                </li>
                <li>
                <NavLink to="/">Products</NavLink>
                </li>
                <li>
                <NavLink to="/">Courses</NavLink>
                </li>
                {/* <li>
                <input type="text" placeholder="search  " className="border-solid border-2 text-center font-light  ml-10 w-[100%]  border-black text-black rounded-xl  "></input>
                </li> */}
            {/* <input type="text" placeholder="search" className=" border-blue rounded ml-[24%] text-center width-[10%]  "/> */}
            </ul>

        </nav>
        <div className="flex ml-5 mr-3 gap-5  ">
            { !isLoggedIn &&
                <Link to="/login">
                    <button className="text-yellow-500 font-medium ">
                        LogIn
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                   <button className="text-yellow-500 font-medium  ">
                        SignUp
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="login">
                    <button>
                        Log Out
                    </button>
                </Link>
            }
            {  isLoggedIn &&
                <Link to="/dashboard">
                    <button  onClick={()=>{
                        setIsLoggedIn(false);
                        
                    }}>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
        </div>
    )
}
export default Navbar; 