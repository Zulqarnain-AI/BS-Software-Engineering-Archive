import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router';

import CountdownTimer from './CountDounTimer.jsx'
import StudentList from './studentlist.jsx';
import Home from './home.jsx';

 function App() {
  useEffect(()=>{
    getdata()
  })
  async function getdata() {
    // await fetch("https://691c637c3aaeed735c90a3a2.mockapi.io/Students",{
    //   method:'POST',
    //   headers:{
    //     'Content-type':'application/json'
    //   },
    //   body:JSON.stringify({name:"ali",Address:"xyz"})
    // }).then(res=>{
    //   console.log(res)
    // })


  //   await fetch("https://691c637c3aaeed735c90a3a2.mockapi.io/Students/4",{
  //   method:'PUT',
  //   headers:{'Content-type':"application/json"},
  //   body:JSON.stringify({name:'ali',Address:"islamabad"})
  // })
    // .then(res=>console.log("data:", res))
await fetch("https://691c637c3aaeed735c90a3a2.mockapi.io/Students/5",{
    method:'DELETE',
    
  })
    const res = await fetch("https://691c637c3aaeed735c90a3a2.mockapi.io/Students")
    const data = await res.json()
  
    if (!data)
      console.log("data is loading")
    else
      console.log(data)
  }





  return (
    <>





    </>
  )
}

export default App
