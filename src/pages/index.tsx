import { Inter } from "next/font/google";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";
import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import AuthButtons from "@/components/AuthButtons";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loading] = useAuthState(auth);

  if (user && !loading && window) {
    window.location.href = "/CalendarDay";
  }

  if (loading || user) return null;

  return (
    <Flex
      direction="column"
      align="center"
      position="relative"
      top={200}
      text-align="center"
      width={{ base: "80%", md: "60%", lg: "600px" }}
      height="100vh"
      mx="auto"
    >
      <Flex w="full" direction="column" align="stretch" textAlign="center">
        <Heading fontSize="20pt" fontWeight={700} mt={5}>
          Home
        </Heading>
        <Text fontSize="14pt" mt={16}>
          {loading && "🕒 Checking authentication..."}
          {!loading && user && `👋 Hi ${user?.email}, welcome!`}
          {!user && "🙅‍♀️ You are not signed in yet."}
        </Text>

        <Flex mt={16}>
          <AuthButtons />
        </Flex>
      </Flex>
    </Flex>
  );
}
