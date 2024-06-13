import React,{useState} from 'react'

export default function Home() {
  const[UserName,setUserName]=useState('')
  const[password,setPassword]=useState('')

  function submit(e){
    console.log(UserName)
    console.log(password)

    setUserName('')
    setPassword('')
}
  return (
    <div>
      <h1> this is home page</h1>
      <p>
        <input value={UserName} placeholder='enter name' onChange={(e)=>{setUserName(e.target.value)}}/>
        <p>
        <input value={password} placeholder='enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
        </p>
        <button onClick={submit}>Submit</button>
      </p> 
    </div>
  )
}
