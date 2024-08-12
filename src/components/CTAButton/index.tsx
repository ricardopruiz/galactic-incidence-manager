import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

type CTAButtonProps = {
  className?: string;
};

const CTAButton = ({ className }: CTAButtonProps) => {
  return (
    <Button asChild className="px-10 py-5 rounded-[8px] bg-accent md:p-5">
      <Link
        href={"/incidence-manager"}
        className={`flex justify-center gap-[10px] h-auto  ${className}`}
      >
        <span className="font-normal text-lg/[30px] md:font-medium md:text-lg/[23px]">
          Acceder
        </span>
        <Image
          alt="arrow icon"
          src={"assets/arrow.svg"}
          width={10}
          height={10}
          priority
        />
      </Link>
    </Button>
  );
};

export default CTAButton;
