
import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()




export default function Home() {
  
 let machines:Array<Object> = [];


  async function getMachines() {
   machines = await prisma.machines.findMany()
   console.log(machines)
   return machines; 
  }
  getMachines();


  return (
    <>
 <h1>Machines will be listed here</h1>
 {machines.length > 0 ? machines.map((machine:Object, idx) => {
  return <h1>{machine?.id}</h1>
 }) : <h1>No machines added yet</h1>}
  </>
  )
}
