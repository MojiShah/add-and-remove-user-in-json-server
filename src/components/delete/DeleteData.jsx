import React, { useState } from 'react';
import './DeleteData.css';
import Swal from 'sweetalert2';

export default function DeleteData() {

  const [userId , setUserId] = useState('');

  const deleteHandler = async () => {
    console.log('userId', userId);
    const res = await fetch(`http://localhost:4000/users/${userId}`, {
      method: 'DELETE'
    });
    console.log(res);

    if (res.status === 200){
      Swal.fire({
        title: "Good job!",
        text: "User removed successfully!!",
        icon: "success"
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
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
