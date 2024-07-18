import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const Feedposts = () => {
  const [Isloading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1500);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {Isloading &&
        [0, 1, 2, 3].map((_, index) => {
          return (
            <VStack key={index} gap={4} mb={10} alignItems={"flex-start"}>
              <Flex gap={2}>
                <SkeletonCircle size="10" />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton height="20px" w={"200px"} />
                  <Skeleton height="20px" w={"120px"} />
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={500}></Box>
              </Skeleton>
            </VStack>
          );
        })}
      {!Isloading && (
        <>
          <FeedPost
            img="./img1.png"
            username="Oqtay Hasanli"
            avatar="./img1.png"
          />
          <FeedPost img="./img2.png" username="jhon cena" avatar="./img2.png" />
          <FeedPost img="./img3.png" username="Conor" avatar="./img3.png" />
          <FeedPost img="./img4.png" username="James" avatar="./img4.png" />
        </>
      )}
    </Container>
  );
};

export default Feedposts;
