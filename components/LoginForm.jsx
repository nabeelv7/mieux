"use client"

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import ButtonGithub from "./ButtonGithub";
import ButtonGoogle from "./ButtonGoogle";
import InputPassword from "./InputPassword";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { authClient } from "@/auth-client";

const LoginForm = ({ onSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { data, error } = await authClient.signIn.email(
                {
                    email,
                    password,
                    callbackURL: "/dashboard",
                },
                {
                    onSuccess,
                    onError: (ctx) => {
                        toast.error(ctx.error?.message || "Login failed");
                    },
                }
            );
        } catch {
            toast.error("Internal server error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <Label className="mt-6" htmlFor="email">Email</Label>
                <Input
                    placeholder="Enter email here.."
                    type="email"
                    className="mt-2"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Label className="mt-6" htmlFor="password">Password</Label>
                <InputPassword
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button className="mt-6 w-full">
                    {isLoading && <span className="animate-spin"><Loader /></span>}
                    Login
                </Button>

                <Separator className="my-6" />
            </form>

            <div className="flex flex-col gap-2">
                <ButtonGoogle>Login with Google</ButtonGoogle>
                <ButtonGithub>Login with Github</ButtonGithub>
            </div>
        </div>
    );
};

export default LoginForm;
