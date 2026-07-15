'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import DownloadResume from "./DownloadResume";
import { styles } from "../styles";

const NavBar = () => {
    const [active, setActive] = useState('home');
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, options);

        menus.forEach(menu => {
            const element = document.getElementById(menu);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);
    const menus = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const routs =
        <>
            {
                menus.map((menu, ind) =>
                    <Link
                        key={ind} href={`#${menu}`}
                        onClick={() => setActive(menu)}
                        className={`${active === menu ? '!text-white text-xl' : ''} ${styles.navBarButton}`}
                    >
                        {menu}
                    </Link>)
            }
        </>

    return (
        <div className={`${styles.navbar}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <IoMdMenu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black/40 border border-white/10 backdrop-blur-lg rounded-box z-[1] mt-3 w-52 p-2 shadow-xl ">
                        {routs}
                    </ul>
                </div>
                <Link href={'/'} className={`${styles.navBarButton}`}>RJannat</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 flex gap-5 text-lg">
                    {routs}
                </ul>
            </div>
            <div className="navbar-end">
                <DownloadResume></DownloadResume>
            </div>
        </div>
    );
};

export default NavBar;