"use client";

import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { useState } from "react";

const LoginDialog = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary">Login</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">Welcome back</DialogTitle>
                    <DialogDescription>
                        Login to your account to continue to LOGO
                    </DialogDescription>
                </DialogHeader>

                <LoginForm onSuccess={() => {
                    setOpen(false);
                    router.push("/");
                }} />

            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog;