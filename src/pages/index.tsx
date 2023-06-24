import Image from "next/image";
import { Inter } from "next/font/google";
import App from "@/components/App";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";
import { signOut } from "firebase/auth";
import { Button, Text } from "@chakra-ui/react";
import SignInWithEmailPassword from "@/components/SignInWithEmailPassword";
import SignInWithProvider from "@/components/SignInWithProvider";
import SignUp from "@/components/SignUp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loading] = useAuthState(auth);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Text fontSize="14pt" mt={16}>
        {loading && "🕒 Checking authentication..."}
        {!loading && user && `👋 Hi ${user?.email}, welcome!`}
        {!user && "🙅‍♀️ You are not signed in yet."}
      </Text>
      <div className="flex flex-col justify-center bg-stone-300 rounded-lg">
        <App />
      </div>
    </main>
  );
}
