import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const NewApiroment = () => {
    let history = useHistory();

    // const [NewApiroment, setNewApiroment] = useState({

    //     name: "",
    //     date: "",
    //     disease: "",
    //     token: ""
    // });

    // const handleInput = (e) => {

    //     e.persist();
    //     setNewApiroment({ ...NewApiroment, [e.target.name]: e.target.value });
    // }
    const { id: cid } = useParams();
    const [date, setDate] = useState("");
    const [msg, setMsg] = useState('');
    const [patient_name, setpatient_name] = useState("");
    //const [date, setCName] = useState("");
    const [disease, setdisease] = useState("");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/doctor/patientDateApprove/${cid}`)
            .then(response => {
                setpatient_name(response.data.patient_name);
                setdisease(response.data.disease);
                console.log(response.data)

            });

    }, [])

    const handleDescriptionChange = (e) => {
        setDate(e.target.value)
    }

    const handleUpdate = () => {

        const data = {
            date: date,


        }
        axios.post(`http://127.0.0.1:8000/api/doctor/UpdatePatientDate/${cid}`, data)
            .then(response => {
                //setMsg("updated ")
                alert('updated')

            }).catch((err) => {
                setMsg("error")
            })

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
                    <h1>Set Date</h1>
                    <br /><br />
                    <Form>
                        <table class="tbl-50">
                            <tr>
                                <td>Patient Name: </td>
                                <td>
                                    {patient_name}
                                </td>
                            </tr>


                            <tr>
                                <td>Disease: </td>
                                <td>
                                    {disease}
                                </td>
                            </tr>

                            <tr>
                                <td>Apiroment Date: </td>
                                <td> <input type="date" name="date" id="" onChange={handleDescriptionChange} /></td>
                            </tr>


                            <tr>
                                <td colspan="2">
                                    <input type="hidden" name="id" value=" " />
                                    <button type="button" onClick={handleUpdate} className="btn btn-outline-secondary">Update</button>
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