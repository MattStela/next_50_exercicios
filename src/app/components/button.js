import Link from 'next/link';

const CustomButton = ({ destination, label, className }) => {
  return (
    <Link href={destination} className={`inline-block bg-blue-500 text-white p-3 rounded-2xl text-center shadow-lg hover:bg-blue-700 transition-all duration-500 transform hover:scale-105 font-roboto ${className}`}>
        {label}
    </Link>
  );
};

export default CustomButton;