
"use client"
import MachineCard from '@/components/MachineCard'
import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import { useEffect, useState } from 'react'






export default function Home() {
  
  const [machines, setMachines] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const getMachines = async () => {
    await axios.get("http://localhost:3000/api/get").then((response) => {
    setMachines(response.data)
    setIsLoading(false)
    })
  }
  //pull this into an api route so I can set up state in this component
 useEffect(() => {
  getMachines()
 },[])

  return (
    <>
 <h1>Machines will be listed here</h1>
 {!isLoading ? machines.length > 0 ? machines.map((machine: any, idx) => {
  return <MachineCard machine={machine}/>
 }) : <h1>No machines added yet</h1> : <h1>Loading...</h1>}
  </>
  )
}
