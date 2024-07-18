import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Feedposts from './components/Feedposts'
import SuggestedUsers from './components/SuggestedUsers'

const Home = () => {
  return (
    <Container maxW={"cotainer.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} >
          <Feedposts/>
        </Box>
        <Box flex={3} marginRight={20}
        display={{base:"none",lg:"block"}}
        maxW={300} >
          <SuggestedUsers/>
        </Box>
      </Flex>
    </Container>
  )
}

export default Home