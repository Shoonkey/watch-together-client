import { Box, Flex } from "@chakra-ui/react";

const MockCard = () => <Box w="100%" h="250px" bg="pink" />

function QueueTab() {
  return (
    <Flex flexDir="column" gap={4} h="100%">
      <MockCard />
      <MockCard />
      <MockCard />
      <MockCard />
    </Flex>
  );
}

export default QueueTab;
