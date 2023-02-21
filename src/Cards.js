import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const Card = ({ name, career, imageSrc, route }) => {
    return (
      <VStack
        color="black"
        backgroundColor="white"
        cursor="pointer"
        borderRadius="md"
      >
        <Image borderRadius="md" src={imageSrc} alt={name} />
        <VStack spacing={4} p={4} alignItems="flex-start">
          <HStack spacing={10} alignItems="left">
            <Heading as="h2" size="md">
              {name}
            </Heading>
          </HStack>
          <Text color="#64748b" fontSize="md">
            {career}
          </Text>
          <HStack spacing={2} alignItems="center">
            <Button onClick={route}>See more</Button>
          </HStack>
        </VStack>
      </VStack>
    );
 };
export default Card;
