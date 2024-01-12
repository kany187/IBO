import { Box, Divider, Flex, Icon, IconButton, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { CiLinkedin } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Box h='50px'>
        <Divider />
        <Flex align='center' justifyContent='space-between'  pt='5'>
        <Text fontSize='12' ml='5'>
            Copyright &copy; 2024 Geremy Ibobi
          </Text> 
          <Link href='https://www.linkedin.com/in/geremy-ibobi-51645792/'>
          <IconButton
              mr='5'
              bgColor='white'
              color='#4BC970'
              aria-label="linkedin"
              icon={<FaLinkedinIn />}
              boxSize='5'
              size='3'
            />
          </Link>
      
        </Flex>
          
    </Box>
  )
}

export default Footer