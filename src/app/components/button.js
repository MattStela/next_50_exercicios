import Link from "next/link";

const CustomButton = ({ destination, label, className }) => {
  return (
    <div className="font-mono hover:bg-blue-700 transition-all duration-500 transform hover:scale-105 flex items-center justify-center bg-gradient-to-l from-white to-black rounded-3xl">
      <Link
        href={destination}
        className={`inline-block bg-black text-white p-3 rounded-3xl m-1 text-center shadow-lg  font-roboto ${className}`}
      >
        {label}
      </Link>
    </div>
  );
};

export default CustomButton;
