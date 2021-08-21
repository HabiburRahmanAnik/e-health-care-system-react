import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HospitalAuthority = () => {
    const [HospitalAuthority, setHospitalAuthority] = useState([]);

    useEffect(() => {
        loadAuthority();
    }, []);

    const loadAuthority = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/doctor/hospitalAuthority/{id}");
        setHospitalAuthority(result.data);
        //console.log(result);

    }

    return (
        <div>

            <header class="header-area">
                <div class="title">
                    <Link to="DoctorDashboard"><h1>E-Health Care</h1></Link>
                </div>
                <div class="navigation">
                    <nav class="menu" align="right">
                        <a href="{{route('doctorProfile', ['id' => $user->id])}}">Welcome</a>
                        <a href="{{route('doctor.logout')}}">Logout</a>
                    </nav>
                </div>
            </header>


            <div class="admin-wrapper">

                <div class="left-sidebar">
                    <ul>
                        <li><Link to="DoctorProfile">Profile</Link></li>
                        <li><Link to="ImmediateTreatment">Immediate Treatment</Link></li>
                        <li><Link to="PatientDetails">Patient Details</Link></li>
                        <li><Link to="ApproveAppointment">Approve Apointment</Link></li>
                        <li><Link to="ApointmentHistory">Apointment History</Link></li>
                        <li><Link to="OperationTheatres">Operation Theatres</Link></li>
                        <li><Link to="HospitalAuthority">Hospital Authority</Link></li>
                        <li><Link to="DoctorInformation">Doctor Information</Link></li>
                        <li><Link to="FeedbackReview">Feedback & Review</Link></li>

                    </ul>
                </div>



                <div class="admin-content">
                    <h1>Assign Receptionist </h1>
                    <br /><br />
                    <Form action="" method="post">


                        {HospitalAuthority.map((Authority, index) => {
                            return (
                                <div class="col-4">
                                    <b>Receptionist Name : {Authority.name}</b>  <br />
                                    <b>Duties Time : {Authority.dutiesTime}</b>  <br />
                                    <b>Contact Info : {Authority.phone}</b>  or {Authority.email} <br />

                                </div>
                            )
                        })}






                    </Form>

                </div>

            </div>



        </div>


    );
};

export default HospitalAuthority;