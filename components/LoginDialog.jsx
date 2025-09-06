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

const LoginDialog = () => {
    return (
        <Dialog>
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
                <LoginForm />
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog;