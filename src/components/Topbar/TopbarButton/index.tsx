"use client";
import CTAButton from "@/components/CTAButton";
import { usePathname } from "next/navigation";

const TopbarButton = () => {
  const pageType = usePathname();

  const isLandingPage = pageType === "/";

  return isLandingPage ? (
    <CTAButton className="hidden md:inline-flex md:py-4" />
  ) : (
    <></>
  );
};

export default TopbarButton;
