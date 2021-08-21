import React from 'react';
import { useState } from 'react';
import classes from '../pages/AddUser.module.css';

const EditProfileForm = (props) => {
    const [name,setName]=useState(props.name? props.name : 'null');
    const [username,setUsername]=useState(props.username? props.username:'');
    const [email,setEmail]=useState(props.email ? props.email :"null");
    const [phone,setPhone]=useState(props.phone ? props.phone: "null");
    const [blood,setBlood]=useState(props.blood ? 'prop.blood' :"null");
    const [location,setLocation]=useState(props.address ? props.address : "null");

    const nameHandler = (e)=>{
        setName(e.target.value);
    }
    const usernameHandler = (e)=>{
        setUsername(e.target.value);
    }
    const emailHandler = (e)=>{
        setEmail(e.target.value);
    }
    const phoneHandler = (e)=>{
        setPhone(e.target.value);
    }
    const bloodHandler = (e)=>{
        setBlood(e.target.value);
    }
    const locationHandler = (e)=>{
        setLocation(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault(e);
    }

  return (
    <div className={classes['row-right2']}>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input id={classes.username} type="text" value={name} onChange={nameHandler} /><br/>
        <label htmlFor="username">Username</label>
        <input id={classes.username} type="text" value={username} onChange={usernameHandler}/><br />
        <label htmlFor="email">Email</label>
        <input id={classes.email} type="text" value={email} onChange={emailHandler}/><br />
        <label htmlFor="phone">Phone</label>
        <input id={classes.salary} type="text" value={phone} onChange={phoneHandler}/><br />
        <label htmlFor="blood">Blood Group</label>
        <input id={classes.username} type="text" value={blood} onChange={bloodHandler}/><br />
        <label htmlFor="location">Location</label>
        <input id={classes.salary} type="text" name="name" value={location} onChange={locationHandler}/>
        <button id={classes['add_button']} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
