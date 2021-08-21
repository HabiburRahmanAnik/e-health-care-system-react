import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


const DoctorUpdateInformation = () => {

    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        bloodGroup: "",
        phone: "",
        address: "",
    });
    const { name, username, email, bloodGroup, phone, address } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/api/doctor/doctorUpdateInformation/1`, user);
        history.push("./DoctorProfile");
    };

    const loadUser = async (e) => {
        let result = await fetch(`http://127.0.0.1:8000/api/doctor/doctorProfile/1`, {
            method: 'GET'
        });

        result = await result.json();
        // console.log(result);
        setUser(result);
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
                        <h1>Update Information </h1>
                        <br /><br />
                        <Form action="" enctype="multipart/form-data" method="post" onSubmit={onSubmit}>
                            <table class="tbl-50">
                                <tr>
                                    <td>Full Name: </td>
                                    <td> <input type="text" name="name" id="" value={name} onChange={(e)=>onInputChange(e)} /></td>
                                </tr>

                                <tr>
                                    <td>Name: </td>
                                    <td> <input type="text" name="username" id="" value={username} onChange={(e)=>onInputChange(e)}/></td>
                                </tr>

                                <tr>
                                    <td>Email address: </td>
                                    <td> <input type="text" name="email" id="" value={email} onChange={(e)=>onInputChange(e)}/></td>
                                </tr>

                                <tr>
                                    <td>Blood Group: </td>
                                    <td>
                                        <input type="text" name="bloodGroup" value={bloodGroup} onChange={(e)=>onInputChange(e)} class="input-responsive" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Phone Number: </td>
                                    <td> <input type="tel" name="phone" id="" value={phone} onChange={(e)=>onInputChange(e)}/></td>
                                </tr>

                                <tr>
                                    <td>Address: </td>
                                    <td> <input type="text" name="address" id="" value={address} onChange={(e)=>onInputChange(e)}/></td>
                                </tr>

                                <tr>
                                    <td>Profile Picture: </td>
                                    <td> <input type="file" name="image" value="" /></td>
                                </tr>

                                <tr>
                                    <td colspan="2">
                                        <input type="submit" name="submit" value=" Update Profile" class="btn-secondary" />
                                    </td>
                                </tr>

                            </table>

                        </Form>

                    </div>

                </div>



            </div>


        );
    };


    export default DoctorUpdateInformation;