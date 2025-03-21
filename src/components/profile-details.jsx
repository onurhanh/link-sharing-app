import { FaRightLong } from "react-icons/fa6";
import { platforms } from "../config/platform";
import Sidebar from "./sidebar";
import SaveBtn from "./save-btn";

export default function ProfileDetails() {
    return (
        <div>
            <Sidebar />
            <div className="bg-[#FAFAFA] xl:grid xl:grid-cols-12">
                <div className="hidden xl:ml-[24px] xl:flex justify-center items-center xl:col-span-5 xl:bg-[#FFFFFF] xl:p-[24px] xl:mr-[10px] xl:mt-[24px] xl:mb-[24px]  xl:rounded-lg">
                <div className="w-[307px] h-[631px]">
                <img src="/images/phone.svg" alt="" />
                </div>
                </div>
                <div className="bg-[#FFFFFF] xl:mt-[24px] m-[16px] md:mt-[0px] md:ml-[24px] md:mr-[24px] rounded-lg xl:grid xl:col-span-7">
                <div className=" m-[24px] md:ml-[40px] xl:ml-[64px]">
                    <h1 className="font-bold text-[24px] text-[#333333] pt-[24px] mb-[8px]">Profile Details</h1>
                    <p className="text-[#737373] text-[16px] leading-[150%]">Add your details to create a personal touch to your profile.</p>
                </div>
                <div className="text-[#333333] xl:ml-[64px] md:mb-[154px] m-[24px] md:m-[40px] text-[12px] p-[20px] rounded-lg bg-[#FAFAFA]">
                    <div className="md:grid md:grid-cols-2 md:text-[16px] md:text-[#737373]">
                    <label>First name*</label>
                    <input type="text" name="firstname" id="firstname"   className="block bg-[#FFFFFF] h-[48px] w-full p-2 border-[#D9D9D9] border-1 rounded-md mb-[12px] text-[#333333]"/>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:text-[16px] md:text-[#737373]">
                    <label >Last name*</label>
                    <input type="text" name="lastname" id="lastname"  className="block bg-[#FFFFFF] h-[48px] w-full p-2 border-[#D9D9D9] border-1 rounded-md mb-[12px] text-[#333333]"/>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:text-[16px] md:text-[#737373]">
                    <label >Email</label>
                    <input type="email" name="email" id="email"  className="block bg-[#FFFFFF] h-[48px] w-full p-2 border-[#D9D9D9] border-1 rounded-md mb-[20px] text-[#333333]"/>
                    </div>
                    
                </div>
                <div className="border border-solid flex justify-start mt-6 border-[#D9D9D9]">
                </div>
                <div>
                    <SaveBtn />
                </div>     
                </div>

            </div>
        </div>
    )
}