import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const NewApiroment = () => {
    let history = useHistory();

    const [NewApiroment, setNewApiroment] = useState({

        name: "",
        date: "",
        disease: "",
        token: ""
    });

    const handleInput = (e) => {

        e.persist();
        setNewApiroment({ ...NewApiroment, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/doctor/newApiroment/{id}",NewApiroment);
        history.push("./ApointmentHistory")
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
                    <h1>Add New Apointment </h1>
                    <br /><br />
                    <Form action="" enctype="multipart/form-data" method="post" onSubmit={onSubmit}>
                        <table class="tbl-50">
                            <tr>
                                <td>Patient Name: </td>
                                <td> <input type="text" name="name" id="" onChange={handleInput} value={NewApiroment.name} /></td>
                            </tr>

                            <tr>
                                <td>Apiroment Date: </td>
                                <td> <input type="date" name="date" id="" onChange={handleInput} value={NewApiroment.date} /></td>
                            </tr>

                            <tr>
                                <td>Disease: </td>
                                <td>
                                    <input type="text" name="disease"  onChange={handleInput} value={NewApiroment.disease}  class="input-responsive" />
                                </td>
                            </tr>

                            <tr>
                                <td>Token no: </td>
                                <td> <input type="tel" name="token" id="" onChange={handleInput} value={NewApiroment.token} /></td>
                            </tr>


                            <tr>
                                <td colspan="2">
                                    <input type="hidden" name="id" value=" " />
                                    <input type="submit" name="submit" value=" Add Apointment" class="btn-secondary" />
                                </td>
                            </tr>

                        </table>



                    </Form>

                </div>

            </div>



        </div>


    );
};

export default NewApiroment;