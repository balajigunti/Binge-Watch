import React from 'react';
import { useSelector } from 'react-redux';
import { selectuser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import "./ProfileScreen.css";

function ProfileScreen() {
    const user = useSelector(selectuser);
    
  return (
    <div className="profileScreen">
        <Nav />
        <div className='profileScreen_body'>
            <h1>Your Profile</h1>
            <div className="profileScreen_info">
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
            alt=''
             />
            <div className='profileScreen_details'>
                <h2>{user.email}</h2>
                <div className='profilescreen_plans'>
                    
                    <button onClick={() => auth.signOut()} className='profileScreen_signOut'>
                        Sign Out
                    </button>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProfileScreen