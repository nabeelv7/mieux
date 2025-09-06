"use client"

import ButtonGithub from "./ButtonGithub";
import ButtonGoogle from "./ButtonGoogle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const SignUpForm = () => {
    return (
        <div>

            <form method="POST">
                <Label className="mt-2" htmlFor="username">Username</Label>
                <Input type="text" className="mt-2" name="username" />

                <Label className="mt-6" htmlFor="email">Email</Label>
                <Input type="email" className="mt-2" name="email" />

                <Label className="mt-6" htmlFor="password">Password</Label>
                <Input type="password" className="mt-2" name="password" />

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