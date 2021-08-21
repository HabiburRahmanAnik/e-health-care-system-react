import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';

const Emergency = () => {

    // let history = useHistory();
    // const { id } = useParams();
    // const [Service, setService] = useState({
    //     emer: "",
        
        
    //     amb : ""
    // });
    // const { emer, amb } = Service;
    // const onInputChange = (e) => {
    //     setService({ ...Service, [e.target.name]: e.target.value });
    // };
    // useEffect(() => {
    //     loadService();
    // }, []);
    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post(`http://127.0.0.1:8000/api/reception/emergency`, Service);
    //     history.push("./dashboard");
    // };
    // const loadService = async (e) => {
    //     let result = await fetch(`http://127.0.0.1:8000/api/reception/emergency`, {
    //         method: 'GET'
    //     });
    //     result = await result.json();
    //     // console.log();
    //     setService(result);
    // }






    
    
    // const [Emer, setEmer] = useState([]);

    // useEffect(() => {
    //     loadEmer();
    // }, []);
    // const loadEmer = async () => {
    //     const result = await axios.get("http://127.0.0.1:8000/api/reception/emergency");
    //     setEmer(result.data);
    //     // console.log(Emer);
    // }


     const [Emer, setEmer] = useState([])
    const [emergency, setEmergency] = useState("");
    const [ambulance, setAmbulance] = useState("");
    useEffect(() => {
            getEmer();
        }, []);
  
       function getEmer() {
            fetch("http://127.0.0.1:8000/api/reception/emergency").then((result) => {
                result.json().then((resp) => {
                    setEmer(resp)
                    setEmergency(resp[0].emergency)
                    setAmbulance(resp[0].ambulance)
                })
            })
        }

        // const [Service, setService] = useState({



        //     emer: "",
    
        //     amb: ""
    
            
    
        // });

        // const handleInput = (e) => {



        //     e.persist();
    
        //     setService({ ...Service, [e.target.name]: e.target.value });
    
        // }
    
        function update(){
            let item={emergency,ambulance}
            fetch(`http://127.0.0.1:8000/api/reception/emergency`,{
                method: 'Push',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'

                },
                body:JSON.stringify(item)
            }).then((result) => {
                result.json().then((resp) =>{
                    getEmer()
                })
            })
        }
    // const onInputChange = (e) => {
    //     setEmer({ ...Emer, [e.target.name]: e.target.value });
    // };
   
    
//

    // const onSubmit = (e) => {

    //     e.preventDefault();

    //     axios.post("http://127.0.0.1:8000/api/reception/emergency",Service);

    //     history.push("/dashboard");

    // }

    return (
        <div>

            <Form method="post" onSubmit={update}>

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
                                <li><Link to="/reception/chatbox" style={{ color: "rgb(1, 18, 92)" }}>Chat Box</Link><br /></li>
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
                                {/* {Emer.map((Emer, index) => {
                                    return (
                                        <> */}
                                <tr>
                                        <td> Emergency Availability </td>
                                        <td> <input type="text" name="emergency" value={emergency} onChange={(e) => {setEmergency(e.target.value)}} /> </td>
                                    </tr>
                            
                                    <tr>
                                        <td> Ambulance </td>
                                        <td> <input type="text" name="ambulance" value={ambulance} onChange={(e) => {setAmbulance(e.target.value)}}/> </td>
                                    </tr>
                                    {/* </>
                                    )
                                })} */}

                                <input type="submit" style={{ backgroundColor: "green" }} name="update"  value="Update" />
                                {/* <button onClick={update}>Update</button> */}
                                

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

export default Emergency;