import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FeedbackReview = () => {
    const [FeedbackReview, setFeedbackReview] = useState([]);

    useEffect(() => {
        loadFeedback();
    }, []);

    const loadFeedback = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/doctor/feedbackReview/{id}");
        setFeedbackReview(result.data);
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
                    <h1>Feedback and review  </h1>
                    <br /><br />
                    <table class='tbl-full'>
                        <tr>
                            <th>Name </th>
                            <th></th>
                            <th>Email </th>
                            <th></th>
                            <th>Review and Feedback </th>
                        </tr>

                        {FeedbackReview.map((Feedback, index) => {
                            return (
                                <tr>
                            <td>{Feedback.name}</td>
                            <td></td>
                            <td>{Feedback.email}</td>
                            <td></td>
                            <td>{Feedback.message}</td>
                        </tr>
                            )
                        })}


                        




                    </table>

                </div>

            </div>



        </div>


    );
};

export default FeedbackReview;