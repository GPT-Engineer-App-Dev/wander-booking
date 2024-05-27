import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Plan and book your perfect trip with us!</Text>
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Button leftIcon={<FaPlane />} colorScheme="teal" variant="solid" size="lg">
            Flights
          </Button>
          <Button leftIcon={<FaHotel />} colorScheme="teal" variant="solid" size="lg">
            Hotels
          </Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" variant="solid" size="lg">
            Car Rentals
          </Button>
        </Box>
        <Image src="/images/travel-hero.jpg" alt="Travel" borderRadius="md" boxShadow="lg" />
      </VStack>
    </Container>
  );
};

export default Index;