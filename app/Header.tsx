'use client'
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
  return (
    <>
    <Box textAlign='center' pt='80'>
    <Heading color='white'>Hi, I&apos;m Geremy Ibobi.</Heading>
      <Text pt='5'>Full Stack Engineer / Systems Engineer.</Text>
      <Text pt='5'>I craft user-friendly, executable software for society.</Text>
      <Icon as={SlArrowDown} textAlign='center' mt='80'/>
    </Box>
 
    </>
  )
};

export default Header;
