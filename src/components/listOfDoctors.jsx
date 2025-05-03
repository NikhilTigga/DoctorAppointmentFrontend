import React,{useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Footer from './footer';
import './listOfDoctors.css';
import { useNavigate } from 'react-router-dom';

import DoctorProfileComponent from './doctorProfileComponent';
function ListOfDoctors() {
    const {speciality} = useParams();
    const{doctors}=useContext(AppContext)
    const[filterDoc,setFilterDoc]=useState([])
    const [showFilter,setShowFilter]=useState(false)
    const applyFilter=()=>{
        if(speciality ){
            setFilterDoc(doctors.filter(doc => doc.speciality===speciality))
        }else{
            setFilterDoc(doctors)
        }
    }
    useEffect(()=>{
      applyFilter()
    },[doctors,speciality])
    const navigate=useNavigate();

    return (
        
        <div className='listOfDoctorsContainer'  >
            <div className='titleContainer' style={{width:"80%", margin:"0 auto"}}>
                <p style={{fontWeight:"400",fontSize:"20px",lineHeight:"27px"}}>Browse through the doctors specialist.

                </p>
            </div>

            <div className='containerForLeftAndRight flex flex-col sm:flex-row '>
                <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white': ''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filter</button>

                <div className={`leftMenu flex flex-col gap-4 text-sm text-gray-600 ${showFilter? 'flex':'hidden sm:flex'}`} style={{width:"20%", padding:"20px", background:"#F8F8F8"}}>
                    <p onClick={()=>speciality==='General physician'? navigate('/doctors'):navigate('/doctors/General physician')} className={`cursor-pointer ${speciality==="General physician"? "bg-indigo-100 text-black" :""}`} style={{margin:"0"}}>General physician</p>
                    <p onClick={()=>speciality==='Gynecologist'? navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`cursor-pointer ${speciality==="Gynecologist"? "bg-indigo-100 text-black" :""}`}>Gynecologist</p>
                    <p onClick={()=>speciality==='Dermatologist'? navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`cursor-pointer ${speciality==="Dermatologist"? "bg-indigo-100 text-black" :""}`}>Dermatologist</p>
                    <p onClick={()=>speciality==='Pediatricians'? navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`cursor-pointer ${speciality==="Pediatricians"? "bg-indigo-100 text-black" :""}`}>Pediatricians</p>
                    <p onClick={()=>speciality==='Neurologist'? navigate('/doctors'):navigate('/doctors/Neurologist')} className={`cursor-pointer ${speciality==="Neurologist"? "bg-indigo-100 text-black" :""}`}>Neurologist</p>
                    <p onClick={()=>speciality==='Gastroenterologist'? navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`cursor-pointer ${speciality==="Gastroenterologist"? "bg-indigo-100 text-black" :""}`}>Gastroenterologist</p>
                

                </div>
                <div className='rightContainer'>

                    {
                        filterDoc.map((item,index)=>(
                            <div onClick={()=>navigate(`/appointment/${item._id}`)} className="cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                            
                           
                            <DoctorProfileComponent
                    
                            key={index}
                            available={`Available`}
                            image={item.image}
                            specialty={item.speciality}
                            name={item.name}/>
                            </div>
                           

                        ))
                    }
                   


                </div>
               
            </div>
            <Footer></Footer>
        </div>
    )
}
export default ListOfDoctors;