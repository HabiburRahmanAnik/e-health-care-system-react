import React, { useEffect, useState, Component } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import axios from 'axios';
// import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import { Link, useHistory, useParams } from 'react-router-dom';

const UploadPhoto = () => {

function onChange(e) {
    let files=e.target.files;
    let reader= new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload=(e)=>{
        const url = "http://127.0.0.1:8000/api/reception/upp";
        const formData = {file: e.target.result}
        return postMessage(url, formData)
        .then(response => console.warn("result", response))
    }
}


    return (
        <div>

            <Form method="post" onSubmit={onChange}>

                <table border="1" width="100%" >

                    <tr height="80px">

                        <td colspan="2" style={{ backgroundColor: "rgb(67, 65, 33)" }}>
                            <div>
                                <b style={{ color: "rgb(67, 5, 133)" }} align="center"></b>
                                <span style={{ float: "right" }}> Logged in as <a style={{ color: "green" }} href="dashboard.php"></a> | <a href="Home.html" style={{ color: "blue" }}>Logout</a> </span>
                            </div>

                        </td>

                    </tr>
                    <tr height="600px">

                        <td >


                            <h2><ul>
                                <li><Link to="dashboard" style={{ color: "rgb(1, 18, 92)" }}>Dashboard</Link><br /></li>
                                <li><Link to="editprofile" style={{ color: "rgb(1, 18, 92)" }} >Edit Profile</Link><br /></li>
                                <li><Link to="ViewDoctorSche" style={{ color: "rgb(1, 18, 92)" }}>View Doctor Schedule</Link><br /></li>
                                <li><Link to="ChangePass" style={{ color: "rgb(1, 18, 92)" }}>Change Password</Link><br /></li>
                                <li><Link to="PatientBill" style={{ color: "rgb(1, 18, 92)" }}>Patients Bill</Link><br /></li>
                                <li><Link to="Room" style={{ color: "rgb(1, 18, 92)" }}>Rooms</Link><br /></li>
                                <li><Link to="Search" style={{ color: "rgb(1, 18, 92)" }}>Search</Link><br /></li>
                                <li><Link to="Emergency" style={{ color: "rgb(1, 18, 92)" }}>Emergency</Link><br /></li>
                                <li><Link to="PatientDiscount" style={{ color: "rgb(1, 18, 92)" }}>Patient Discount</Link><br /></li>
                                <li><Link to="/reception/upp" style={{ color: "rgb(1, 18, 92)" }}>Profile Picture</Link><br /></li>
                                <li><Link to="chatbox" style={{ color: "rgb(1, 18, 92)" }}>Chat Box</Link><br /></li>
                                <li><Link to="/reception/withdraw" style={{ color: "rgb(1, 18, 92)" }}>Salary Withdaw</Link><br /></li>
                                <li><Link to="Transactions" style={{ color: "rgb(1, 18, 92)" }}>Transactions</Link><br /></li>
                                <li><Link to="PatientInfo" style={{ color: "rgb(1, 18, 92)" }}>Patients Information</Link><br /></li>
                                <li><Link to="review" style={{ color: "rgb(1, 18, 92)" }}>View Review</Link><br /></li>
                                <li><Link to="/reception/logout" style={{ color: "rgb(1, 18, 92)" }}>Logout</Link></li>
                            </ul>
                            </h2>

                        </td>


                        <td>


                            <table border="1">
                         
                               
                                    <tr>
                                    <td>
                                    {/* render() {
                                         return(  */}
                                             <div>
                                        <fieldset style={{width: "550px",height: "250px", textAlign: "center",margin: "auto",backgroundColor: "rgb(44, 117, 219)"}}>
                                            <legend><b>PROFILE PICTURE</b></legend>

                                            {/* <img src="{{asset('upload/'.session('image'))}}" style={{width: "120px", height: "120px"}} /><br /> */}
                                            <input type="File" style={{textAlign: "center"}} name="img" onChange={(e) => onChange(e)} />
                                            <br />

                                            <input type="submit" name="submit" value="Submit" />

                                        </fieldset>
                                        </div>
                                         {/* )
                                         } */}
                                    </td>

                                </tr>
                                
                             
                           
                            </table>


                        </td>

                    </tr>

                </table>
                <tr height="20px">
                    <td colspan="2">
                        <p align="center">Copyright © 2021</p>
                    </td>
                </tr>



            </Form>



        </div>


    );
};

export default UploadPhoto;