import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
const result1=await prisma.post.findFirst({
    where:{
        id:2
    }
})

//  findUnique and  findUniqueOrThrow
const result2=await prisma.post.findUnique({
    where:{
        id:5
    }
})
const result3=await prisma.post.findUniqueOrThrow({
    where:{
        id:5
    }
})
console.log(result2)
}

main()