import { Avatar, Box, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="./profilepic.png" name="Oqtay Hasanli" size={"lg"} />
        <Box fontSize={12} fontWeight={"bold"}>
          OqtayHasanli
        </Box>
      </Flex>
      <Link as={RouterLink} to="/" fontSize="14px" fontWeight="medium" color="blue.400" textDecoration="none" _hover={{ textDecoration: "none",color:"lightblue" }} cursor="pointer">
        Log Out
      </Link>
    
    </Flex>
  );
};

export default SuggestedHeader;
