import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = ({username,img,avatar}) => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} my={2} w={"full"}>
            <Flex alignItems={"center"} gap={2} cursor={'pointer'} >
                <Avatar src={avatar} />
                <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                    {username}
                    <Box color={"gray.500"}>
                        1w
                    </Box>
                </Flex>

            </Flex>
            <Box cursor={"pointer"}>
                <Text transition={"0.2s ease-in-out"} fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}}>Unfollow</Text>
            </Box>
        </Flex>
    )
}

export default PostHeader