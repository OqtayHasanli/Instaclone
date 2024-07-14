import { Box, Button, Image, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Authform = () => {
    const [isLogin, setisLogin] = useState(true)
    return (
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src='/logo.png' h={20} cursor={"pointer"} />
                <Input placeholder='Email' fontSize={14} type='email'/>
                <Input placeholder='Password' fontSize={14} type='password'/>
                {!isLogin?(
                    <Input placeholder='Password' fontSize={14} type='Confirm password'/>
                ):null}
                <Button>
                {!isLogin? "Login" :"Sign Up"}
                
                
                </Button>
            </VStack>
        </Box>

    )
}

export default Authform