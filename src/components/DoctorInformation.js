import React from 'react';
import { Form } from 'react-bootstrap';
import './doctor-nav.css';
import './doctor-table.css';
import './doctor.css';

const Dashboard = () => {
    return (
        <div>

            <header class="header-area">
                <div class="title">
                    <a href="{{route('dashBoard', ['id' => $user->id])}}"><h1>E-Health Care</h1></a>
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
                        <li><a href="{{route('doctorProfile', ['id' => $user->id])}}">Profile</a></li>
                        <li><a href="{{route('immediateTreatment', ['id' => $user->id])}}">Immediate Treatment</a></li>
                        <li><a href="{{route('patientDetails', ['id' => $user->id])}}">Patient Details</a></li>
                        <li><a href="{{route('approveAppointment', ['id' => $user->id])}}">Approve Apointment</a></li>
                        <li><a href="{{route('apointmentHistory', ['id' => $user->id])}}">Apointment History</a></li>
                        <li><a href="{{route('operationTheatres', ['id' => $user->id])}}">Operation Theatres</a></li>
                        <li><a href="{{route('hospitalAuthority', ['id' => $user->id])}}">Hospital Authority</a></li>
                        <li><a href="{{route('help', ['id' => $user->id])}}">Doctor Information</a></li>
                        <li><a href="{{route('feedbackReview', ['id' => $user->id])}}">Feedback & Review</a></li>

                    </ul>
                </div>



                <div class="admin-content">
                    <h1>Welcome </h1>
                    <br/><br/>

                    <div class="col-4">
                <b>Doctor Name : </b>  <br/>
                <b>Email Address : </b> <br/>
                <b>Speciality : </b> <br/>
                <b>Time  : </b>  <br/>
                <b>Fee : </b>   <br/>
                
              </div>
                    
                </div>

            </div>



        </div>


    );
};

export default Dashboard;