import React from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
                    <h1>Welcome </h1>
                    <br /><br />

                </div>

            </div>



        </div>


    );
};

export default Dashboard;