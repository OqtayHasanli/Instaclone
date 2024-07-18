import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollow, setIsFollow] = useState(false);
  
  return (
    <Flex justifyContent="space-between" alignItems="center" w="full">
      <Flex alignItems="center" gap={2}>
        <Avatar src={avatar} name={name} size="md" />
        <VStack spacing={1} alignItems="flex-start">
          <Box fontSize={13} fontWeight="bold">
            {name}
          </Box>
          <Box fontSize={11} color="gray.500">
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg="transparent"
        p={0}
        height="max-content"
        fontWeight="medium"
        _hover={{ color: "white" }}
        cursor="pointer"
        onClick={() => setIsFollow(!isFollow)}
        color={isFollow ? "white" :"blue.400" }
      >
        {isFollow ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
