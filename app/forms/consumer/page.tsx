// app/form/consumer/page.tsx
export default function ConsumerForm() {
    return (
      <div className="flex flex-col lg:flex-row items-center bg-white">
        <img src="/basket.png" alt="Basket" className="w-[700px] h-[700px] absolute left-[50px] top-[130px]" />
        <div className="flex1 w-[644px] mt-[70px] p-[40px] bg-[rgba(206,152,252,0.2)] rounded-[20px] relative left-[640px]">
                <div className="flex flex-col gap-[44px]">
                    <h2 className="font-semibold text-[40px] leading-[100%] tracking-[-0.01em] h-[76px] text-black">Be the First to Scan, <br /> Pay & Go</h2>
                    <div className="flex flex-col gap-[15px]">
                        <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Name</label>
                        <input
                            type="text"
                            placeholder="henry"
                            className="bg-[#ffffff] 
                                w-[566px] 
                                h-[54px] 
                                rounded-[50px] 
                                px-[24px] py-[20px] 
                                placeholder:text-gray-400 
                                placeholder:font-semibold 
                                placeholder:leading-[100%] 
                                placeholder:tracking-[-0.01em] 
                                focus:outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[29px]">
                        <div className="flex flex-col gap-[15px]">
                            <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Email</label>
                            <input
                                type="tel"
                                placeholder="0813344456"
                                className="bg-[#ffffff] 
                                    w-full 
                                    h-[54px]
                                    rounded-[50px] 
                                    px-4 py-3 
                                    placeholder:text-gray-400 
                                    placeholder:font-semibold
                                    placeholder:leading-[100%]
                                    placeholder:tracking-[-0.01em]
                                    focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Phone Number</label>
                            <input
                                type="number"
                                placeholder="4"
                                className="bg-[#ffffff] 
                                    w-full 
                                    h-[54px]
                                    rounded-[50px] 
                                    px-4 py-3 
                                    placeholder:text-gray-400 
                                    placeholder:font-semibold
                                    placeholder:leading-[100%]
                                    placeholder:tracking-[-0.01em]
                                    focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Tell Us Where You’d Love to Use Pay Easy</label>
                        <input
                            type="text"
                            placeholder="e.g Quickbook"
                            className="bg-[#ffffff] 
                                w-[566px] 
                                h-[54px] 
                                rounded-[50px] 
                                px-[24px] py-[20px] 
                                placeholder:text-gray-400 
                                placeholder:font-semibold 
                                placeholder:leading-[100%] 
                                placeholder:tracking-[-0.01em] 
                                focus:outline-none"
                        />
                    </div>
                    <div className="text-right">
                        <button className="rounded-full bg-[linear-gradient(155deg,#7E55EC_0%,#AB49FF_50%)] px-6 py-3 font-semibold text-white">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  