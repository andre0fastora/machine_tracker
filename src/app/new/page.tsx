import React from 'react'

const AddMachine = () => {
  return (
    <>
    <form className=' flex-col'>
        <label htmlFor="numberInput">Machine Number</label>
        <input type="number" id="numberInput"/>
        <br></br>
        <br></br>
        <label htmlFor="binCount">Bin Count</label>
        <input type="number" id="binCount"></input>
        <br></br>
        <br></br>
        <label htmlFor="candy">Candy Type / notes</label>
        <br></br>
        <textarea rows={10} cols={50}  id="binCount"/>
        <br></br>
        <button type='submit' className=' bg-slate-100 text-slate-800 rounded p-2'>Submit</button>
        
    </form>
    </>
  )
}

export default AddMachine