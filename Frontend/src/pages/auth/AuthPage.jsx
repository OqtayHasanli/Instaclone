import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import Authform from './components/Authform'

const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                    <Box display={{ base: 'none', md: "block" }}>
                        <Image src='/auth.png' h={550} />
                    </Box>
                    <VStack spacing={4} align={"stretch"}>

                        <Authform />
                        <Box textAlign={"center"}>
                            Get the app
                        </Box>
                        <Flex gap={5} justifyContent={"center"}>
                            <Image src='/playstore.png' h={10} />
                            <Image src='/microsoft.png' h={10} />
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}

export default AuthPage