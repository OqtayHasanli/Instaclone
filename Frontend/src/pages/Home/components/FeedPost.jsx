import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'


const FeedPost = ({img,username,avatar}) => {
  return (
    <>
      <PostHeader img={img} username={username} avatar={avatar}/>
      <Box my={2} overflow={"hidden"} borderRadius={4}>
        <Image src={img} alt={username}/>
      </Box>
      <PostFooter username={username}/>
    </>
  )
}

export default FeedPost