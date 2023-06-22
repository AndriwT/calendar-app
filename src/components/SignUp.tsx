import { auth } from "@/firebase/app";
import { useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, fbError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error) setError("");

    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const passWordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,256}$/gm;

    if (!passWordRegex.test(signUpForm.password)) {
      setError(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        onChange={handleChange}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChange}
      />
      <Input
        required
        name="confirmPassword"
        placeholder="confirmPassword"
        type="password"
        onChange={handleChange}
      />

      {(error || fbError) && <Text>{error || fbError?.message}</Text>}

      <Button type="submit" isLoading={loading}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
