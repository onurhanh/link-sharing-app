import { FaRightLong } from "react-icons/fa6";
import { platforms } from "../config/platform";
import { useLinks } from "../hooks/use-links";
import { useEffect } from "react";

export default function PreviewCard({ user, links }) {
    return (
        <div className="col-span-5 hidden xl:block bg-white">
            <div className="px-20">
                <div className="border rounded-xl">
                    <div className="p-6">
                        <div className="flex flex-col items-center border rounded-lg p-5 justify-center min-h-screen">
                            <div className="my-10">
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
                                        className="flex pl-[16px] gap-[8px] cursor-pointer w-full h-full mb-[16px] items-center rounded-lg p-2 "
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
