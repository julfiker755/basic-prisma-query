import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
    // ase
    const result1 =await prisma.post.findMany({
        orderBy:{
            title:'asc'
        }
    })
//   desc
const result2 =await prisma.post.findMany({
    orderBy:{
        title:'desc'
    }
})
       console.log(result2)
}

main()