import HomePage from "./home-page";


export default function Sidebar() {
    return(
        <div >
            <div className="p-5 mb-5 flex items-center justify-between bg-[#FFFFFF] rounded-b-lg">
            <button className="p-[10px]"><img src="src/images/link-icon.svg" alt="" /></button>
            <div>
            <button><img src="src/images/links.svg" alt="" /></button>
            <button><img src="src/images/profile-details.svg" alt="" /></button>
            </div>
            <button><img src="src/images/publish.svg" alt="" /></button>
            </div>
            <HomePage />
            
        </div>
    )
}
