import { useEffect, useState } from "react";
import LinkFormCard from "./form";
import SaveBtn from "./save-btn";
import { platforms } from "../config/platform";
import Sidebar from "./sidebar";

export default function HomePage() {
    const [links, setLinks] = useState(localStorage.getItem("links") ? JSON.parse(localStorage.getItem("links")) : []);
    const handleDelete = (e) => {

        const excludeLinks = links.filter(link => link.id != e.target.id);

        setLinks([
            ...excludeLinks
        ])

        console.log(e.target.id);
        
    }

    const handleChange = (e) => {
        const changeLink = links.find(link => link.id == e.target.id)
        const { id, name, value } = e.target;


        const excludeLinks = links.filter(link => link.id != e.target.id);
        
        const newObj = {
            ...changeLink,
            [e.target.name]: e.target.value
        }
        
        setLinks(prevLinks =>
            prevLinks.map(link =>
                link.id == id ? { ...link, [name]: value } : link
            )
        );
    }


    useEffect(() => {
        console.log(links);

        localStorage.setItem("links", JSON.stringify(links.filter(link => link.platform != "" && link.link != "")))
        
    }, [links])
    return (
        <>
        <Sidebar />
        <div className="grid grid-cols-6 xl:grid-cols-12 ml-4 mr-4 mb-[32px]">

            <div className="col-span-5 hidden xl:flex xl:bg-[#FFFFFF] xl:p-[24px] xl:mr-[10px] xl:ml-[8px] xl:mt-[16px] xl:mb-[24px]  xl:rounded-lg">
                <div className="hidden relative xl:flex xl:w-[307px] xl:h-[631px] xl:mx-auto xl:mt-[40px] z-30" >
                <img src="/images/phone.svg" alt="" />
                <div className="absolute w-[238px] h-[46px] top-[279px] start-[33px] z-40">
                    {links.map(link => {
                        const linkPlatform = platforms.find(x => x.key == link.platform);
                        return(
                            <div className="flex cursor-pointer w-full h-full mb-[16px] items-center rounded-lg gap-1 p-2 " style={{
                                backgroundColor: linkPlatform?.bgColor,
                                color: linkPlatform?.textColor
                            }} key={link.id}>
                                {linkPlatform?.Icon && <linkPlatform.Icon />}
                                {linkPlatform?.label && <span>{linkPlatform.label}</span>}
                                </div>
                        )
                    })}
                    </div>
                </div>
                   
                
            </div>
            <div className="col-span-7 md:ml-[9px] md:mr-[9px]">
                <div className="bg-[#FFFFFF]  rounded-lg">
            <div className="p-5 m-4 md:ml-[24px] md:mr-[24px]">
                <div className="mb-2">
                    <h1 className="font-bold text-2xl">Customize your links</h1>
                </div>
                <div>
                    <p className="text-[#737373] mb-10 text-base">Add/edit/remove links below and then share all your profiles with the world!</p>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => {
            if (links.length < 5) { // Maksimum 5 link eklenebilir
            setLinks(prevLinks => [
                ...prevLinks,
                {
                    id: prevLinks.length > 0 ? prevLinks[prevLinks.length - 1].id + 1 : 1,
                    platform: "",
                    link: ""
                }
            ]);
        }
    }} 
    disabled={links.length >= 5} className="text-[#633CFF] text-l rounded-lg pr-[93.5px] pl-[93.5px] pt-[11px] pb-[11px] border border-solid border-[#633CFF] text-nowrap md:w-screen hover:bg-[#EFEBFF] hover:text-[#633CFF]">+ Add new link</button>
                </div>
            </div>
            <div className="overflow-y-auto h-[400px] md:h-[500px] xl:h-[500px]">
            {links.length === 0 ?(
                <div className="ml-5 mr-5 md:ml-[40px] md:mr-[40px] pl-[20px] pt-[46px] pr-[20px] pb-[46px] mt-6 gap-6 bg-[#FAFAFA] flex flex-col rounded-lg">
                    <div className="flex justify-center ">
                        <img className="md:w-3xs" src="/images/content-img.svg" alt="" />
                    </div>
                    <div className="flex justify-center font-bold text-xl md:ml-[76px] md:mr-[76px]">
                        <h1 className="text-3xl text-nowrap">Let’s get you started</h1>
                    </div>
                    <div>
                        <p className="text-[#737373] text-base text-center md:ml-[76px] md:mr-[76px]">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                    </div>

                </div>
            ) : (
                links.map(link => (
                    <LinkFormCard key={link.id} handleDelete={handleDelete} onChange={handleChange} link={link} />
                ))
            )}
            </div>
            <div className="border border-solid flex justify-start mt-6 border-[#D9D9D9]">

            </div>
            <div>
                <SaveBtn />
            </div>

                </div>

            </div>
        </div>
        </>
    )
}