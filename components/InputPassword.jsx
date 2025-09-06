"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

const InputPassword = ({ value, onChange }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            <Input value={value} onChange={onChange} placeholder="Enter password here.." type={show ? "text" : "password"} className="mt-2" name="password" />
            <button
                type="button"
                className="grid place-items-center size-9 absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShow(!show)}
            >
                {!show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
        </div>
    )
}

export default InputPassword;