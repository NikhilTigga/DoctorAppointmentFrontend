import React, { useEffect, useState } from "react";
import './appointmentBooking.css';
import Footer from "./footer";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "./RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";

function AppointmentBookingSlot() {
    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const navigate = useNavigate()
    const [docInfo, setDocInfo] = useState(null);

    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)


    }

    const getAvailableSlots = async () => {
        setDocSlots([])
        // getting current date

        let today = new Date()

        for (let i = 0; i < 7; i++) {
            //getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)
            // settings end time of the dates with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            //setting hours

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            let timeSlots = []
            while (currentDate < endTime) {

                let formattedTime = currentDate.toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })
                let date = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = `${date}_${month}_${year}`;

                const slotTime = formattedTime

                const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true
                if (isSlotAvailable) {
                    // add slot to array

                    timeSlots.push({
                        dateTime: new Date(currentDate),
                        time: formattedTime
                    })

                }

                /// imcrement time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }
            setDocSlots(prev => ([...prev, timeSlots]))
        }


    }

    const bookAppointment = async () => {
        if (!token) {
            toast.warn('Login to book appointment')
            return navigate('/login')

        }
        try {
            let dateObj = docSlots[slotIndex][0].dateTime;
            let date = dateObj.getDate();
            let month = dateObj.getMonth() + 1;
            let year = dateObj.getFullYear();

            const slotDate = `${date}_${month}_${year}`;
            const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getDoctorsData()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }

        } catch (error) {

            console.log(error)
            toast.error(error.message)


        }
    }
    useEffect(() => {
        fetchDocInfo()

    }, [doctors, docId])

    useEffect(() => {
        getAvailableSlots()
    }, [docInfo])
    useEffect(() => {
        console.log(docSlots);
    }, [docSlots])
    if (!docInfo) return <div>Loading doctor details...</div>;
    return (
        <>
            <div className="bookAppointmentContainer">
                <div className="doctorDetails">
                    <div className="doctorDetailsLeft">
                        <img src={docInfo.image} alt="doc-image" />
                    </div>
                    <div className="doctorDetailsRightContainer">
                        <div className="doctorDetailsRight">
                            <p className="flex gap-2 items-center" style={{ fontWeight: "500", fontSize: "36px", lineHeight: "100%", margin: "0px" }}>{docInfo.name} <img className="w-5" src={assets.verified_icon} alt="icon" /></p>
                            <p className="doctorDetailsParagraph">{docInfo.degree} {docInfo.speciality}&nbsp; <span style={{ border: "1px solid #4B5563", width: "34px", height: "70px", borderRadius: "43.5px", fontSize: "16px", padding: "2px 8px" }}>{docInfo.experience}</span></p>
                            <p className="doctorDetailsParagraph flex items-center gap-2" style={{ fontSize: "18px", color: "#1F2937", fontWeight: "500" }}>About <img src={assets.info_icon} alt="" /></p>
                            <p className="doctorDetailsParagraph" style={{ fontSize: "18px", lineHeight: "26px", marginTop: "-6px" }}>{docInfo.about}</p>
                            <div className="appointMentFee"></div>

                            <p className="doctorDetailsParagraph" style={{ fontSize: "22px", color: "#262626" }}>Appointment fee: <span style={{ fontSize: "22px", color: "#262626" }}>{currencySymbol}{docInfo.fees}</span></p>

                        </div>
                        <div className="bookingSlot mt-20">
                            <p style={{ fontWeight: "500", fontSize: "25px", lineHeight: "100%" }}>Booking slot</p>
                            <div className="bookingDate">
                                {
                                    docSlots.length && docSlots.map((item, index) => (
                                        <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'} `} key={index}>
                                            <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                                            <p>{item[0] && item[0].dateTime.getDate()}</p>

                                        </div>
                                    ))
                                }


                            </div>
                            <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 scrollbar-hide'>
                                {docSlots.length && docSlots[slotIndex].map((item, index) => (
                                    <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : ' text-gray-400 border border-gray-300'} `} key={index}>
                                        {
                                            item.time.toLowerCase()

                                        }
                                    </p>
                                ))}
                            </div>

                            <div className="bookAppointmentButtonContainer mt-20">
                                <button onClick={bookAppointment} className="bookAppointmentButton" style={{ width: "408px", height: "74px", borderRadius: "43.5px", backgroundColor: "#5F6FFF", fontWeight: "400", fontSize: "20px", lineHeight: "100%" }}>Book an appointment</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relatedDoctors mt-20">
                    <p style={{ fontWeight: "500", fontSize: "40px", lineHeight: "100%" }}> Related Doctors <br /><span style={{ fontWeight: "400", fontSize: "18px", lineHeight: "27px", color: "#4B5563" }} >Simply browse through our extensive list of trusted doctors.</span></p>

                </div>
                <div className="reletedDoctorComponent w-[80%] m-auto mb-20 ">
                    <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
                </div>
                <Footer></Footer>
            </div>


        </>
    )
}
export default AppointmentBookingSlot;