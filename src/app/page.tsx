"use client";

import { auth } from "@/firebase";
import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Center h="100vh">
      <VStack>
        <Heading>Log in</Heading>
        <Button colorScheme="gray" mt="3" onClick={onClick}>
          Continue with Github
        </Button>
      </VStack>
    </Center>
  );
}
