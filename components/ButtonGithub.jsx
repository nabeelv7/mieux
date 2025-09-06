import { GithubIcon } from "./Icons";
import { Button } from "./ui/button";

const ButtonGithub = ({ children }) => {
    return (
        <Button variant="outline" className="w-full">
            <GithubIcon />
            {children}
        </Button>
    )
}

export default ButtonGithub;