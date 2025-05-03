import React from "react";
import "./contactUS.css";
import Footer from "./footer";
function ContactUs() {

    const officeAddressHeading = {
    fontWeight: "600",
    fontSize: "24px", // No `!important` in inline styles
    lineHeight: "100%",
    color: "#4B5563"
};
    return (
        <>
        <div className="contactUsContainer">
            <div className="contactUsHeading">
                <p>CONTACT US</p>
            </div>
            <div className="flexContainer" style={{marginTop:"64px"}}>
                <div className="flexLeftContainer" >
                    <img src="./src/assets/images/contact_image.png" alt="contact_image" width={"100%"} />
                </div>
                <div className="flexRightContainer">
                    <div className="officeAddressContainer">
                    <p  style={{...officeAddressHeading,marginTop:"20px"}} >OUR OFFICE</p><br />
                    <p>54709 Willms Station <br />Suite 350, Washington, USA</p><br />
                    <p>Tel:(415)555-0132 <br />
                    Email:jdsjad@gmail.com</p>
                    <br />
                    </div>
                    <div className="careersConatoner">
                        <p style={officeAddressHeading}>CAREERS AT PRESCRIPTO</p>
                        <p>Learn moe about terms and job openings.</p>
                        <button className="hover:bg-black hover:text-white transition-all duration-500" style={{fontSize:"16px",lineHeight:"100%",border:"1px solid #1F2937", borderRadius:"0px", width:"171px",height:"62px"}}>Explore Jobs</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

        </>
    )
}
export default ContactUs;