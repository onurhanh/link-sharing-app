import { FaRightLong } from "react-icons/fa6";
import { platforms } from "../config/platform";
import { useLinks } from "../hooks/use-links";
import { useEffect } from "react";

export default function PreviewCard({ user, links }) {
    return (
        <div className="col-span-5 hidden xl:block bg-white mt-6 rounded-lg ml-2 h-[872px]">
            <div className="px-30 py-20 h-screen">
                <div className="border rounded-xl h-full">
                    <div className="p-6 h-full">
                        <div className="flex h-full flex-col items-center border rounded-lg p-5 justify-center">
                            <div className="my-10 ">
                                {user && (
                                    <div className="text-center">
                                        <h1>
                                            {user?.firstName} {user?.lastName}
                                        </h1>
                                        <p>{user?.email}</p>
                                    </div>
                                )}
                            </div>
                            {links.map((link) => {
                                const linkPlatform = platforms.find(
                                    (x) => x.key == link.platform
                                );
                                return (
                                    <div
                                        className="flex pl-[16px] gap-[8px] cursor-pointer w-full mb-[16px] items-center rounded-lg p-2 "
                                        style={{
                                            backgroundColor:
                                                linkPlatform?.bgColor,
                                            color: linkPlatform?.textColor,
                                        }}
                                        key={link.id}
                                    >
                                        {linkPlatform?.Icon && (
                                            <linkPlatform.Icon />
                                        )}
                                        {linkPlatform?.label && (
                                            <span>{linkPlatform.label}</span>
                                        )}
                                        <FaRightLong className="ml-auto w-[16px] h-[16px] mr-[10px] text-lg cursor-pointer" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
