import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tlight" w="64">
      Dashgo
      <Text as="span" color="pink" ml="1">
        .
      </Text>
    </Text>
  );
}
