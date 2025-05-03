import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/nabBar'
import Home from './components/home'
import AppointmentBookingSlot from './components/appointmentBookingSlot'
import DoctorProfileComponent from './components/doctorProfileComponent'
import ListOfDoctors from './components/listOfDoctors'
import AboutUs from './components/aboutUs'
import ContactUs from './components/contactUs'
import CreateAccount from './components/createAccount'
import MyProfile from './components/MyProfile'
import MyAppointments from './components/MyAppointments'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <> <div>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:speciality" element={<ListOfDoctors />} />
        <Route path="/doctors" element={<ListOfDoctors />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        
        <Route path="/login" element={<CreateAccount/>}/>
        <Route path="/listOfDoctors" element={<ListOfDoctors/>}/>
        <Route path="/appointment/:docId" element={<AppointmentBookingSlot/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/my-appointments" element={<MyAppointments/>}/>
        

      </Routes>
      </div>
     
     
    </>
  )
}

export default App
