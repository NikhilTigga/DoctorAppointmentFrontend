import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopNavbar = styled.div`
margin: auto;
width:80%;
height: 80px;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:2px solid #e0e0e0;

`;
const NavMenu = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 16px;
color:#1F2937;

a{
    margin-left:20px;
    
    
}
`;






const NavBar=()=> {
    const navigate = useNavigate();
    const {token, setToken,userData } = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false)
    const logout =()=>{
        setToken(false)
        localStorage.removeItem('token')
        }
   
    return (
        <>
            <TopNavbar>
                <a> <img src="../src/assets/images/logo-prescripto3.jpg" alt="" width={'40%'} /></a>
                <NavMenu className="hidden sm:block">
                    <NavLink className="hidden sm:block" to='/'>
                        Home
                        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
                    </NavLink>

                    <NavLink className="hidden sm:block" to="/listOfDoctors">
                    All Doctors
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
                    </NavLink>

                    

                    <a className="hidden sm:block">Blog</a>
                    <NavLink className="hidden sm:block" to='/about'>
                        About Us
                        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
                    </NavLink>
                    <NavLink className="hidden sm:block" to='/contact'>
                        Contact Us
                        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden  " />
                    </NavLink>

                </NavMenu>

                <div className="button flex gap-1" style={{ top: "17px", color: "#1F2937" }}>
                    {
                        token && userData ? <div className="flex item-center gap-2 cursor-pointer group relative " style={{ border: "none", width: "auto", height: "auto", padding: "0px" }}>
                            <img className="w-8 rounded-full" src={userData.image} alt="profilePocture" />
                            <img className="w-2.5" src={assets.dropdown_icon} alt="dropdownIcon" />
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                    <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer">My Profiles</p>
                                    <p onClick={()=> navigate('my-appointments')} className="hover:text-black cursor-point">My Appintments</p>
                                    <p onClick={logout}className="hover:text-black cursor-point"> Logout</p>
                                </div>
                            </div>

                        </div> : <button onClick={() => navigate('/login')} style={{ background: "#B3C8C7", height: "54px", width: "195px", borderRadius: "47px", fontFamily: "Outfit", fontWeight: "400", fontSize: "18px", border: "none" }}>Get Started</button>
                    }
                    <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="menu_icon" />
                    {/* mobile menu */}

                    <div className={` ${showMenu ? 'fixed w-full': 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                        <div className="flex w-auto items-center justify-between px-5 py-6">
                           
                            <img className="w-35" src={assets.logo} alt="" />
                            <img className="w-20" onClick={()=>setShowMenu(false)}   src={assets.cross_icon} alt="" />

                        </div>
                        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                            <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                            <NavLink  onClick={()=>setShowMenu(false)} to="/listOfDoctors"><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                            <NavLink  onClick={()=>setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                            <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                        </ul>
                    </div>
                </div>



            </TopNavbar>


        </>
    );
}
export default NavBar;