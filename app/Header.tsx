'use client'
import { Box, Heading, Text, Icon, Avatar, Flex, Button, Link } from "@chakra-ui/react";
import { SlArrowDown } from "react-icons/sl";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <Box textAlign='center' pt='80'>
      <Flex direction='column' align='center' gap='6'>
        {/* Professional Photo Placeholder */}
        <Avatar 
          size='2xl' 
          src='/professional-photos.jpg' 
          name='Geremy Ibobi'
          border='4px solid white'
          boxShadow='0 4px 20px rgba(0,0,0,0.3)'
        />
        
        <Box>
          <Heading color='white' size='xl' mb='4'>Hi, I&apos;m Geremy Ibobi</Heading>
          <Text fontSize='lg' color='gray.300' mb='2'>Full Stack Engineer / Systems Engineer</Text>
          <Text fontSize='md' color='gray.400' mb='6' maxW='600px' mx='auto'>
            I craft user-friendly, executable software solutions that drive business growth and enhance user experiences. 
            Passionate about clean code, scalable architecture, and delivering measurable results.
          </Text>
          
          {/* Action Buttons */}
          {/* <Flex gap='4' justify='center' wrap='wrap' mb='8'>
            <Button 
              as={Link}
              href='/resume.pdf'
              download
              leftIcon={<FaDownload />}
              colorScheme='green'
              variant='solid'
              size='md'
            >
              Download Resume
            </Button>
            <Button 
              as={Link}
              href='https://github.com/kany187'
              target='_blank'
              leftIcon={<FaGithub />}
              colorScheme='gray'
              variant='outline'
              size='md'
            >
              GitHub
            </Button>
            <Button 
              as={Link}
              href='https://www.linkedin.com/in/geremy-ibobi-51645792/'
              target='_blank'
              leftIcon={<FaLinkedin />}
              colorScheme='blue'
              variant='outline'
              size='md'
            >
              LinkedIn
            </Button>
          </Flex> */}
        </Box>
      </Flex>
      
      <Icon as={SlArrowDown} textAlign='center' mt='20' fontSize='2xl' color='gray.400'/>
    </Box>
 
    </>
  )
};

export default Header;
