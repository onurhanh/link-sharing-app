import { useEffect, useRef, useState } from "react";
import LinkFormCard from "./form";
import SaveBtn from "./save-btn";
import Sidebar from "./sidebar";
import PreviewCard from "./preview-card";
import Swal from "sweetalert2";
import { useLinks } from "../hooks/use-links";

export default function HomePage() {
    const formRef = useRef(null);
    const { links, removeLink, addLink, changeLink, saveLinks } = useLinks();
    const handleDelete = (e) => {
        console.log("çalıştı", e.target.id);

        removeLink(e.target.id);
    };

    const handleChange = (e) => {
        // const changeLink = links.find((link) => link.id == e.target.id);
        const { id, name, value } = e.target;
        changeLink(id, name, value);
    };

    // useEffect(() => {
    //     console.log(links);

    //     localStorage.setItem(
    //         "links",
    //         JSON.stringify(
    //             links.filter((link) => link.platform != "" && link.link != "")
    //         )
    //     );
    // }, [links]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (links.some((link) => link.platform == "" || link.link == "")) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all the fields",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        saveLinks(links);
        Swal.fire({
            icon: "success",
            title: "Link Ekleme Başarılı!",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    return (
        <>
            <Sidebar />
            <div className="grid grid-cols-6 xl:grid-cols-12 ml-4 mr-4 mb-[32px]">
                <PreviewCard links={links} />
                <div className="col-span-7 md:ml-[9px] md:mr-[9px] xl:m-[24px]">
                    <div className="bg-[#FFFFFF] rounded-lg">
                        <div className="p-5 m-4 xl:m-0 md:ml-[24px] xl:mr-0 md:mr-[24px]">
                            <div className="mb-2 md:mb-[40px] flex flex-col gap-[8px] xl:m-[40px]">
                                <h1 className="font-bold text-2xl xl:mb-[8px]">
                                    Customize your links
                                </h1>
                                <p className="text-[#737373] text-base">
                                    Add/edit/remove links below and then share
                                    all your profiles with the world!
                                </p>
                            </div>
                            <div className="xl:mr-[40px] xl:ml-[40px] flex justify-center">
                                <button
                                    onClick={() => {
                                        if (links.length < 5) {
                                            addLink();
                                        }
                                    }}
                                    disabled={links.length >= 5}
                                    className=" text-[#633CFF] text-l rounded-lg pr-[93.5px] pl-[93.5px] pt-[11px] pb-[11px] border border-solid border-[#633CFF] text-nowrap md:w-screen hover:bg-[#EFEBFF] hover:text-[#633CFF]"
                                >
                                    + Add new link
                                </button>
                            </div>
                        </div>
                        <div className="xl:mr-[40px] xl:ml-[40px] overflow-y-auto h-[400px] md:h-[500px] xl:h-[500px]">
                            {links.length === 0 ? (
                                <div className="ml-5 mr-5 md:ml-[40px] md:mr-[40px] pl-[20px] pt-[46px] pr-[20px] pb-[46px] mt-6 gap-6 bg-[#FAFAFA] flex flex-col rounded-lg">
                                    <div className="flex justify-center ">
                                        <img
                                            className="md:w-3xs"
                                            src="/images/content-img.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex justify-center font-bold text-xl md:ml-[76px] md:mr-[76px]">
                                        <h1 className="text-3xl text-nowrap">
                                            Let’s get you started
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="text-[#737373] text-base text-center md:ml-[76px] md:mr-[76px]">
                                            Use the “Add new link” button to get
                                            started. Once you have more than one
                                            link, you can reorder and edit them.
                                            We’re here to help you share your
                                            profiles with everyone!
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="max-w-md mx-auto p-6 md:ml-[40px] bg-[#FAFAFA] shadow-md rounded-lg mt-10 xl:mt-[0px] md:max-w-screen md:mr-[40px]">
                                    <form onSubmit={handleSubmit} ref={formRef}>
                                        {links.map((link) => (
                                            <LinkFormCard
                                                key={link.id}
                                                handleDelete={handleDelete}
                                                onChange={handleChange}
                                                link={link}
                                            />
                                        ))}
                                    </form>
                                </div>
                            )}
                        </div>
                        <div className="border border-solid flex justify-start mt-6 border-[#D9D9D9]"></div>
                        <div>
                            <SaveBtn formRef={formRef} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
