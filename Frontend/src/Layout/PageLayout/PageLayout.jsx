import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './components/Sidebar'

const PageLayout = () => {
  return (
    <div>
      <Flex>
        <Box w={{base:70,md:240}}>
          <Sidebar/>
        </Box>
      </Flex>
    </div>
  )
}

export default PageLayout