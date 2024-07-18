import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../../assets/constantPhotos";

const PostFooter = ({username}) => {
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if (like) {
      setLike(false);
      setLikes(likes - 1);
    } else {
      setLike(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={12}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"3.5"}>
        <Box onClick={handleLike} fontSize={17} cursor={"pointer"}>
          {!like ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontWeight={600} fontSize={"small"}>
        {likes}
      </Text>
      <Text fontWeight={700} fontSize={"small"}>
        {username}{"  "}
        <Text as={"span"} fontWeight={400}>
          salam
        </Text>
      </Text>
      <Text fontSize={"small"} color={"gray"}>
        View all 17 comments
      </Text>
      <Flex alignItems={"center"} gap={2} justifyContent={"center"} w={"full"}>
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
