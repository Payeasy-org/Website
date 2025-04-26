import Image from "next/image";

const RadialPhone = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute h-[950px] w-[950px] rounded-full bg-[#F0DFFF]" />

      <div className="absolute h-[800px] w-[800px] rounded-full bg-[#E6C8FF]" />

      <div className="absolute h-[670px] w-[670px] rounded-full bg-[#DCB3FF]" />

      <div className="absolute h-[560px] w-[560px] rounded-full bg-[#C98AFF]" />

      {/* phone in front */}
      <div className="relative z-10">
        <Image src="/iphone.png" alt="App on phone" width={400} height={780} />
      </div>
    </section>
  );
};

export default RadialPhone;
