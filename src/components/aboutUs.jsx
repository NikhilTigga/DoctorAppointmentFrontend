import React from "react";
import "./aboutUs.css";
import Footer from "./footer";
function AboutUs() {
    return(
        <>
        <div className="aboutUsContainer mt-10">
            <div className="aboutUsheading">
               <p>About Us</p>
            </div>
            <div className="flexContainer">
                <div className="leftContainer">
                    <img src="./src/assets/images/about_image.png" alt="about_image" width={"100%"}/>
                </div>
                <div className="rightContainer">
                    
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, blanditiis assumenda quibusdam reiciendis eveniet laboriosam laudantium laborum corporis totam expedita earum quidem. Error deserunt repellat consectetur soluta quos, saepe perferendis.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis excepturi quis, voluptas error nobis optio exercitationem, distinctio recusandae odio sint at ea sed! Sapiente nobis optio porro ipsa velit minima!
                </p>  </div>
            </div>
            <div className="bottomContainer">
                <div className="bottomHeading mb-10">
                    <p>Why choose us:</p>
                </div>
                <div className="bottomFlexConatiner">
                    <div className="flexc hover:bg-primary transition-all duration-300  hover:text-white  text-gray-600 cursor-pointer"><b className="headingPragraph">EFFICIENCY:</b> <p className="paragraph">Streamlined Appointment Scheduling That Fits Into Your Busy LifeStyle.</p></div>
                    <div className="flexc hover:bg-primary transition-all duration-300  hover:text-white text-gray-600 cursor-pointer"><b className="headingPragraph" >CONVENIENCE:</b><p className="paragraph">Access To A Network Of Trusted Healthcare Professionals In Your Area. </p></div>
                    <div className="flexc hover:bg-primary transition-all duration-300  hover:text-white text-gray-600 cursor-pointer"><b className="headingPragraph">PERSONALIZATION:</b><p className="paragraph">Tailored Recommendations And Reminders To HElp You Stay on Top of Your Health.  </p></div>
                </div>  
            </div>
           
        </div>
        <Footer/>
        </>
    )
}
export default AboutUs;