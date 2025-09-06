import { auth } from "@/auth"
import LogoutWrapper from "@/components/LogoutWrapper";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { headers } from "next/headers"

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  console.log({ session });

  if (session) {
    return (
      <main className="flex flex-col justify-center items-center py-20 text-center gap-5">
        <h1 className="text-3xl font-medium">Welcome, {session?.user?.name}! 👋</h1>
        <LogoutWrapper>
          <Button variant="destructive"><LogOutIcon /> Logout</Button>
        </LogoutWrapper>
      </main >
    )
  }

  return (
    <main className="flex flex-col justify-center items-center py-20 text-center gap-5">
      <h1 className="text-3xl font-medium">Welcome, Wanderer! 👋</h1>
    </main>
  )
}