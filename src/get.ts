import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
const result2=await prisma.post.findMany()
console.log(result2)
}

main()