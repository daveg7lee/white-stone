import ProtectedPage from "@/components/protected-page";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <ProtectedPage>
      <Box>
        <Heading>Home</Heading>
      </Box>
    </ProtectedPage>
  );
}
