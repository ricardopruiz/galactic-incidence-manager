"use client";

type DateFormatterProps = {
  date: Date;
};

const DateFormatter = ({ date }: DateFormatterProps) => {
  return (
    <span>
      {new Date(date).toLocaleDateString("es-ES", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  );
};
export default DateFormatter;
