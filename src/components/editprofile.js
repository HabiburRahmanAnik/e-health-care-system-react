import React, { useEffect, useState } from 'react';
import { Link,useHistory, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
// import './doctor-nav.css';
// import './doctor-table.css';
// import './doctor.css';
import axios from 'axios';

const Editprofile = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        
        email: "",
        
        phone: "",
        
        username : ""
    });
    const { name, email, phone, username } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/api/reception/edit/2`, user);
        history.push("./dashboard");
    };
    const loadUser = async (e) => {
        let result = await fetch(`http://127.0.0.1:8000/api/reception/edit/2`, {
            method: 'GET'
        });
        result = await result.json();
        // console.log();
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
               <img src="{{asset('upload/'.session('image'))}}" align="center" style={{width: "120px", height: "120px"}}/><br/>
               
           <table border="1">
               <tr>
                   <td> Name </td>
                   <td> Email </td>
                   <td> Phone No</td>
                   <td colspan="2"> User Name </td>
               </tr>
       
               <tr>
                   <td> <input type="text" name="name" value={name} onChange={(e)=>onInputChange(e)}/></td>
                   <td><input type="text" name="email" value={email} onChange={(e)=>onInputChange(e)} /></td>
                   <td><input type="text" name="phone" value={phone} onChange={(e)=>onInputChange(e)}/></td>
                   <td><input type="text" name="username" value={username} onChange={(e)=>onInputChange(e)}/></td>
                   <td><input type="submit" style={{backgroundColor: "green"}} name="edit"  value="Update"/></td>
                   
               </tr>				
           </table>
           </td>
           </tr>

           <div>
               <p style={{color: "red"}}>
               {/* @foreach($errors->all() as $error)
                 *{{$error}}<br/>
               @endforeach */}
           </p>
          </div>
               

           
       
       <tr height="20px">
           <td colspan="2">
               <p align="center">Copyright © 2021</p> 
           </td>
       </tr>

    </table>



</Form>



        </div>


    );
};

export default Editprofile;