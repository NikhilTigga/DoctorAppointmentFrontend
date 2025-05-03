import React from "react";
import styled from "styled-components";

const DoctorDetails = styled.div`
display:flex;
flex-direction:column;
p{
    margin:6px 15px;
    padding:0;
    font-family:Outfit;
}
`;
function DoctorProfileComponent(props) {
    return (
        <div className="container" style={{ width: "273.88px", height: "390px", border: "1px solid #C9D8FF", borderRadius: "12px ",padding:"5px" }}>
            <div className="DoctorProfileImage" style={{ backgroundColor: "#EAEFFF", display: "flex", justifyContent: "center", alignItems: "flex-end", objectFit: "contain", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}>
                <img src={props.image} alt="" />
            </div>
            <DoctorDetails>
                <div className="flex m-1 items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${props.available ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                    <p className={`font-normal text-[15px] leading-[100%] ${props.available ?'text-green-500': 'text-gray-500'}`}>
                       {props.available ? 'Available' :'Not Available'} 
                    </p>
                </div>
                <p style={{ fontWeight: "500", fontSize: "22px", lineHeight: "100%", color: "#262626" }}>{props.name}</p>
                <p style={{ fontWeight: "400", fontSize: "15px", lineHeight: "100%", color: "#5C5C5C" }}>{props.specialty}</p>
            </DoctorDetails>
        </div>

    );
}
export default DoctorProfileComponent;