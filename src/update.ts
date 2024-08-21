import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
    // update one
     const result1 =await prisma.post.update({
        where:{
            id:1
        },
        data:{
            title:"xxx",
            content:"xxx",
            author:"julfiker 4"
        }
     })
     
    //  updateMany
     const result2 =await prisma.post.updateMany({
        where:{
            title:"Julfiker 1",
        },
        data:{
            published:true
        }
     })
  
       console.log(result2)
}

main()