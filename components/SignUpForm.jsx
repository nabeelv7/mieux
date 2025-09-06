"use client"

import ButtonGithub from "./ButtonGithub";
import ButtonGoogle from "./ButtonGoogle";
import InputPassword from "./InputPassword";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const SignUpForm = () => {
    return (
        <div>

            <form method="POST">
                <Label className="mt-2" htmlFor="username">Username</Label>
                <Input placeholder="Enter username here.." type="text" className="mt-2" name="username" />

                <Label className="mt-6" htmlFor="email">Email</Label>
                <Input placeholder="Enter email here.." type="email" className="mt-2" name="email" />

                <Label className="mt-6" htmlFor="password">Password</Label>
                <InputPassword />

                <Button className="mt-6 w-full">Sign up</Button>

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