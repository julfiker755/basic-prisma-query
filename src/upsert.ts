import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
    // update one
     const result1 =await prisma.post.upsert({
        where:{
            id:30
        },
        update:{
            title:"ccc",
            content:"ccc",
            author:"julfiker 4"
        }, 
        create:{
            title:"xxx",
            content:"xxx",
            author:"julfiker 4"
        }
     })
     console.log(result1)
}

main()