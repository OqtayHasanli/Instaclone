import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Authform = () => {
    const [isLogin, setisLogin] = useState(true)
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })


    const handleAuth = () => {

        navigate('/home')


    }



return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src='/logo.png' h={20} cursor={"pointer"} />
                <Input placeholder='Email' fontSize={14} type='email'
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    value={inputs.email}
                />
                <Input placeholder='Password' fontSize={14} type='password'
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    value={inputs.password}
                />
                {!isLogin ? (
                    <Input placeholder='Password' fontSize={14} type='Confirm password'
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        value={inputs.confirmPassword}
                    />
                ) : null}
                <Button w={"full"} colorScheme='blue' fontSize={14} onClick={handleAuth}>
                    {isLogin ? "Log in" : "Sign Up"}
                </Button>
                <Flex alignItems={"center"} justifyContent={"center"} margin={4} gap={1} w={"full"}>
                    <Box flex={2} height={0.5} bg={"gray.400"} />
                    <Text>
                        OR
                    </Text>
                    <Box flex={2} height={0.5} bg={"gray.400"} />

                </Flex>
                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src='/google.png' w={5} />
                    <Text mx={2} color={"blue.500"}>Log In with Google</Text>
                </Flex>
            </VStack>
        </Box>
        <Box border={"1px gray solid"} borderRadius={4} padding={5}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogin ? "Don't have an account?" : "Already have an account"}
                </Box>
                <Box onClick={() => setisLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                    {isLogin ? " Sign up" : "Log in"}
                </Box>
            </Flex>

        </Box>
    </>
)
}

export default Authform