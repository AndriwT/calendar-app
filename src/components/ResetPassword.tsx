import { auth } from "@/firebase/app";
import { Button, Flex, Input, Text } from "@chakra-ui/react";

import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, fbError] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendPasswordResetEmail(email);

    setIsSuccess(true);
  };

  return (
    <Flex>
      <Text>Reset your password</Text>

      {isSuccess ? (
        <Text>Check your email</Text>
      ) : (
        <>
          <Text>
            {`Enter the email associated with your account and we'll send you a reset link.`}
          </Text>
          <form onSubmit={handleSubmit}>
            <Input
              required
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {fbError && <Text>{fbError.message}</Text>}

            <Button type="submit" isLoading={sending}>
              Reset Password
            </Button>
          </form>
        </>
      )}
    </Flex>
  );
};

export default ResetPassword;
