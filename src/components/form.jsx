import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function LinkFormCard({ link, onChange, handleDelete }) {

    
    return (
        <div className="max-w-md mx-auto p-6 md:ml-[40px] bg-[#FAFAFA] shadow-md rounded-lg mt-10 xl:mt-[0px] md:max-w-screen md:mr-[40px]">
            <form>
                <div className="pr-[20px] pl-[20px] relative">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-[#737373]">= Link #{link.id}</span>
                        <button onClick={handleDelete} id={link.id} type="button" className="text-[#737373] font-normal">
                            Remove
                        </button>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-600 mb-1">Platform</label>
                        <div className="relative">
                            <select defaultValue={link.platform} id={link.id} name="platform" onChange={onChange} className="w-full p-2 border-[#D9D9D9] border-1 rounded-md appearance-none bg-white">
                                <option value="">Select a platform</option>
                                <option value="github"><FaGithub /> GitHub</option>
                                <option value="youtube"><FaYoutube /> YouTube</option>
                                <option value="linkedin"><FaLinkedin/> LinkedIn</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Link</label>
                        <div className="relative flex items-center">
                            <input defaultValue={link.link} id={link.id} onChange={onChange}
                                name="link"
                                type="url"
                                className="block w-full p-2 border-[#D9D9D9] border-1 rounded-md mb-1 text-[#333333]"
                            />
                            {link.link && (
                                <a 
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                ></a>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}