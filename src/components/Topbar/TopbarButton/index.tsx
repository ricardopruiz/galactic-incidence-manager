"use client";
import CTAButton from "@/components/CTAButton";
import { usePathname } from "next/navigation";

const TopbarButton = () => {
  const pageType = usePathname();

  const isLandingPage = pageType === "/";

  const buttonVisibility = isLandingPage ? "md:inline-flex md:py-4" : "";

  return <CTAButton className={`hidden ${buttonVisibility}`} />;
};

export default TopbarButton;
