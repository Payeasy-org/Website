import Image from "next/image";

const Benefits = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1500px] py-10">
      <h2 className="mx-auto max-w-[70%] text-center text-[70px] leading-[70px] font-semibold text-[#0D0D0D]">
        The Queue Ends Here
      </h2>

      <p className="mx-auto mt-3 max-w-[40%] text-center text-xl font-semibold text-[#0D0D0D]">
        Why wait when you can walk out with confidence? <br /> Scan, pay, go -
        it’s that easy.
      </p>

      <div className="mt-10 grid grid-cols-3 items-center gap-5">
        <div className="flex h-[550px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#E5C5FF] px-6 pt-7">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Save Time, Every Time
            </h3>
            <p className="mt-2 text-lg font-semibold text-white">
              Get in and out of the store in minutes. Whether you’re shopping
              for a few items or a full cart, Pay Easy makes every second count.
            </p>
          </div>

          <Image
            src="/Clock.svg"
            alt="clock"
            width={10}
            height={10}
            className="h-full w-full translate-y-6"
          />
        </div>

        <div className="flex h-[550px] flex-col justify-between rounded-[20px] bg-[#DCB3FF] px-6 pt-7">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Skip the Lines{" "}
            </h3>
            <p className="mt-2 text-lg font-semibold text-white">
              No more waiting at checkout. With Pay Easy, you scan and pay from
              your phone—then walk out. It's that simple.
            </p>
          </div>

          <Image
            src="/Queue.svg"
            alt="Queue"
            width={10}
            height={10}
            className="w-full object-cover"
          />
        </div>

        <div className="flex h-[550px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#C98AFF] px-6 pt-7">
          <div>
            <h3 className="text-xl font-semibold text-white">Pay Your Way </h3>
            <p className="mt-2 text-lg font-semibold text-white">
              From cards to digital wallets, choose the payment method that
              works best for you. Fast, secure, and seamless.
            </p>
          </div>

          <Image
            src="/Cards.svg"
            alt="Card"
            width={10}
            height={10}
            className="h-full w-full translate-x-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
