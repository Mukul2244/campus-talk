import prisma from "@/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser= async  ()=>{
    try {
        const session = await getSession();

        if(session?.user?.email){
            const currentUser = await prisma.user.findUnique({
                where: {
                    email: session.user.email as string 
                }
            });
            if(currentUser) {
                return currentUser
            }
        }
    } catch (error:any) {
         return null;
    }
}

export default getCurrentUser;