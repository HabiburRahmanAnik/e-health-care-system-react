import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmergencyRoom = () => {
    const [ERoom, setERoom] = useState({

        patientName: "",
        roomNo: "",
        status: "",
       
    });

    const handleInput = (e) => {

        e.persist();
        setERoom({ ...ERoom, [e.target.name]: e.target.value });
    }

    const [EmergencyRoom, setEmergencyRoom] = useState([]);

    useEffect(() => {
        loadEmergencyRoom();
    }, []);

    const loadEmergencyRoom = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/doctor/emergencyRoom/{id}");
        setEmergencyRoom(result.data);
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
                    <h1>Emergency Room </h1>
                    <br /><br />

                    <div class="col-4 text-center">
                        <h1>  <Link to="IcuRoom">ICU</Link> </h1> <br />
                        Room
                    </div>

                    <div class="col-4 text-center">
                        <h1><Link to="EmergencyRoom">Emergency </Link></h1> <br />
                        Room
                    </div>
                    <br /><br />
                    <b>____________________________________Emergency Room ____________________________________</b>
                    <table>
                        <tr>
                            <td rowspan="100" align="center">
                                <Form action="">
                                    <table>
                                        <tr>
                                            <th>Room No.</th>
                                            <td> <input type="text" name="roomNo" id="" onChange={handleInput}  /></td>

                                        </tr>
                                        <tr>
                                            <th>Patient Name</th>
                                            <td> <input type="text" name="patientName" id="" onChange={handleInput}  /></td>
                                        </tr>
                                        <tr>
                                            <th>Room Status: </th>
                                            <td>
                                                <input type="radio" id="" name="status" value="available" />Available <br /> <br />
                                                <input type="radio" id="" name="status" value="booked" />Booked
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="submit" name="submit" value="Book" class="btn-secondary" /></td>
                                        </tr>

                                    </table>

                                </Form>
                            </td>
                        </tr>

                        <tr>
                            <th>Room No.</th>
                            <th>Status</th>
                            <th>Patient Name</th>
                        </tr>


                        {EmergencyRoom.map((room, index) => {
                            return (
                                <tr>
                            <td>{room.roonNo}</td>
                            <td>{room.status}</td>
                            <td>{room.patientName}</td>

                        </tr>
                            )
                        })}
                        







                    </table>

                </div>

            </div>



        </div>


    );
};

export default EmergencyRoom;