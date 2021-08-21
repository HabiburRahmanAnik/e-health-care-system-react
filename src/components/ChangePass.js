import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import './doctor-nav.css';
import './doctor-table.css';
import './doctor.css';

import { Link,useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

const ChangePass = () => {
	let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        
        
        cpass: "",
        
        username : ""
    });
    const { password, username } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/api/reception/upass/2`, user);
        history.push("./dashboard");
    };
    const loadUser = async (e) => {
        let result = await fetch(`http://127.0.0.1:8000/api/reception/chngpass/2`, {
            method: 'GET'
        });
        result = await result.json();
        // console.log(result);
        setUser(result);
    }
    return (
        <div>

<Form method="post" onSubmit={onSubmit}>
	
<table border="1" width="100%" >
        
<tr height="80px">
            
            <td colspan="2" style={{backgroundColor: "rgb(67, 65, 33)"}}>
                <div>
                    <b style={{color: "rgb(67, 5, 133)"}} align="center"></b> 
                    <span style={{float: "right"}}> Logged in as <a style={{color: "green"}} href="dashboard.php">{username}</a> | <a href="Home.html" style={{color: "blue"}}>Logout</a> </span>
                </div>
               
           </td>

       </tr>
       <tr height="600px">
      
           <td >
                
               
           <h2><ul>
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
			    <fieldset style={{width: "550px", height: "250px", margin: "auto",backgroundColor: "rgb(44, 117, 219)"}}>
				                    <legend><b>CHANGE PASSWORD</b></legend>
					                    <table>
						                    <tr>							
						 	                    <td>
								                    Current Password :
							                    </td>
							                    <td> <input type="text" name="cpass" value={password} onChange={(e)=>onInputChange(e)}/><br/>
								                    <span style={{float: "right",color: "red"}}   id="cscp"></span>
							                    </td>	
						                    </tr>
						                    <tr>
							                    <td>
								                    <h5 style={{color: "green"}}>New Password :</h5>							 
							                    </td>
							                    <td>
								                    <input type="password" name="npass" id="npass" onChange={(e)=>onInputChange(e)}/><br/>
								                    <span style={{color: "red"}}   id="csnp"></span>
							                    </td>
						                    </tr>
						                    <tr>
							                    <td>
								                    <h5 style={{color: "red"}}>Retype New Password :</h5>							 
							                    </td>
							                    <td>
								                    <input type="Password" name="rnpass" id="rnpass" onChange={(e)=>onInputChange(e)}/><br/>
								                    <span style={{color: "red"}}   id="csrn"></span>
							                    </td>
						                    </tr>						
					                    </table>
					
					                    <input style={{backgroundColor: "green"}} type="submit" name="submit" value="Submit"/>
										<div>
											<p style={{color: "red"}}>
											{/* @foreach($errors->all() as $error)
											  *{{$error}}<br/>
											@endforeach */}
										</p>
											</div>
						
			                    </fieldset>
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

export default ChangePass;