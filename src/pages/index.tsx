import Image from "next/image";
import { Inter } from "next/font/google";
import App from "@/components/App";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";
import { signOut } from "firebase/auth";
import { Button } from "@chakra-ui/react";
import SignInWithEmailPassword from "@/components/SignInWithEmailPassword";
import SignInWithProvider from "@/components/signInWithProvider";
import SignUp from "@/components/SignUp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loading] = useAuthState(auth);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col justify-center bg-stone-300 rounded-lg">
        {user ? (
          <div>
            <Button onClick={() => signOut(auth)}>Log Out</Button>
            <App />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <SignUp />
            <SignInWithEmailPassword />
            <SignInWithProvider />
          </div>
        )}
      </div>
    </main>
  );
}
