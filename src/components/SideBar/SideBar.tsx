import getCurrentUser from "@/actions/getCurrentUser";
import DesktopSideBar from "./DesktopSideBar";
import MobileFooter from "./MobileFooter";
 async function SideBar({ children }: {
    children: React.ReactNode
}) {
    const currentUser= await getCurrentUser();
    return (
        <div>
            <DesktopSideBar currentUser={currentUser!}/>
            <MobileFooter/>
           <main className="lg:pl-20"> 
            {children}
           </main>
        </div>
    )
}
export default SideBar;