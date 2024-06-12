import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Blog
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Sharing my thoughts and experiences on web development, technology, and life.
          </Text>
        </Box>

        <Box>
          <Image
            borderRadius="md"
            src="https://via.placeholder.com/800x400"
            alt="Blog cover"
            mb={4}
          />
          <Heading as="h2" size="lg" mb={2}>
            Latest Post
          </Heading>
          <Text fontSize="md" color="gray.700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </Text>
          <Link color="teal.500" href="#" mt={2} display="block">
            Read more...
          </Link>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Follow Me
          </Heading>
          <VStack spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;