"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/results", label: "Results" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold gradient-text tracking-tight">
                                Skinnair
                            </span>
                            <span className="text-[10px] text-gray-500 -mt-1 tracking-wider uppercase hidden sm:block">
                                Skin & Hair Care
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                                        ? "text-primary bg-primary/10"
                                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/919049884354?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 btn-shine"
                        >
                            Book Appointment
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`block h-0.5 w-6 bg-gray-600 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-gray-600 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-gray-600 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`md:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 ${isOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full pointer-events-none"
                    }`}
            >
                <div className="flex flex-col p-6 gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${pathname === link.href
                                    ? "text-primary bg-primary/10"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/919049884354?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-5 py-3 bg-gradient-to-r from-primary to-primary-dark text-white text-center font-semibold rounded-xl shadow-md"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </nav>
    );
}
