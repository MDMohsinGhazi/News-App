import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="text-white absolute w-full bg-oxfordBlue flex flex-col items-center">
      <div className="h-1 w-full bg-blue-800 "></div>
      <div className="p-5 text-oxfordBlue flex space-x-10">
        <RiFacebookFill
          size={30}
          style={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: "100%",
          }}
        />
        <RiTwitterFill
          size={30}
          style={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: "100%",
          }}
        />
        <RiInstagramFill
          size={30}
          style={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: "100%",
          }}
        />
      </div>
      <div className="flex pb-3 space-x-3">
        <div>Info</div>
        <div>Support</div>
        <div>Marketing</div>
      </div>
      <div className="flex space-x-5 ">
        <div>Terms of Use</div>
        <div>Privacy Policy</div>
      </div>
      <div className="text-gray-400 p-3">@2022 Flutter News</div>
    </footer>
  );
};
