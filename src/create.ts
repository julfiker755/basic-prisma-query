import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
    const result1 =await prisma.post.create({
        data:{
            title:"Julfiker 1",
            content:"Type hare 2",
            author:"julfiker 4"
        }
       })

    const result2=await prisma.post.createMany({
        data:[
            {title:"Julfiker 1",content:"Type hare 2",author:"julfiker 4"},
            {title:"Julfiker 1",content:"Type hare 2",author:"julfiker 4"},
            {title:"Julfiker 1",content:"Type hare 2",author:"julfiker 4"},
        ]
    })
       console.log(result2)
}

main()