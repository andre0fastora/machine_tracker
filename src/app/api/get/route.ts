import { Prisma, PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";



const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
    const machines = await prisma.machines.findMany();

    prisma.$disconnect;

    return NextResponse.json(machines);

}
    
   
        




