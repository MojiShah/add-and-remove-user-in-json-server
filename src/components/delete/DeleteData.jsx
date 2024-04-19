import React, { useState } from 'react';
import './DeleteData.css';

export default function DeleteData() {

  const [userId , setUserId] = useState('');

  const deleteHandler = async () => {
    console.log('userId', userId);
    const res = await fetch(`http://localhost:4000/users/${userId}`, {
      method: 'DELETE'
    });
    console.log(res);
  }

  return (
    <div className='deletePage'>
      <div className='form'>
        <input 
          type="text" 
          placeholder='userId'
          value={userId}
          onChange={e=>setUserId(e.target.value)}
          />
        <button onClick={deleteHandler}>Delete User</button>
      </div>
    </div>
  )
}
