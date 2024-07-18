import { Avatar, AvatarGroup, Flex } from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignItems={"center"}
        mx={"auto"}
      >
        <Avatar />
      </AvatarGroup>
    </Flex>
  );
};

export default ProfileHeader;
