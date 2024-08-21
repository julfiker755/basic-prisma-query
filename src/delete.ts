import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
    // deleteOne
     const result1 =await prisma.post.delete({
        where:{
            id:1
        }
     })

    //  deleteMany
     const result2 =await prisma.post.deleteMany({
        where:{
            published:true
        }
     })
  
       console.log(result2)
}

main()