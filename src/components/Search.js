import React from 'react';
import { Form } from 'react-bootstrap';
import './doctor-nav.css';
import './doctor-table.css';
import './doctor.css';
import { Link,useHistory, useParams } from 'react-router-dom';

const Search = () => {
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
								<h1 style={{textAlign: "center"}}>Search Here</h1>
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

export default Search;