import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const ImmediateTreatment = () => {
    let history = useHistory();

    const [DoctorPrescribe, setDoctorPrescribe] = useState({

        name: "",
        age: "",
        disease: "",
        bloodGroup: "",
        prescription: "",
        tests: "",
    });

    const handleInput = (e) => {

        e.persist();
        setDoctorPrescribe({ ...DoctorPrescribe, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/doctor/immediateTreatment/{id}",DoctorPrescribe);
        history.push("./CheckReport")
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
                    <h1>Immediate Treatment</h1>
                    <br />
                    <Link to="CheckReport" class="btn">Check Report</Link>
                    <br />
                    <table>
                        
                        <tr>

                            <td>

                                <Form action="" class="form-container-2" method="post" onSubmit={onSubmit}>
                                    <table>
                                        <tr rowspan="8" align="center"><h2><u> Doctor Prescribe</u></h2> </tr>
                                        <tr>
                                            <th>
                                                Name: <input type="text" name="name" id="" onChange={handleInput} class="" placeholder="" value={DoctorPrescribe.name}/><br /><br />
                                                Disease: <input type="text" name="disease" id="" onChange={handleInput} class="" placeholder="" value={DoctorPrescribe.disease}/>
                                            </th>
                                            <th>
                                                Age: <input type="text" name="age" id="" class="" onChange={handleInput} placeholder="" value={DoctorPrescribe.age}/><br /><br />
                                                Blood Group: <input type="text" name="bloodGroup" id="" onChange={handleInput} class="" placeholder="" value={DoctorPrescribe.bloodGroup}/>
                                            </th>


                                        </tr>

                                        <tr>
                                            <td><textarea placeholder="Suggest prescription.." onChange={handleInput} name="prescription" value={DoctorPrescribe.prescription}></textarea> </td>
                                            <td><textarea placeholder="Suggest tests.." onChange={handleInput} name="tests" value={DoctorPrescribe.tests}></textarea></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <button type="submit" class="btn">Submit</button>

                                            </td>
                                            <td> <button type="reset" class="btn cancel" onclick="">Reset</button></td>
                                        </tr>
                                    </table>
                                </Form>


                            </td>


                        </tr>




                    </table>



                </div>

            </div>



        </div>


    );
};

export default ImmediateTreatment;