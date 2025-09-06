"use client"

import ButtonGithub from "./ButtonGithub";
import ButtonGoogle from "./ButtonGoogle";
import InputPassword from "./InputPassword";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { authClient } from "@/auth-client";

const SignUpForm = ({ onSuccess }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password,
                callbackURL: "/",
            }, {
                onSuccess,
                onError: (ctx) => {
                    toast.error(ctx.error?.message || "Signup failed");
                }
            })
        } catch (e) {
            toast.error("Internal server error")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        console.log({ name, email, password });
    })

    return (
        <div>

            <form method="POST" onSubmit={handleSubmit}>
                <Label className="mt-2" htmlFor="username">Username</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter username here.." type="text" className="mt-2" name="username" />

                <Label className="mt-6" htmlFor="email">Email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email here.." type="email" className="mt-2" name="email" />

                <Label className="mt-6" htmlFor="password">Password</Label>
                <InputPassword value={password} onChange={(e) => setPassword(e.target.value)} />

                <Button className="mt-6 w-full">
                    {isLoading && <span className="animate-spin"><Loader /></span>}
                    Sign up
                </Button>

                <Separator className="my-6" />
            </form>

            <div className="flex flex-col gap-2">
                <ButtonGoogle>Sign up with Google</ButtonGoogle>
                <ButtonGithub>Sign up with Github</ButtonGithub>
            </div>
        </div>
    )
}

export default SignUpForm;