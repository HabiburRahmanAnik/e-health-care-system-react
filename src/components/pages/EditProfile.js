import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import EditProfileForm from './EditProfileForm';

const EditProfile = () => {
  const { sendRequest } = useHttp();
  const profileId = localStorage.getItem('id');
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    sendRequest(
      { url: `http://localhost:8000/api/profile/${profileId}` },
      setProfileData
    );
  }, [sendRequest, profileId]);

  console.log(profileData);
  return (
    <>
      {profileData.map((user) => (
        <EditProfileForm
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          type={user.type}
          blood={user.bloodGroup}
          address={user.address}
          phone={user.phone}
        />
      ))}
    </>
  );
};

export default EditProfile;
