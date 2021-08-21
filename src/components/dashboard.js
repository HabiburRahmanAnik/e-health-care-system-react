import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import { Link,useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
	let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        
        username : ""
    });
    const { name, username } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loadUser();
    }, []);
    
    const loadUser = async (e) => {
        let result = await fetch(`http://127.0.0.1:8000/api/reception/dashboard/2`, {
            method: 'GET'
        });
        result = await result.json();
        
        setUser(result);
	}
    return (
        <div>

<Form method="" >
					<table border="1" width="100%" >
                        <thead>
                        <tr height="80px">
							
                            <td colspan="2" style={{backgroundColor: "rgb(67, 65, 33)"}}>
                                <div >
                                    <b style={{color: "rgb(67, 5, 133)"}} align="center"></b> 
                                    <span style={{float: "right"}}> Logged in as <a style={{color: "green"}} href="/reception/dashboard">{user.username}</a> | <a href="/reception/logout" style={{color: "blue"}}>Logout</a> </span>
                                </div>
                               
                           </td>

                       </tr>
                        </thead>
                        <tbody>

						
						<tr height="600px">
							<td >
								 
								
								<h2>
									<ul>
									<li><Link to="dashboard" style={{color: "rgb(1, 18, 92)"}}>Dashboard</Link><br/></li>
									<li><Link to="editprofile" style={{color: "rgb(1, 18, 92)"}} >Edit Profile</Link><br/></li>
									<li><Link to="ViewDoctorSche" style={{color: "rgb(1, 18, 92)"}}>View Doctor Schedule</Link><br/></li>
									<li><Link to="ChangePass" style={{color: "rgb(1, 18, 92)"}}>Change Password</Link><br/></li>
									<li><Link to="PatientBill" style={{color: "rgb(1, 18, 92)"}}>Patients Bill</Link><br/></li>
									<li><Link to="Room" style={{color: "rgb(1, 18, 92)"}}>Rooms</Link><br/></li>
									<li><Link to="Search" style={{color: "rgb(1, 18, 92)"}}>Search</Link><br/></li>
									<li><Link to="Emergency" style={{color: "rgb(1, 18, 92)"}}>Emergency</Link><br/></li>						
									<li><Link to="PatientDiscount" style={{color: "rgb(1, 18, 92)"}}>Patient Discount</Link><br/></li>	
									<li><Link to="/reception/upp" style={{color: "rgb(1, 18, 92)"}}>Profile Picture</Link><br/></li>	
									<li><Link to="/reception/chatbox" style={{color: "rgb(1, 18, 92)"}}>Chat Box</Link><br/></li>							
									<li><Link to="/reception/withdraw" style={{color: "rgb(1, 18, 92)"}}>Salary Withdaw</Link><br/></li>
									<li><Link to="Transactions" style={{color: "rgb(1, 18, 92)"}}>Transactions</Link><br/></li>
									<li><Link to="PatientInfo" style={{color: "rgb(1, 18, 92)"}}>Patients Information</Link><br/></li>
									<li><Link to="review" style={{color: "rgb(1, 18, 92)"}}>View Review</Link><br/></li>
									<li><Link to="/reception/logout" style={{color: "rgb(1, 18, 92)"}}>Logout</Link></li>
									</ul>
								</h2>

							</td>
							<td>
								<img src="{{asset('upload/'.session('image'))}}" align="center" style={{width: "120px", height: "120px"}}/><br/>
								<h1  style={{color: "rgb(245, 210, 15)"}}><b>Welcome {user.name}</b></h1>
							</td>
							
						</tr>
						<tr height="20px">
							<td colspan="2">
								<p align="center">Copyright © 2021</p> 
							</td>
						</tr>

                        </tbody>
					</table>
				
	</Form>


        </div>


    );
};

export default Dashboard;