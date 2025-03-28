import Sidebar from "./sidebar";
import SaveBtn from "./save-btn";
import PreviewCard from "./preview-card";
import { useEffect, useRef, useState } from "react";
import { useLinks } from "../hooks/use-links";
import { useUser } from "../hooks/use-user";
import Swal from "sweetalert2";

export default function ProfileDetails() {
    const { links } = useLinks();
    const { user, saveUser, setUser } = useUser();
    const formRef = useRef(null);

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        saveUser(user);
        Swal.fire({
            icon: "success",
            title: "Kullanıcı başarıyla güncellendi",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    return (
        <div>
            <Sidebar />
            <div className="bg-[#FAFAFA] xl:grid xl:grid-cols-12">
                <PreviewCard links={links} user={user} />
                <div className="bg-[#FFFFFF] xl:mt-[24px] m-[16px] md:mt-[0px] md:ml-[24px] md:mr-[24px] rounded-lg xl:grid xl:col-span-7">
                    <div className=" m-[24px] md:ml-[40px] xl:ml-[64px]">
                        <h1 className="font-bold text-[24px] text-[#333333] pt-[24px] mb-[8px]">
                            Profile Details
                        </h1>
                        <p className="text-[#737373] text-[16px] leading-[150%]">
                            Add your details to create a personal touch to your
                            profile.
                        </p>
                    </div>
                    <div className="text-[#333333] xl:ml-[64px] md:mb-[154px] m-[24px] md:m-[40px] text-[12px] p-[20px] rounded-lg bg-[#FAFAFA]">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="md:grid md:grid-cols-2 md:text-[16px] md:text-[#737373]">
                                <label>First name*</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstname"
                                    onChange={handleChange}
                                    value={user?.firstName}
                                    className="block bg-[#FFFFFF] h-[48px] w-full p-2 border-[#D9D9D9] border-1 rounded-md mb-[12px] text-[#333333]"
                                />
                            </div>
                            <div className="md:grid md:grid-cols-2 md:text-[16px] md:text-[#737373]">
                                <label>Last name*</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastname"
                                    onChange={handleChange}
                                    value={user?.lastName}
                                    className="block bg-[#FFFFFF] h-[48px] w-full p-2 border-[#D9D9D9] border-1 rounded-md mb-[12px] text-[#333333]"
                                />
                            </div>
                            <div className="md:grid md:grid-cols-2 md:text-[16px] md:text-[#737373]">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={user?.email}
                                    className="block bg-[#FFFFFF] h-[48px] w-full p-2 border-[#D9D9D9] border-1 rounded-md mb-[20px] text-[#333333]"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="border-b flex justify-start mt-6 border-[#D9D9D9]"></div>
                    <div>
                        <SaveBtn formRef={formRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}
