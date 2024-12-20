import Link from 'next/link';

const CustomButton = ({ destination, label, className }) => {
  return (
    <Link href={destination} className={`inline-block bg-blue-500 text-white p-3 rounded-2xl text-center hover:bg-blue-600 transition-colors duration-300 ${className}`}>
        {label}
    </Link>
  );
};

export default CustomButton;
