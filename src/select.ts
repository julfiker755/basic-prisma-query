import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
const result1=await prisma.post.findFirst({
    where:{
        id:30
    },
    select:{
        id:true,
        published:true
    }
})

console.log(result1)
}

main()