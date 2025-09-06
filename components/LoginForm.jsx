"use client"

import ButtonGithub from "./ButtonGithub";
import ButtonGoogle from "./ButtonGoogle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const LoginForm = () => {
    return (
        <div>
            <form method="POST">
                <Label className="mt-6" htmlFor="email">Email</Label>
                <Input type="email" className="mt-2" name="email" />

                <Label className="mt-6" htmlFor="password">Password</Label>
                <Input type="password" className="mt-2" name="password" />

                <Button className="mt-6 w-full">Login</Button>

                <Separator className="my-6" />
            </form>

            <div className="flex flex-col gap-2">
                <ButtonGoogle>Login with Google</ButtonGoogle>
                <ButtonGithub>Login with Github</ButtonGithub>
            </div>
        </div>
    )
}

export default LoginForm;