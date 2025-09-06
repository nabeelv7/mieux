import { GoogleIcon } from "./Icons";
import { Button } from "./ui/button";

const ButtonGoogle = ({ children }) => {
    return (
        <Button variant="secondary" className="w-full">
            <GoogleIcon />
            {children}
        </Button>
    )
}

export default ButtonGoogle;