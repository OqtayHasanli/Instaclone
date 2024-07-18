import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <Text fontSize={12} fontWeight="bold" color="gray.500">
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight="bold" _hover={{ color: "gray.400" }} cursor="pointer">
          See all
        </Text>
      </Flex>
      <SuggestedUser name="kamal" followers="125" avatar="https://www.instagram.com/p/C9FkpjwNZkK/?img_index=1"/>
      <SuggestedUser name="vusal" followers="101" avatar="https://www.instagram.com/p/C9jsp_dInqa/" />
      <SuggestedUser name="Adam" followers="5" avatar="https://www.instagram.com/p/C8DUDGXPyDn/" />
      <Box fontSize={12} color="gray.500" mt={5}>
        © 2023 Built By{" "}
        <Link href="https://github.com/OqtayHasanli" color={"blue.500"} _hover={{textDecoration:"none"}} target="_blank" >
          OqtayHasanli
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
