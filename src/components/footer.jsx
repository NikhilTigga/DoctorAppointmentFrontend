import react from 'react';
import styled from "styled-components";
import './home.css';

function Footer() {

    const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #BDBDBD;
  
    @media (max-width: 768px) {
      width: 39%;
      justify-content: end;
    }
  `;
    return (
        <div>
        <Wrapper>
        <div className="footerContainer">
            <p> <a> <img src="../src/assets/images/logo-prescripto2.jpg" width={'40%'} alt="" /></a></p>
            <p style={{ fontWeight: "400", fontSize: "18px", lineHeight: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi, dolorum voluptate iste ipsum, velit ea sint sit, praesentium modi illum harum nihil rem labore quibusdam aperiam cupiditate explicabo eaque! <br /> <br /> <br /></p>
        </div>
        <div className="footerContainer">
            <p style={{ fontWeight: "600", fontSize: "22px", lineHeight: "30px" }}>Company</p>
            <p><a href="home">Home</a></p>
            <p><a href="About">About us</a></p>
            <p><a href="Contact">Contact us</a></p>
            <p> <a href="privacyPolicy">Privacy Policy</a></p>

        </div>
        <div className="footerContainer">
            <p style={{ fontWeight: "600", fontSize: "22px", lineHeight: "30px" }}> GET IN TOUCH</p>
            <p><a href="tel:+18475555555">1-847-555-5555</a></p>
            <p><a href="mailto:example@somewhere.com">Send email to example@somewhere.com</a></p>

        </div>
       
        
    </Wrapper>
    <div className="copyRight" style={{ width: "80%", margin: "0 auto", textAlign: "center", fontFamily: "outfit", fontWeight: "400", fontSize: "18px", lineHeight: "30px", color: "#4B5563" }}>
    <p>{new Date().getFullYear()}©Prescripto. All Right Reserved</p>
</div></div>
    )
}
export default Footer;