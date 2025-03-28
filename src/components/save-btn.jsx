export default function SaveBtn({ formRef }) {
    return (
        <div className="mt-4 flex justify-center md:pb-[24px] md:justify-end md:mr-[40px] md:mb-[24px]">
            <button
                onClick={() => {
                    formRef.current.requestSubmit();
                }}
                className="bg-[#633CFF] mb-5 rounded-lg text-white pt-[11px] pb-[11px] pr-[137px] pl-[137px] md:pr-[27px] md:flex md:pl-[27px] hover:text-[#633CFF] hover:bg-[#EFEBFF] hover:border hover:font-bold hover:border-[#633CFF]"
            >
                Save
            </button>
        </div>
    );
}
