
import Backdrop from "@/lib/components/Backdrop";
import Benefits from "@/lib/components/Benefits";
import FAQ from "@/lib/components/FAQ";
import Features from "@/lib/components/Features";
import Hero from "@/lib/components/Hero";
import Navbar from "@/lib/components/Navbar";
import RadialPhone from "@/lib/components/RadialPhone";
import Steps from "@/lib/components/Steps";
import TargetMarket from "@/lib/components/TargetMarket";
export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden py-10">
      <Backdrop className="absolute -top-[548px] left-1/2 -z-10 -translate-x-1/2 transform" />
      <Navbar />
      <Hero />
      <RadialPhone />
      <Benefits />
      <Steps />
      <Features />
      {/* <FAQ /> */}
      <TargetMarket />
     
      hello
    </div>
  );
}
