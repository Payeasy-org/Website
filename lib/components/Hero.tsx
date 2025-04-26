const Hero = () => {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
      <h1 className="text-center text-[120px] leading-[120px] font-semibold text-[#0D0D0D]">
        Checkout Made <br /> <h1 className="text-[#AB49FF]">Effortless</h1>
      </h1>

      <p className="max-w-[40%] text-center text-xl font-semibold">
        Pay Easy is the mobile self-checkout system that lets you shop smarter
        and faster—no lines, no waiting
      </p>

      <div className="mt-5 flex items-center gap-4">
        <button className="transform rounded-full cursor-pointer bg-[linear-gradient(155deg,#7E55EC_0%,#AB49FF_50%)] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(171,73,255,0.4)] hover:brightness-110">
          Join the waitlist
        </button>

        <button className="cursor-pointer rounded-full bg-[linear-gradient(155deg,#7E55EC_0%,#AB49FF_50%)] p-0.5 transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(171,73,255,0.4)]">
          <div className="rounded-full bg-white/90 px-6 py-3 font-semibold text-[#7B2CBF] backdrop-blur">
            View Demo
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
