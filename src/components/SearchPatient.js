import React from 'react';
import { Form } from 'react-bootstrap';
import './doctor-nav.css';
import './doctor-table.css';
import './doctor.css';
import { Link,useHistory, useParams } from 'react-router-dom';

const SearchPatient = () => {
    return (
        <div>

<Form method="" action="">
					<table border="1" width="100%" >
						<tr height="80px">
							
						 	<td colspan="2" style={{backgroundColor: "rgb(67, 65, 33)"}}>
						 		<div>
						 			<b style={{color: "rgb(67, 5, 133)"}} align="center"></b> 
						 			<span style={{float: "right"}}> Logged in as <a style={{color: "black"}} href="dashboard.php"></a> | <a href="Home.html" style={{color: "blue"}}>Logout</a> </span>
						 		</div>
								
							</td>

						</tr>
						<tr height="600px">
							<td >
								 
								
								<h2>
									
								<ul>
								<li><Link to="dashboard" style={{color: "rgb(1, 18, 92)"}}>Dashboard</Link><br/></li>
									<li><Link to="SearchDoctor" style={{color: "rgb(1, 18, 92)"}}>Search Doctor</Link><br/></li>
									<li><Link to="SearchPatient" style={{color: "rgb(1, 18, 92)"}}>Search Patient</Link><br/></li>
									
																	
									
									*<a href="Home.html" style={{color: "rgb(1, 18, 92)"}}>Logout</a>
									</ul>
								</h2>

							</td>
							<td>
								
                             <table align="center">
                                 <tr>
						            <td> Enter Token No : </td>
                                    <td> <input type="text" name="token" value=""/> </td>
                                     <td><input type="submit" name="search" value="Search"/></td>
                                    
				                </tr>

								<tr>
						            <td> Name :</td>
                                    <td> <input type="text" name="name" value=""/> </td>
				                </tr>
                        
					            <tr>
						            <td> Appointment Date :</td>
                                    <td> <input type="text" name="date" value=""/> </td>
				                </tr>

                                

                                 <tr>
						            <td> Disease :</td>
                                    <td> <input type="text" name="dse" value=""/> </td>
				                </tr>
                               

				            </table>
				               
							</td>
							
						</tr>
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

export default SearchPatient;