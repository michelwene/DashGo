import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Michel Wene</Text>
        <Text color="gray.300" fontSize="small">
          michelwene@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Michel Wene"
        src="https://github.com/michelwene.png"
      />
    </Flex>
  );
}
