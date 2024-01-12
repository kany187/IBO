'use client'
import { Box, Button, Card, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Projects = () => {

    const projects = [
        {img: '/coe.png', h1: 'Congo Estate', text: 'NextJS / TypeScript / MySql', link: 'https://congo-estate-app-nextjs.vercel.app'},
        {img: '/CRM.png', h1: 'Hospital Management System', text: 'React / TypeScript / MongoDB', link: 'https://client-hms.vercel.app'},

        {img: '/API.png', h1: 'Receipt Processor API', text: 'Node.js / Docker', link: 'https://github.com/kany187/Receipt-Processor'},
        {img: '/logo.jpg', h1: 'Congo Estate', text: 'React Native', link: 'https://github.com/kany187/CongoEstate'},
        {img: '/swk2.png', h1: 'SOWORK', text: 'React Native', link: 'https://github.com/kany187/SOWORK-MobileApp'},
      ]

  return (
    <Box h={{ sm: '1000px', md: '860px'}}  borderWidth='10px' borderColor='black' id='work'>
        <Text fontSize='30' ml='10' pt='10'>Projects</Text>
        <SimpleGrid columns={4} spacing={1}
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        pt='125'
        >
            {projects.map((project) => (
 <Card   
 key={project.h1}
 maxW="lg"
 position="relative"
 margin="1%"
 marginBottom="2em"
 >
       <Image src={project.img} alt='congo-estate' width='200' height='200'  style={{
        maxWidth: '100%',
        transformOrigin: '0 0',
        transition: 'transform 0.5s',
      }}/>
       <Box color="#fff"
   background="#345d88"
   opacity={0}
   transition="opacity .5s"
   position="absolute"
   top="0"
   right="0"
   left="0"
   bottom="0"
   display="flex"
   flexDirection="column"
   justifyContent="center"
   alignItems="center"
   backgroundColor="rgba(0,0,0, .5)"
//    paddingLeft="2px"
//    paddingRight="2px"
   _hover={{ opacity: 1 }}>
           <Text>{project.h1}</Text>
           <Text>{project.text}</Text>
           <Link href={project.link}>
           <Button mt='5' fontWeight='700' 
           borderRadius='100%'
            border='1px' 
            color='black'
             bgColor='#BDBEB8'
             _hover={{ bgColor: 'white'}}
             >View</Button>
           </Link>
    
       </Box>
   </Card>
            ))}
        </SimpleGrid>
       
    </Box>
  )
}

export default Projects