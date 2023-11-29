'use client'

import axios from 'axios'



export default function Home() {

  const addUser = async () => {
    const user: any = {
      name:"username",
      mail: "email"
    }

    const res = await axios.post("/api/users",user);
    console.log(res);
  
  }

  return (
    <button onClick={addUser}>Click Me</button>
  )
}
