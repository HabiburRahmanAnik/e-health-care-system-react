import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './doctor-nav.css';
import './doctor-table.css';
import './doctor.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import { render } from '@testing-library/react';
import axios from 'axios';

// class Questionnaire extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = { selectedSection: 0 };

//         this.selectSection = this.selectSection.bind(this)


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // const [user, setUser] = useState({
       
        
    //     email: "",
        
       
        
    //     password : ""
    // });


    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.pushState("/dashboard")
        }
    }, [])
    // function logout => {
    //     console.warn(email, password)
    // }
     const logout = async (e) => {
            let item={email,password};
            let result = await fetch("http://127.0.0.1:8000/api/reception/dashboard/2",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }
            });
            result = await result.json();
            localStorage.setItem("user-info",JSON.strongify(result))
            history.pust("/dashboard")
    }

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post(`http://127.0.0.1:8000/api/reception/edit/2`, user);
    //     history.push("./dashboard");
    // };

    return (
        <div>
            <Form method="" onSubmit={logout}>
                <fieldset style={{ backgroundColor: "rgb(100, 128, 92)", border: "1px solid rgb(255, 232, 57)", width: "500px", height: "300px", margin: "auto" }}>
                    <legend>Login</legend>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name="email" onChange={(e) => setEmail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" name="password" onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" name="submit" value="Submit" />
                                {/* <button onClick={logout}>Submit</button> */}
                                <a href="reg.php"> Sign Up</a>
                            </td>
                        </tr>
                    </table>
                </fieldset>
            </Form>
        </div >
    );
    //}





};

export default Login;