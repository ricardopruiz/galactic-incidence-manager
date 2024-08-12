type TitleProps = {
  className?: string;
  children: React.ReactNode;
};

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={`font-extrabold text-xl md:text-2xl w-auto text-center md:text-left ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
