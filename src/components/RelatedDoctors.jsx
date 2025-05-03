import React, { useContext, useEffect,useState } from "react";
import DoctorProfileComponent from "./doctorProfileComponent";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const RelatedDoctors=({speciality,docId})=>{
    const{doctors}=useContext(AppContext)
    const navigate=useNavigate();

    const [relDoc,setRelDocs]=useState([])
    useEffect(()=>{
        if(doctors.length>0 && speciality){
            const doctorsData=doctors.filter((doc)=>doc.speciality===speciality && doc._id!==docId)
            setRelDocs(doctorsData)
        }

    },[doctors,speciality,docId])
    return(
        <div>
            <div className="doctorsList mt-8 grid grid-cols-auto w-4/5 gap-20 pt-4 pb-4 mb-10">
                        
                        {relDoc.slice(0,5).map((item,index)=>(
                            <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                            <DoctorProfileComponent
                            key={index}
                            available={`Available`}
                            image={item.image}
                            specialty={item.speciality}
                            name={item.name}
                            />
                            </div>
                            

                            

                        ))}
                    </div>

        </div>
    )
}
export default RelatedDoctors;