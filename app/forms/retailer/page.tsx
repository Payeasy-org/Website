import Image from "next/image";


export default function RetailerForm() {
    return (
        <div className="flex flex-row items-center bg-white gap[57px]">
  <Image
    src="/Start.png"
    alt="Retailer app image"
    width={936}
    height={936}
    className="object-contain mr-[57px]"
  />


            {/* <Image src="/Start.png" alt="App on phone" width={700} height={700} className="absolute top-[125px] -left-[225px] z-0"/> */}
            <div className="flex1 w-[644px] h[766px] mt-[59px] p-[40px] bg-[rgba(206,152,252,0.2)] rounded-[20px]">
                <div className="flex flex-col gap-[44px]">
                    <h2 className="font-semibold text-[40px] leading-[100%] tracking-[-0.01em] text-black">Let's Bring Convenience <br /> to your Customers</h2>
                    <div className="flex flex-col gap-[15px]">
                        <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Store Name</label>
                        <input
                            type="text"
                            placeholder="Shoprite"
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
                    <div className="flex flex-col gap-[15px]">
                        <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Email</label>
                        <input
                            type="email"
                            placeholder="henry@gmail.com"
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
                            <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Phone Number</label>
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
                            <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Number of Branches</label>
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
                        <label className="block h-[14px] font-semibold text-[20px] leading-[100%] tracking-tightest">Inventory System Used</label>
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
  