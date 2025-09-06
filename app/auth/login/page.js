import LoginForm from "@/components/LoginForm"
const LoginPage = () => {
    return (
        <main className="max-w-md mx-auto py-20 px-5">
            <h1 className="text-3xl leading-none font-semibold">Welcome back</h1>
            <p className="text-muted-foreground text-md mt-2 mb-7">Login to your account to continue to LOGO</p>
            <LoginForm />
        </main>
    )
}
export default LoginPage;