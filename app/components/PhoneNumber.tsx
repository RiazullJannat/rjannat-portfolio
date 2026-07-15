import { FaPhoneAlt, FaWhatsappSquare } from 'react-icons/fa';

const PhoneNumber = () => {
    return (
        <div className='flex flex-col gap-6 justify-center'>
            <a
                href="https://wa.me/8801948848898"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-4 group cursor-pointer'
            >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <FaWhatsappSquare size={28} />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">WhatsApp</span>
                    <span className="text-white md:text-lg font-medium group-hover:text-gray-300 transition-colors">+880 1948 848898</span>
                </div>
            </a>
            
            <a
                href="tel:+8801948848898"
                className='flex items-center gap-4 group cursor-pointer'
            >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <FaPhoneAlt size={22} />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Phone Call</span>
                    <span className="text-white md:text-lg font-medium group-hover:text-gray-300 transition-colors">+880 1948 848898</span>
                </div>
            </a>
        </div>
    );
};

export default PhoneNumber;
