import Link from "next/link";
import SignUpForm from "./SignUpForm";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpDialog = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Sign up</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">Welcome to LOGO</DialogTitle>
                    <DialogDescription>
                        Create an account to continue to LOGO
                    </DialogDescription>
                </DialogHeader>

                <SignUpForm onSuccess={() => {
                    setOpen(false);
                    router.push("/");
                }} />

                <DialogFooter>
                    <p className="text-sm">By signing up, you agree to our <Link className="underline" href="/tos">Terms of Service.</Link></p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SignUpDialog;