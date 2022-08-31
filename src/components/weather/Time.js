import { format } from "date-fns";

export const Time = () => {
  return (
    <div className="relative text-white p-5 pt-16 hidden lg:block">
      <div className="text-xl leading-4 font-semibold">
        {format(new Date(), "EEEE")}
      </div>
      <div className="pl-8"> {format(new Date(), "MMMM dd, yyyy")}</div>
    </div>
  );
};
