// pagination 2 types
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
    // offset pagination
    const result1 =await prisma.post.findMany({
        skip:3,
        take:2
    })

// cuser base pagination
const result2 =await prisma.post.findMany({
    skip:3,
    take:2,
    cursor:{
        id:16
    }
})
       console.log(result2)
}

main()