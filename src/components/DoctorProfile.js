import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
//import './doctor-nav.css';
//import './doctor-table.css';
//import './doctor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DoctorProfile = () => {
    const [DoctorProfile, setDoctorProfile] = useState([]);

    useEffect(() => {
        loadProfile();
    }, []);
    
    const loadProfile = async() => {
        const result = await axios.get("http://127.0.0.1:8000/api/doctor/doctorProfile/1");
        setDoctorProfile(result.data);
        //console.log(result.data);
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
                    <h1>INFORMATION</h1>
                    <br /><br />
                    <Form>
                        <table class="tbl-80">

                        <tr>
                                    <td>Name </td>
                                    <td>: {DoctorProfile.name} </td>
                                    <td>
                                        <img src={DoctorProfile.image} alt="" />
                                    </td>
                                </tr>
    
                                <tr>
                                    <td>ID  </td>
                                    <td>: {DoctorProfile.id}</td>
                                </tr>
    
                                <tr>
                                    <td>User Name </td>
                                    <td>: {DoctorProfile.username}</td>
                                </tr>
    
                                <tr>
                                    <td>Email </td>
                                    <td>: {DoctorProfile.email}</td>
                                </tr>
    
                                <tr>
                                    <td>Blood Group </td>
                                    <td>: {DoctorProfile.bloodGroup}</td>
                                </tr>
    
                                <tr>
                                    <td>Phone </td>
                                    <td>: {DoctorProfile.phone}</td>
                                </tr>
                                <tr>
                                    <td>Address </td>
                                    <td>: {DoctorProfile.address}</td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="DoctorChangePass" class="btn-secondary">Change Password </Link> <br/>
                                        <Link to="DoctorUpdateInformation" class="btn-secondary">Update Information </Link><br/>
                                      
                                    </td>
    
                                                     
    
                                </tr>
                           

                        </table>
                    </Form>
                </div>

            </div>



        </div>


    );
};

export default DoctorProfile;