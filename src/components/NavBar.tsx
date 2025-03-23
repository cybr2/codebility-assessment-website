import React, { useState, useEffect } from "react";
import logo from "../assets/icon.svg";

export const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    const handleScroll = React.useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0) {
            setIsAtTop(true);
            setShowNavbar(true);
        } else {
            setIsAtTop(false);
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false); // Hide on scroll down
            } else {
                setShowNavbar(true); // Show on scroll up
            }
        }
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div
            className={`w-full flex justify-center py-2.5 md:py-4 fixed top-9 z-20 bg-white shadow-md 
      transition-all duration-500 ease-in-out
      ${isAtTop ? "opacity-100 translate-y-0" : showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
        >
            <a href="/"><img src={logo} alt="Doctors Note logo" className="md:h-14" /></a>
        </div>
    );
};
