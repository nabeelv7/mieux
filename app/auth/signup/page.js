import Link from "next/link";

import SignUpForm from "@/components/SignUpForm"
const SignUpPage = () => {
    return (
        <main className="max-w-md mx-auto py-20 px-5">
            <h1 className="text-3xl leading-none font-semibold">Welcome to LOGO</h1>
            <p className="text-muted-foreground text-md mt-2 mb-7">Create an account to continue to LOGO</p>

            <SignUpForm />

            <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
                <p className="text-sm">By signing up, you agree to our <Link className="underline" href="/tos">Terms of Service.</Link></p>
            </div>
        </main>
    )
}
export default SignUpPage;