import React from 'react'

interface MachineCardProps {
machine: any;
}

const MachineCard = ({machine}: MachineCardProps) => {
  return (
    <div className=' bg-slate-900 border-2 p-10' >
        <h1>Number: {machine.number}</h1>
        <h2>Bin Count: {machine.binCount}</h2>
        <h2>Candy / Notes: {machine.candy}</h2>
        <textarea></textarea>
        <br></br>
        <button className=' bg-slate-600 p-4 border rounded-md'>Update Notes</button>
        <h2>Last Serviced: {machine.lastServiced}</h2>
        <h2>Last withdrawl: {machine.moneyGatheredLastService}</h2>
        <h2>Total Money Withdrawn: {machine.moneyGatheredTotal}</h2>
        <label>Money Pulled This Service:</label>
        <input className=' text-slate-900 ' type='number' step={.01}/>
        <br></br>
        <button className=' bg-slate-600 p-4 border rounded-md'>Service Now</button>
        <button className=' bg-slate-600 p-4 border rounded-md'>Edit Machine Info</button>
        <button className=' bg-red-600 p-4 border rounded-md ml-96'>Delete This Machine</button>
    </div>
  )
}

export default MachineCard