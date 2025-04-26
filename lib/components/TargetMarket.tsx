import Image from "next/image";

const TargetMarket = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1500px] py-10">
      <h2 className="mx-auto max-w-[70%] text-center text-[70px] leading-[70px] font-semibold text-[#0D0D0D]">
        Perfect for Shoppers. Powerful for Retailers.{" "}
      </h2>

      <p className="mx-auto mt-3 max-w-[40%] text-center text-xl font-semibold text-[#0D0D0D]">
        Whether you're running a busy store or just picking up a few items, Pay
        Easy adapts to your world—making checkout faster, smoother, and smarter
        for everyone.
      </p>

      <div className="mt-10 flex justify-between gap-5">
        <div className="w-[48%] overflow-hidden rounded-[20px] bg-[#A044F0] px-6 py-7">
          <div className="w-[60%]">
            <h3 className="text-[30px] font-semibold text-white">
              For Shoppers
            </h3>
            <p className="mt-2 text-xl font-semibold text-white">
              No more waiting at checkout. With Pay Easy, you scan and pay from
              your phone then walk out. It's that simple.
            </p>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div className="relative h-[180px] -translate-x-7 -translate-y-6">
              <Image
                src="/Shopping-Basket.png"
                alt="Iphone"
                width={221}
                height={478}
                className="w-full object-cover"
              />
            </div>

            <button className="cursor-pointer rounded-full border bg-white px-6 py-3 text-xl font-semibold text-[#AB49FF] transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white">
              Join the Waitlist
            </button>
          </div>
        </div>

        <div className="w-[48%] overflow-hidden rounded-[20px] bg-[#7431AF] px-6 py-7">
          <div className="w-[70%]">
            <h3 className="text-[30px] font-semibold text-white">
              For Retailers
            </h3>
            <p className="mt-2 text-xl font-semibold text-white">
              Faster lines, happier customers. With Pay Easy, shoppers scan,
              pay, and go — making every trip smoother and every checkout
              seamless.
            </p>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div className="relative h-[180px] -translate-x-7 -translate-y-6">
              <Image
                src="/Shopping-Basket.png"
                alt="Iphone"
                width={221}
                height={478}
                className="w-full object-cover"
              />
            </div>

            <button className="cursor-pointer rounded-full border bg-white px-6 py-3 text-xl font-semibold text-[#AB49FF] transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetMarket;
