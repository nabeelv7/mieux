"use client";

import { authClient } from "@/auth-client";
import { useRouter } from "next/navigation";

const LogoutWrapper = ({ children }) => {
    const router = useRouter();

    return (
        <div onClick={async () => {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => router.push("/")
                }
            })
        }}>
            {children}
        </div>
    )
}

export default LogoutWrapper;