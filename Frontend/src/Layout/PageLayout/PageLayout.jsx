import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./components/Sidebar";

const PageLayout = () => {
  return (
    <Flex position={"sticky"}>
      <Box w={{ base: 70, md: 240 }}>
        <Sidebar />
      </Box>
    </Flex>
  );
};

export default PageLayout;
