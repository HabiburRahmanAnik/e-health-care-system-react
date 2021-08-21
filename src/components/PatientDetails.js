import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link, useHistory } from 'react-router-dom'

const PatientDetails = () => {
    const [PatientDetails, setPatientDetails] = useState([]);

    useEffect(() => {
        loadPatient();
    }, []);

    const loadPatient = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/doctor/patientDetails/1");
        setPatientDetails(result.data);

        //console.log(PatientDetails);
        //console.log(result.data);

        // const result = await fetch("http://127.0.0.1:8000/doctor/patientDetails/1",{

        //     method:'GET'
        // });
        // result = await result.json();

        // console.log(result);
    }

    const [patientSearch, setPatientSearch] = useState('');
    const [list, setList] = useState([]);



    async function search(patientSearch) {
        if (patientSearch.length >= 1) {
            await axios.get("http://127.0.0.1:8000/api/SearchCourse/" + patientSearch)
                .then(response => {
                    const result = response.data;
                    setList(result);

                });
        }
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
                    <h1>Patient Details </h1>


                    <div>
                        <div>
                            <input type='text' name='search' className='form-control' placeholder='Search by id or name' onChange={(e) => { search(e.target.value) }}></input>
                        </div>
                    </div>

                    {
                        list.length > 0 ?
                            <table table className="table table-bordered table-striped" cellPadding="15px">
                                <thead>
                                    <tr>
                                        <td>ID no. </td>
                                        <td>Name </td>
                                        <td>Blood Group </td>
                                        <td> Phone </td>
                                        <td> Email </td>
                                        <td> Address </td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map((row) =>
                                            <tr key={row.id}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.bloodGroup}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.email}</td>
                                                <td>{row.address}</td>



                                            </tr>
                                        )
                                    }
                                </tbody>

                            </table>

                            : <>
                                <table>
                                    <tr>
                                        <th>ID no.</th>
                                        <th>Name </th>
                                        <th>Blood Group </th>
                                        <th>Phone </th>
                                        <th>Email </th>
                                        <th>Address </th>


                                    </tr>


                                    {PatientDetails.map((Patient, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{Patient.name}</td>
                                                <td>{Patient.bloodGroup}</td>
                                                <td>{Patient.phone}</td>
                                                <td>{Patient.email}</td>
                                                <td>{Patient.address}</td>


                                            </tr>
                                        )
                                    })}

                                </table>


                            </>

                    }

                    {/* <table>
                        <tr>
                            <th>ID no.</th>
                            <th>Name </th>
                            <th>Blood Group </th>
                            <th>Phone </th>
                            <th>Email </th>
                            <th>Address </th>
                            

                        </tr>


                        {PatientDetails.map((Patient, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{Patient.name}</td>
                                    <td>{Patient.bloodGroup}</td>
                                    <td>{Patient.phone}</td>
                                    <td>{Patient.email}</td>
                                    <td>{Patient.address}</td>
                                    

                                </tr>
                            )
                        })}






                    </table> */}

                </div>

            </div>



        </div>


    );
};

export default PatientDetails;