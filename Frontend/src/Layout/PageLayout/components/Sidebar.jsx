import { Avatar, Box, Flex, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../../assets/constantPhotos'
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
    const sidebarItems = [
        {
            icon: <FaHome size={25} />,
            text: "Home",
            link: "/home"
        },
        {
            icon: <SearchLogo />,
            text: "Search",
            link: "/search"
        },
        {
            icon: <NotificationsLogo />,
            text: "Notifications",
            link: "/notifications"
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
            link: "/create"
        },
        {
            icon: <Avatar size="sm" name='Oqtay' src='./profile.png' />,
            text: "Profile",
            link: "/profile"
        }
    ];

    return (
        <Box height={"100vh"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} position={"sticky"} top={0} left={0} px={{ base: 2, md: 4 }}>
            <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
                <Box as={Link} to={"/home"} pl={2} display={{ base: "none", md: "block" }} cursor={"pointer"}>
                    <InstagramLogo />
                </Box>
                <Box as={Link} to={"/home"} p={2} marginLeft={1.5} display={{ base: "block", md: "none" }} cursor={"pointer"} borderRadius={6}
                    _hover={{ bg: "whiteAlpha.200" }}
                    w={10}
                >
                    <InstagramMobileLogo />
                </Box>
                <Flex direction={'column'} gap={5}>
                    {sidebarItems.map((elem, index) => {
                        return (
                            <Box key={index} as={Link} to={elem.link} display={"flex"} alignItems={"center"} p={2} borderRadius={6} _hover={{ bg: "whiteAlpha.400" }} w={"full"}>
                                <Tooltip hasArrow label={elem.text} placement='right' openDelay={500}>
                                    <Box display={"flex"} alignItems={"center"} justifyContent={{ base: "center", md: "flex-start" }} w={10}>
                                        {elem.icon}
                                    </Box>
                                </Tooltip>
                                <Box display={{ base: "none", md: "block" }} ml={4}>
                                    {elem.text}
                                </Box>
                            </Box>
                        )
                    })}
                </Flex>
                <Box as={Link} to={"/"} marginTop={"auto"} display={"flex"} alignItems={"center"} p={2} borderRadius={6} _hover={{ bg: "whiteAlpha.400" }} w={"full"}>
                    <Tooltip hasArrow label={"Logout"} placement='right' openDelay={500}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={{ base: "center", md: "flex-start" }} w={10}>
                            <BiLogOut />
                        </Box>
                    </Tooltip>
                    <Box display={{ base: "none", md: "block" }} ml={4}>
                        Logout
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Sidebar
