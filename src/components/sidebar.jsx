import { FaLink, FaUser } from "react-icons/fa6";
import HomePage from "./home-page";
import { useState } from "react";

export default function Sidebar() {
    const [activeButton, setActiveButton] = useState("link"); // İlk olarak FaLink aktif başlasın

    const handleClick = (buttonName) => {
        if (activeButton !== buttonName) { // Aynı butona tıklanırsa değişiklik yapma
            setActiveButton(buttonName);
        }
    };

    return (
        <div>
            <div className="p-[16px] flex items-center justify-between bg-[#FFFFFF] rounded-b-lg md:ml-[24px] md:mr-[24px] md:rounded-lg">
                <button className="items-center flex gap-x-1.5 p-[10px]">
                    <img src="src/images/link-icon.svg" alt="" />
                    <p className="font-bold font-stretch-100% text-2xl md:flex hidden">devlinks</p>
                </button>
                <div className="flex">
                    <button 
                        onClick={() => handleClick("link")} 
                        className="pl-[29px] rounded-lg pt-[13px] pb-[13px] pr-[29px]" 
                        style={{ 
                            backgroundColor: activeButton === "link" ? "#EFEBFF" : "transparent",
                            opacity: activeButton === "link" ? "1" : "0.5" 
                        }}
                    >
                        <div className="flex gap-x-2 items-center" style={{ color: activeButton === "link" ? "#6B46C1" : "#000000", opacity: activeButton === "link" ? "1" : "0.5" }}>
                        <FaLink  />
                        <p className="md:flex hidden" >Links</p>
                        </div >

                    </button>
                    <button 
                        onClick={() => handleClick("user")} 
                        className="flex pl-[29px] rounded-lg pt-[13px] pb-[13px] pr-[29px]" 
                        style={{ 
                            backgroundColor: activeButton === "user" ? "#EFEBFF" : "transparent",
                            opacity: activeButton === "user" ? "1" : "0.5" 
                        }}
                    >
                        <div style={{ color: activeButton === "user" ? "#6B46C1" : "#000000", opacity: activeButton === "user" ? "1" : "0.5" }} className="flex gap-x-2 items-center">
                        <FaUser  />
                        <p className="md:flex hidden">Profile Details</p>
                        </div>
                        </button>
                </div>
                <button>
                    <img src="src/images/publish.svg" alt="" className="md:hidden"/>
                    <button className="hidden md:flex pt-[11px] pl-[27px] pb-[11px] pr-[27px] border rounded-lg border-[#6B46C1] text-[#6B46C1] hover:bg-[#EFEBFF] hover:text-[#633CFF] delay-30">Preview</button>
                </button>
            </div>
            <HomePage />
        </div>
    );
}
