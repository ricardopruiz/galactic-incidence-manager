import Link from "next/link";
import Image from "next/image";
import CTAButton from "../CTAButton";
import TopbarButton from "./TopbarButton";

const Topbar = () => {
  return (
    <header className="bg-background text-foreground py-4 px-4 flex justify-between items-center md:px-8 md:h-[87px]">
      <Link className="w-[191px] flex justify-center" href={"/"}>
        <Image
          className="w-[160px] h-[34px]"
          alt="Logo image of Galatic"
          width={500}
          height={500}
          src={"/assets/logo.svg"}
          priority
        />
      </Link>
      <TopbarButton />
    </header>
  );
};

export default Topbar;
