import React, { useState } from 'react'

export default function About() {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  //const onChange(e)=>{}
  function handleUser(e) {
    const {name,value}=e.target
    console.log(name,value)
    setNewUser(prevUser=>({
      ...prevUser,
      [name]:value
    }))
  }
  
  function submit(){
    console.log(newUser)
    setNewUser({username:'',email:'',password:''})
  }
  return (
    <div>
      <h1> this is about page</h1>

      <p>
        <input
          placeholder='enter name'
          name='username'
          value={newUser.username}
          onChange={handleUser} />
      </p>

      <p>
        <input
          placeholder='enter email'
          name='email'
          value={newUser.email}
          onChange={handleUser} />
      </p>

      <p>
        <input
          placeholder='enter password'
          name='password'
          value={newUser.password}
          onChange={handleUser} />
      </p>
      <button onClick={(submit)}>Submit</button>

    </div>
  )
}
