"use client"
import React, {useState} from 'react'
import axios from 'axios';



const AddMachine = () => {
  
  const [machineNumber, setMachineNumber] = useState(0);
  const [binCount, setBinCount] = useState(0);
  const [candy, setCandy] = useState("");

 


  
  
  return (
    <>
    <form
    onSubmit={async (e)=> {
      e.preventDefault();
      await axios.post("http://localhost:3000/api/save", {
        machineNumber: machineNumber,
        binCount: binCount,
        candy: candy
      })
    }}
     className=' flex-col'>
        <label htmlFor="numberInput">Machine Number</label>
        <input className=' text-slate-900'
         onChange={(e) => {
          setMachineNumber(Number(e.target.value))
         }}
         type="number"
          id="numberInput"/>
        <br></br>
        <br></br>
        <label htmlFor="binCount">Bin Count</label>
        <input className=' text-slate-900'
         onChange={(e) => {
          setBinCount(Number(e.target.value))
         }}
        type="number"
         id="binCount"></input>
        <br></br>
        <br></br>
        <label htmlFor="candy">Candy Type / notes</label>
        <br></br>
        <textarea className=' text-slate-900'
          onChange={(e) => {
            setCandy(e.target.value)
           }}
          rows={10}
          cols={50}
          id="candy"/>
        <br></br>
        <button type='submit' className=' bg-slate-100 text-slate-800 rounded p-2'>Submit</button>
        
    </form>
    </>
  )
}

export default AddMachine