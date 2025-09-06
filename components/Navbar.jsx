"use client";

import Link from "next/link";
import SignUpDialog from "./SignUpDialog";
import LoginDialog from "./LoginDialog";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(true);
    }, [pathname])

    return (
        <nav className="border-b border-b-foreground/20">
            {/* desktop navbar */}
            <div className="p-5 md:grid hidden grid-cols-3 w-full">
                <Link href="/" className="text-3xl font-bold uppercase justify-self-start">LOGO</Link>

                <div className="flex gap-10 items-center justify-center">
                    <Link className="hover:underline" href="/">Home</Link>
                    <Link className="hover:underline" href="/about">About</Link>
                    <Link className="hover:underline" href="/contact">Contact</Link>
                    <p className="flex gap-1 justify-center items-center" href="/">Options<ChevronDown size="16" /></p>
                </div>

                <div className="flex gap-2 justify-self-end">
                    <LoginDialog />
                    <SignUpDialog />
                </div>
            </div>

            {/* mobile navbar */}
            <div className="p-5 relative flex md:hidden justify-between items-center">
                <Link href="/" className="text-3xl font-bold uppercase">LOGO</Link>

                <p className={`${!isOpen ? "hidden" : ""}`} onClick={() => setIsOpen(prev => !prev)}><MenuIcon /></p>
                <p className={`${!isOpen ? "" : "hidden"}`} onClick={() => setIsOpen(prev => !prev)}><X /></p>

                <div id="menu" className={`absolute min-h-screen z-999 top-20 left-0 ${!isOpen ? "" : "hidden"} w-full bg-background`}>

                    <div className="flex flex-col gap-8 px-5 py-8 items-start">
                        <Link className="hover:underline" href="/">Home</Link>
                        <Link className="hover:underline" href="/about">About</Link>
                        <Link className="hover:underline" href="/contact">Contact</Link>
                        <span className="flex gap-1 justify-center items-center" href="/">Options<ChevronDown size="16" /></span>
                    </div>

                    <div className="flex flex-col px-5 py-8 gap-2">
                        <Button asChild variant="secondary">
                            <Link href="/auth/login">
                                Login
                            </Link>
                        </Button>

                        <Button asChild>
                            <Link href="/auth/signup">
                                Sign up
                            </Link>
                        </Button>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;