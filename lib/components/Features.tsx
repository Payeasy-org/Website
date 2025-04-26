import Image from "next/image";
import Backdrop from "./Backdrop";

const Features = () => {
  return (
    <div className="relative mx-auto w-[90%] max-w-[1500px] py-10">
      <Backdrop className="absolute top-0 -left-1/4 -z-10 h-[800px] w-[800px]" />

      <h2 className="mx-auto max-w-[70%] text-center text-[70px] leading-[70px] font-semibold text-[#0D0D0D]">
        Built for Speed. Designed for Simplicity.{" "}
      </h2>

      <p className="mx-auto mt-3 max-w-[40%] text-center text-xl font-semibold text-[#0D0D0D]">
        From scanning to checkout, every feature in Pay Easy is made to save
        time, reduce friction, and deliver a seamless shopping experience—for
        customers and store owners alike.
      </p>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex h-[700px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#7B2CBF] px-6 pt-7">
            <div>
              <h3 className="text-[30px] font-semibold text-white">
                Real-time cart updates
              </h3>
              <p className="mt-2 w-[60%] text-xl font-semibold text-white">
                From cards to digital wallets, choose the payment method that
                works best for you. Fast, secure, and seamless.
              </p>
            </div>

            <div className="relative mx-auto h-[500px] w-max overflow-hidden rounded-[40px] rounded-b-none bg-[#9B4BDF] px-6 pt-4">
              <Image src="/iphone.png" alt="Iphone" width={400} height={870} />
            </div>
          </div>

          {/* ─── Right: two smaller cards ─── */}
          <div className="grid grid-rows-2 gap-3">
            {/* Top right */}
            <div className="flex justify-between gap-5 overflow-hidden rounded-[20px] bg-[#C38AF3] px-6">
              <div className="mt-7 w-[50%]">
                <h3 className="text-[30px] font-semibold text-white">
                  Multiple payment options
                </h3>
                <p className="mt-2 text-xl font-semibold text-white">
                  From cards to digital wallets, choose the payment method that
                  works best for you. Fast, secure, and seamless.
                </p>
              </div>

              <div className="relative h-[350px] flex-1 overflow-hidden rounded-none">
                <Image
                  src="/Payments.png"
                  alt="Iphone"
                  width={221}
                  height={478}
                  className="w-full -translate-y-12 object-cover"
                />
              </div>

            </div>

            <div className="flex flex-col justify-between overflow-hidden rounded-[20px] bg-[#9B47E3] px-6 pt-7">
              <div>
                <h3 className="text-[30px] font-semibold text-white">
                  Works with any retail setup
                </h3>
                <p className="mt-2 w-[70%] text-xl font-semibold text-white">
                  Pay Easy integrates smoothly with your existing POS and
                  inventory systems. No complex setup—just plug and play.
                </p>
              </div>

              <div className="relative mx-auto h-[150px] w-max overflow-hidden">
                <Image
                  src="/Dashboard.png"
                  alt="Iphone"
                  width={400}
                  height={870}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
