import SaveBtn from "./save-btn";
import saveBtn from "./save-btn";

export default function HomePage() {
    return(
        <div className=" p-5 bg-[#FFFFFF] m-5 rounded-lg">
            <div>
                <div className="mb-2">
                <h1 className="font-bold text-2xl">Customize your links</h1>
                </div>
                <div>
                <p className="text-[#737373] mb-10 text-base">Add/edit/remove links below and then share all your profiles with the world!</p>
                </div>
                <div className="flex justify-center">
                    <button className="text-[#633CFF] text-l rounded-lg pr-23 pl-23 pt-2 pb-2 border border-solid border-[#633CFF]">+ Add new link</button>
                </div>
            </div>
            <div className="pl-[20px] pt-[46px] pr-[20px] pb-[46px] mt-6 gap-6 bg-[#FAFAFA] flex flex-col ">
                <div className="flex justify-center">
                <img src="src/images/content-img.svg" alt="" />
                </div>
                <div className="flex justify-center font-bold text-xl">
                    <h1>Let’s get you started</h1>
                </div>
                <div>
                    <p className="text-[#737373] text-base">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                </div>

            </div>
            <div className="p-0 m-0 border border-solid w-screen flex justify-start mt-6 border-[#D9D9D9]">

            </div>
            <div>
            <SaveBtn />
            </div>

           </div>
    )
}