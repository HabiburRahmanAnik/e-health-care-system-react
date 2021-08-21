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
									
									<li><Link to="condoctor" style={{color: "rgb(1, 18, 92)"}}>Contact Doctor</Link><br/></li>
									<li><Link to="conpatient" style={{color: "rgb(1, 18, 92)"}}>Contact Patient</Link><br/></li>
															
									
									*<a href="/reception/logout" style={{color: "rgb(1, 18, 92)"}}>Logout</a>
                                    </ul>
								</h2>

							</td>
							<td>
                            <fieldset style={{width: "300px",height: "250p", textAlign: "center",margin: "auto",backgroundColor: "rgb(14, 181, 95)"}}>
					                <legend><h2><b><i> Doctor ChatBox</i></b></h2></legend>
						                <div>
							                <textarea id="adm" style={{width: "200px",height: "80px"}}>
													
							                </textarea>
						                </div>
						                <div>
							                <input type="text" name="" id="chat" style={{width: "150px",height: "40px"}} value="type here..."/><br/>
							                <input style={{backgroundColor: "yellow"}} type="button" name="" value="Send" onclick="getText()"/>
							                <a href="dashboard.php">Back</a>
						                </div>
				                </fieldset>
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