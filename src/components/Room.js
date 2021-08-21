import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import axios from 'axios';
import { Link,useHistory, useParams } from 'react-router-dom';

const Room = () => {

    const [room,setroom] = useState([]);

	useEffect(()=>{
		loadroom();
	},[]);
	const loadroom=async()=>{
		const result=await axios.get("http://127.0.0.1:8000/api/reception/rooms");
		setroom(result.data);
		// console.log(result.data);
	}
   
    return (
        <div>

<Form method="post" >
	
<table border="1" width="100%" >
        
<tr height="80px">
            
            <td colspan="2" style={{backgroundColor: "rgb(67, 65, 33)"}}>
                <div>
                    <b style={{color: "rgb(67, 5, 133)"}} align="center"></b> 
                    <span style={{float: "right"}}> Logged in as <a style={{color: "green"}} href="dashboard.php"></a> | <a href="Home.html" style={{color: "blue"}}>Logout</a> </span>
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
								
							
                            <table border="1" align="center">
					            <tr>
						            <td> Room No </td>
                                    <td> Type </td>
                                    <td> Price/Night</td>
                                    <td> Availability </td>

				                </tr>
                                {room.map((room, index) => {
                            return (
								
					            <tr>
						            <td> <input type="text" name="rno" value={room.roomNo}/> </td>
                                    <td><input type="text" name="rtype" value={room.roomType}/></td>
                                    <td><input type="text" name="rprice" value={room.price}/></td>
                                    <td><input type="text" name="rst" value={room.status}/></td>
                                    
					            </tr>	
								)
                            })}
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

export default Room;