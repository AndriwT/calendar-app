import { auth } from "@/firebase/app";
import { useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignInWithEmailPassword: React.FC = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, fbError] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(signInForm.email, signInForm.password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="flex flex-col p-2" onSubmit={handleSubmit}>
      <Input
        required
        className="m-2 p-2 rounded-md"
        name="email"
        placeholder="Your email..."
        type="email"
        onChange={handleChange}
      />
      <Input
        required
        className="m-2 p-2 rounded-md"
        name="password"
        placeholder="Choose a strong password..."
        type="password"
        onChange={handleChange}
      />

      {fbError && <Text>{fbError.message}</Text>}

      <Button className="mb-4" type="submit" isLoading={loading}>
        Sign In
      </Button>
    </form>
  );
};

export default SignInWithEmailPassword;
