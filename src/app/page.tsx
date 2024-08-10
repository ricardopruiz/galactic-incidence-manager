import CTAButton from "@/components/CTAButton";

export default function Home() {
  const mainPageStyles = "relative md:px-[32px] md:grid md:grid-cols-2";

  const mobileBackgroundDetail =
    "before:bg-[url('/assets/background-detail.svg')] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-cover before:z-[-1]";

  const desktopBackgroundDetail =
    "md:before:bg-[url('/assets/background-detail-desktop.svg')]";

  return (
    <main
      className={`${mainPageStyles} ${mobileBackgroundDetail} ${desktopBackgroundDetail}`}
    >
      <div className="flex flex-col justify-center gap-[60px] px-[16px] h-full items-center md:items-start text-center md:text-left">
        <div className="flex flex-col gap-6">
          <h4 className="text-primary-foreground font-bold text-4xl/[43.57px] md:text-[64px]/[77.45px]">
            Bienvenido a Galactic Corp
          </h4>
          <p className="text-primary-foreground font-normal text-lg/[30px]">
            Explorando nuevas fronteras del espacio, elevando la humanidad hacia
            un futuro ilimitado 🚀
          </p>
        </div>
        <CTAButton />
      </div>
    </main>
  );
}
