import { Prisma, PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {

    const prisma = new PrismaClient();

    const {machineNumber, candy, binCount} = await req.json()
    
    const machine = {
        number: machineNumber,
        binCount: binCount,
        candy: candy,
        image: "",
        lastServiced: new Date(),
        moneyGatheredLastService: 0.00,
        moneyGatheredTotal: 0.00
    
    }
    prisma.$disconnect
    console.log(machine)
    
        
return NextResponse.json(prisma.machines.create({data:machine}));
}    


