import { Flex } from '@chakra-ui/react'
import React from 'react'
import PageLayout from './PageLayout/PageLayout'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <Flex>
    <PageLayout/>
    <Outlet/>
   </Flex>
  )
}

export default Layout