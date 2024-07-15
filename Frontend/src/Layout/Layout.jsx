import { Box, calc, Flex } from '@chakra-ui/react'
import React from 'react'
import PageLayout from './PageLayout/PageLayout'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Flex>
      <PageLayout />
      <Box flex={1} w={{base:"calc(100%-70px)",md:"calc(100%-240px)"}}>
        <Outlet />
      </Box>
    </Flex>
  )
}

export default Layout