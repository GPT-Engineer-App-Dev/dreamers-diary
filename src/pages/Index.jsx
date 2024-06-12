import { Container, VStack, Heading, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

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

        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="lg" mb={4}>
          Add New Post
        </Button>

        {posts.map((post, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Heading as="h2" size="lg" mb={2}>
              {post.title}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
            <Text fontSize="md" color="gray.700">
              {post.content}
            </Text>
          </Box>
        ))}

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