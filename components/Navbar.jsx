import Link from "next/link";
import SignUpDialog from "./SignUpDialog";
import LoginDialog from "./LoginDialog";

const Navbar = () => {
    return (
        <nav className="p-5 flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold uppercase">LOGO</Link>

            <div className="flex gap-2">
                <LoginDialog />
                <SignUpDialog />
            </div>
        </nav>
    )
}

export default Navbar;