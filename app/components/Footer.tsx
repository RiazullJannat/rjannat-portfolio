const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full py-8 bg-[#0a0a0a] border-t border-white/10">
            <div className="text-center flex flex-col justify-center items-center gap-2">
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                    &copy; {currentYear} Riazull Jannat. All Rights Reserved.
                </p>
                <p className="text-gray-600 text-xs">
                    Designed and built with Next.js
                </p>
            </div>
        </footer>
    );
};

export default Footer;
