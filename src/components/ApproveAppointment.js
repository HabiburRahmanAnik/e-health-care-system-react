import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ApproveAppointment = () => {
    const [ApproveAppointment, setApproveAppointment] = useState([]);

    useEffect(() => {
        loadApprove();
    }, []);

    const loadApprove = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/doctor/approveAppointment/1");
        setApproveAppointment(result.data);

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
                    <h1>Approve Appointment </h1>
                    <br />
                    <Link to="NewApiroment" class="btn-secondary">New Apiroment</Link>
                    <br /><br /><br /><br />


                    <Form method="post">

                        {ApproveAppointment.map((Patient, index) => {
                            return (
                                <div class="col-4">
                                    <b>Patient Name : {Patient.patient_name}</b> <br />
                                    <b>Set Time : {Patient.date} </b> <br /><br />
                                    <Link to={`UpdatePatientDate/${Patient.id}`} class="btn-secondary">Update Date</Link>
                                    {/* <Link to="UpdatePatientDate" class="btn-secondary">Update Date</Link> */}
                                    {/* <Link to="" class="btn-denger">Reject</Link> */}
                                </div>
                            )
                        })}








                    </Form>

                </div>

            </div>



        </div>


    );
};

export default ApproveAppointment;