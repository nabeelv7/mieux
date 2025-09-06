import SignUpForm from "./SignUpForm";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"

const SignUpDialog = () => {
    return (
        <Dialog>
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
                <SignUpForm />
            </DialogContent>
        </Dialog>
    )
}

export default SignUpDialog;