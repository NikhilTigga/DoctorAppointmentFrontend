import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

import { AppContext } from "../context/AppContext";
import { toast } from 'react-toastify';

const MyAppointments = () => {
    const { backendUrl ,token , getDoctorsData} = useContext(AppContext)
    const [appointments, setAppointments] = useState([])

    const getUsersAppointments = async () => {
        try{
           const {data}=await axios.get(backendUrl+"/api/user/appointments",{headers:{token}})
           if(data.success){
            setAppointments(data.appointments.reverse())
            console.log(data.appointments)
           }

        }catch(error){
            console.log(error)
            toast.error(error.message)

        }
    }

    const cancelAppointment = async (appointmentId) => {

        try{

           const {data}=await axios.post(backendUrl+"/api/user/cancel-appointment",{appointmentId},{headers:{token}})
              if(data.success){
                toast.success(data.message)
                getUsersAppointments()
                getDoctorsData()
            }else{
                toast.error(data.message)
            }

        }catch(error){
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(() => {
        if(token){
            getUsersAppointments()
        }

    },[token])
    return (
        <div className='w-[80%] m-auto'>
            <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>
                My appointments
            </p>
            <div>
                {
                    appointments.map((item, index) => (
                        <div className='grid-cols-[1fr_2fr] grp-4 sm : flex sm:gap-6 py-2 border-b ' key={index}>
                            <div>
                                <img className='w-52 bg-indigo-50' src={item.docData.image} alt="bvn" />
                            </div>
                            <div className='flex-1  flex justify-between text-sm text-zinc-600'>
                                <div>
                                    <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
                                    <p>{item.docData.speciality}</p>
                                    <p className='text-zinc-700 font-medium mt-1'>Adderess:</p>
                                    <p className='text-xs'>{item.docData.address.line1}</p>
                                    <p className='text-xs'>{item.docData.address.line2}</p>
                                    <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Datae & Time:</span>{item.slotDate} | {item.slotTime}</p>

                                </div>
                                <div className='flex flex-col gap-2 justify-end'>
                                    {!item.cancelled && !item.isCompleted && <button style={{ border: "1px solid gray" }} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duratyion-300"> Pay Online</button>}
                                   {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointment(item._id)} style={{ border: "1px solid gray" }} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duratyion-300"> Cancle appointment</button>} 
                                   {item.cancelled && !item.isCompleted &&  <button  style={{ border: "1px solid red" }} className='sm:min-w-48 py-2 border-red-500 rounded text-red-500'>Appointment cancelled </button>}
                                   {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 text-green-500'>Completed</button> }
                                </div>
                            </div>



                        </div>

                    ))
                }

            </div>

        </div>
    )
}
export default MyAppointments;