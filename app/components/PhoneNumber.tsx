import { FaPhoneAlt, FaWhatsappSquare } from 'react-icons/fa';

const PhoneNumber = () => {
    return (
        <div className='flex gap-4 justify-center flex-col md:flex-row'>
            <a
                href="https://wa.me/8801948848898"
                target="_blank"
                rel="noopener noreferrer"
                className='flex gap-2 items-center text-xl cursor-pointer justify-center hover:text-green-500 transition-colors'
            >
                <FaWhatsappSquare />Whatsapp:<strong>+8801948848898</strong>
            </a>
            <a
                href="tel:+8801948848898"
                className='flex gap-2 items-center text-xl cursor-pointer justify-center hover:text-blue-500 transition-colors'
            >
                <FaPhoneAlt />Phone:<strong>+8801948848898</strong>
            </a>
        </div>
    );
};

export default PhoneNumber;
