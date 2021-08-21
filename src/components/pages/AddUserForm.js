import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/user-context';
import classes from './AddUser.module.css';

const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState(
    props.status === 'edit' ? props.username : ''
  );
  const [enteredEmail, setEnteredEmail] = useState(
    props.status === 'edit' ? props.email : ''
  );
  const [enteredPhone, setEnteredPhone] = useState(
    props.status === 'edit' ? props.phone : ''
  );
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredActive, setEnteredActive] = useState(
    props.status === 'edit' ? props.active : 1
  );
  const [enteredType, setEnteredType] = useState('admin');
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [phoneIsValid,setPhoneIsValid] =useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const utx = useContext(UserContext);

  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value);

    if (e.target.value.trim() !== '') {
      setUsernameIsValid(true);
    }
  };
  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);

    if (e.target.value.trim() !== '') {
      setEmailIsValid(true);
    }
  };
  const phoneHandler = (e) => {
    setEnteredPhone(e.target.value);

    if (e.target.value.trim() !== '') {
      setPhoneIsValid(true);
    }
  };
  const PasswordHandler = (e) => {
    setEnteredPassword(e.target.value);

    if (e.target.value.trim() !== '') {
      setPasswordIsValid(true);
    }
  };
  const activeHandler = (e) => {
    setEnteredActive(e.target.value);
  };
  const typeHandler = (e) => {
    setEnteredType(e.target.value);
  };

  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0) {
      setUsernameIsValid(false);
    }

    if (enteredEmail.trim().length === 0) {
      setEmailIsValid(false);
      
    }
    if(enteredPassword.trim().length === 0){
      setPasswordIsValid(false);
    }

    if(enteredPhone.trim().length === 0){
      setPhoneIsValid(false);
      return
    }

    if (
      enteredUsername.trim().length > 0 &&
      enteredEmail.trim().length > 0 &&
      enteredPhone.trim().length > 0 &&
      enteredPassword.trim().length > 0
    ) {

      if (props.status === 'add') {
        const userData = {
          username: enteredUsername,
          email: enteredEmail,
          phone: enteredPhone,
          password: enteredPassword,
          type: enteredType,
        };
  
        utx.onAddUser(userData);
      }
    }

    if (props.status === 'edit') {
      const userData = {
        username: enteredUsername,
        email: enteredEmail,
        phone: enteredPhone,
        active: enteredActive,
      };

      props.onEditUser(userData, props.id);
    }
    
    history.push('/admin/viewUserList');
  };


  return (
    <>
      {utx.isLoading && <div className={classes.loader}></div>}
      {!utx.isLoading && (
        <div className={classes['row-right']} style={{marginTop:'-50px'}}>
          <h1 className={classes.user}>
            {props.status === 'add' ? 'Add User' : 'Edit User'}
          </h1>
          <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input
              id={classes.username}
              type="text"
              name="username"
              value={enteredUsername}
              onChange={usernameHandler}
            />
            {!usernameIsValid && (
              <label className={classes['error-text']}>
                *username not be empty.
              </label>
            )}
            <br />
            <label htmlFor="username">Email</label>
            <input
              id={classes.email}
              type="email"
              name="email"
              value={enteredEmail}
              onChange={emailHandler}
            />
            {!emailIsValid && (
              <label className={classes['error-text']}>
                *email not be empty.
              </label>
            )}
            <br />
            <label htmlFor="salary">Phone</label>
            <input
              type="text"
              id={classes.salary}
              value={enteredPhone}
              onChange={phoneHandler}
            />
            {!phoneIsValid && (
              <label className={classes['error-text']}>
                *phone not be empty.
              </label>
            )}
            <br />
            {props.status === 'add' && (
              <label htmlFor="password">Password</label>
            )}
            {props.status === 'add' && (
              <input
                id={classes.password}
                type="password"
                name="password"
                value={enteredPassword}
                onChange={PasswordHandler}
              ></input>
            )}
            {!passwordIsValid && props.status === 'add' &&(
              <label className={classes['error-text']}>
                *password not be empty.
              </label>
            )}
            <br />
            {props.status === 'edit' && <label htmlFor="active">Active</label>}
            {props.status === 'edit' && (
              <input
                type="number"
                min="0"
                max="1"
                id={classes.active}
                value={enteredActive}
                onChange={activeHandler}
              />
            )}
            {props.status === 'add' && <label htmlFor="type">Type</label>}
            {props.status === 'add' && (
              <select
                name="type"
                id={classes.select}
                value={enteredType}
                onChange={typeHandler}
              >
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="receptionist">Receptionist</option>
              </select>
            )}
            <button id={classes['add_button']} type="submit">
              {props.status === 'add' ? 'Add User' : 'Edit User'}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddUserForm;
