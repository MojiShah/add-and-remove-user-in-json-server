import React, { useState } from 'react';
import './SendData.css';

export default function SendData() {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');

  const submitHandler = e =>{
    e.preventDefault(); 
    console.log('Mojtaba');
    let newUserData = {
      id:Math.floor(100*Math.random()),
      name:username,
      age:userAge
    }

    fetch('http://localhost:4000/users',{
      method:'POST',
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify(newUserData)
    })
    .then(res=>console.log(res));

    setUsername('');
    setUserAge('');
  }

  return (
    <div className='sendPage'>
      <form className='myform' onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder='userAge'
          value={userAge}
          onChange={e=>setUserAge(e.target.value)}
        />

        <button type="submit">send User</button>

      </form>
    </div>
  )
}


