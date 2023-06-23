import { auth } from "@/firebase/app";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SignInWithProvider = () => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth);

  return (
    <Flex>
      <Button
        className="bg-orange-300 p-4 rounded-lg mb-4"
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        Continue with Google
      </Button>

      {fbError && <Text>{fbError.message}</Text>}
    </Flex>
  );
};

export default SignInWithProvider;
