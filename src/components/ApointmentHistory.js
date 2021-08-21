import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ApointmentHistory = () => {
    const [ApointmentHistory, setApointmentHistory] = useState([]);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/doctor/apointmentHistory/{id}");
        setApointmentHistory(result.data);

    }

    return (
        <div>

            <header class="header-area">
                <div class="title">
                    <Link to="DoctorDashboard"><h1>E-Health Care</h1></Link>                </div>
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
                    <h1>Apoirment History </h1>
                    <br /><br />
                    
                    <br />
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Patient Name</th>
                            <th>Apointment Date</th>
                            <th>Disease</th>
                            
                           
                        </tr>

                        {ApointmentHistory.map((Patient, index) => {
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{Patient.patient_name}</td>
                                    <td>{Patient.date}</td>
                                    <td>{Patient.disease}</td>
                                    

                                    
                                    

                                </tr>
                            )
                        })}





                    </table>

                </div>

            </div>



        </div>


    );
};

export default ApointmentHistory;