import React, { useContext } from "react";
import styled from "styled-components";
import './home.css';
import Footer from "./footer";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import DoctorProfileComponent from './doctorProfileComponent'
import { useNavigate } from "react-router-dom";


const SpecialistContainer = styled.div`
width:80%;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:80px
`







function Home() {
    const navigate=useNavigate();
    const{doctors}=useContext(AppContext)
    return (
        <>
            <div className="homeContainer">
                <div style={{display:"flex"}} className={`mx-auto mt-[5vh] h-full sm:w-[80%] sm:h-[500px] bg-[#5F6FFF] rounded-lg justify-between flex flex-col sm:flex-row  `}>
                    <div className="bookAppointment">
                        <div className="heading">
                            <p>Book Appointment With Trusted Doctors</p>

                        </div>
                        <div className="items-start belowHeading  " >
                            <div className="roundImages flex ">
                                <img src="../src/assets/images/Ellipse 581 (1).png" alt="img1" />
                                <img src="../src/assets/images/Ellipse 582.png" alt="img2" style={{ marginLeft: "-10px" }} />
                                <img src="../src/assets/images/image 87.png" alt="img3" style={{ marginLeft: "-10px" }} />
                            </div>
                            <div className="content-left-roundImages">
                                <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                            </div>

                        </div>
                        <div className="button">
                            <button className="hover:scale-105">Book appointment</button>
                        </div>


                    </div>
                    <div className="rightContent">
                        <img src="../src/assets/images/doc-header-img.png" alt="DoctorImage" />
                    </div>


                </div>

                <SpecialistContainer>
                    <div className="specialistHeading mt-10">
                        <p id="findHeading">Find by Speciality</p>
                        <p id="belowFindHeading">Simple browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                    </div>
                    <div className="specialistList mt-20">
                        <Link to={`/doctors/${`Gynecologist`}`} className="specilaist1 hover:translate-y-[-10px] transition-all duration-500">
                            <img src="../src/assets/images/General_physician.svg" alt="General physician" />
                            <p>General physician</p>
                        </Link>
                        <Link to={`/doctors/${`Gynecologist`}`} className="specilaist2 hover:translate-y-[-10px] transition-all duration-500">
                            <img src="../src/assets/images/Gynecologist.svg" alt="Gynecologist" />
                            <p>Gynecologist</p>

                        </Link>
                        <Link to={`/doctors/${`Dermatologist`}`} className="specilaist2 hover:translate-y-[-10px] transition-all duration-500">
                            <img src="../src/assets/images/Dermatologist.svg" alt="Dermatologist" />
                            <p>Dermatologist</p>
                        </Link>
                        <Link to={`/doctors/${`Perdiatricians`}`} className="specilaist2 hover:translate-y-[-10px] transition-all duration-500">
                            <img src="../src/assets/images/Pediatricians.svg" alt="Pediatricians" />
                            <p>Pediatricians</p>
                        </Link>
                        <Link to={`/doctors/${`Neurologist`}`} className="specilaist2 hover:translate-y-[-10px] transition-all duration-500">
                            <img src="../src/assets/images/Neurologist.svg" alt="Neurologist" />
                            <p>Neurologist</p>
                        </Link>
                        <Link to={`/doctors/${`Gastroenterologist`}`} className="specilaist2 hover:translate-y-[-10px] transition-all duration-500">
                            <img src="../src/assets/images/Gastroenterologist.svg" alt="Gastroenterologist" />
                            <p>Gastroenterologist</p>
                        </Link>
                    </div>
                </SpecialistContainer>
                <SpecialistContainer >
                    <div className="specialistHeading mt-20">
                        <p id="findHeading">Top Doctors to Book</p>
                        <p id="belowFindHeading">Simply browse through our extensive list of trusted doctors.</p>
                    </div>
                    <div className="doctorsList mt-8 grid grid-cols-auto w-4/5 gap-20 pt-4 pb-4 mb-10">
                        
                        {doctors.slice(0,10).map((item,index)=>(
                            <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}  className="cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                            <DoctorProfileComponent
                            key={index}
                            available={item.available}
                            image={item.image}
                            specialty={item.speciality}
                            name={item.name}
                            />
                            </div>
                            

                            

                        ))}
                    </div>
                    <div className="button mb-20">
                        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} style={{ background: "#EAEFFF" }}>more</button>
                    </div>
                    <div className="belowPoster ">
                        <div className="leftContent">
                            <p style={{ padding: "0", margin: "0" }}>Book Appointment with 100+ Trusted Doctors</p>
                            <div className="button">
                                <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 my-6 hover:scale-105 transition-all">Create account</button>
                            </div>

                        </div>

                        <div className="rightContentBelow">
                            <img src="../src/assets/images/appointment-doc-img.png" alt="appointment-doc-img" width={"100%"} />
                        </div>
                    </div>

                </SpecialistContainer>

                
                
                <Footer></Footer>

            </div>

        </>
    );
}
export default Home;
