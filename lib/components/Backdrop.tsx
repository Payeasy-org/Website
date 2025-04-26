import { cn } from "../utils";

const Backdrop = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-[150vh] w-[150vw] rounded-full bg-[#CE98FC]/20 blur-[100px] ",
        className,
      )}
    ></div>
  );
};

export default Backdrop;
