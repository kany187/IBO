'use client'
import { Box, Button, Card, SimpleGrid, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { trackProjectClick } from '../lib/gtag'


const Projects = () => {

    const projects = [
        {
          img: '/coe.png', 
          h1: 'Congo Estate', 
          text: 'React / Django / PostgreSQL', 
          link: 'https://www.congo-estate.app/',
          github: 'https://github.com/kany187/CongoEstate',
          description: 'Full-stack real estate platform with advanced search, property management, and user authentication.',
          challenge: 'Built scalable property management system handling 1000+ listings with complex search filters.',
          result: 'Reduced property search time by 60% and increased user engagement by 40%.',
          technologies: ['React', 'Django', 'PostgreSQL', 'AWS', 'Docker']
        },
        {
          img: '/CRM.png', 
          h1: 'Hospital Management System', 
          text: 'React / TypeScript / MongoDB', 
          link: 'https://client-hms.vercel.app',
          github: 'https://github.com/kany187/HMS',
          description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and billing.',
          challenge: 'Designed secure patient data management with HIPAA compliance and real-time updates.',
          result: 'Streamlined hospital operations, reducing patient wait times by 35% and improving data accuracy by 90%.',
          technologies: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'JWT']
        },
        {
          img: '/API.png', 
          h1: 'Receipt Processor API', 
          text: 'Node.js / Docker', 
          link: 'https://github.com/kany187/Receipt-Processor-API',
          github: 'https://github.com/kany187/Receipt-Processor-API',
          description: 'RESTful API for processing and analyzing receipt data with OCR integration and expense categorization.',
          challenge: 'Implemented OCR technology to extract data from various receipt formats with 95% accuracy.',
          result: 'Processed 10,000+ receipts with 95% accuracy and reduced manual data entry by 80%.',
          technologies: ['Node.js', 'Docker', 'OCR', 'Express', 'MongoDB']
        },
        {
          img: '/swk2.png', 
          h1: 'SOWORK', 
          text: 'React Native', 
          link: 'https://github.com/kany187/SOWORK-MobileApp',
          github: 'https://github.com/kany187/SOWORK-MobileApp',
          description: 'Mobile application for remote work management with task tracking, team collaboration, and productivity analytics.',
          challenge: 'Created cross-platform mobile app with real-time synchronization and offline capabilities.',
          result: 'Improved team productivity by 25% and reduced project completion time by 30%.',
          technologies: ['React Native', 'Firebase', 'Redux', 'Expo']
        }
      ]

  return (
    <Box h={{ base: '2200px', sm: '2000px', md: '1100px', lg: '1000px', xl: '1100px'}}  borderWidth='10px' borderColor='black' id='work'>
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
 maxW="320px"
 minW="280px"
 w="100%"
 h="380px"
 position="relative"
 margin="1%"
 marginBottom="2em"
 >
       <Image src={project.img} alt='congo-estate' width='320' height='200'  style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
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
   backgroundColor="rgba(0,0,0, .8)"
   padding="24px"
   _hover={{ opacity: 1 }}>
           <Text fontSize="xl" fontWeight="bold" mb="3">{project.h1}</Text>
           <Text fontSize="md" mb="4" textAlign="center" lineHeight="1.4">{project.description}</Text>
           <Text fontSize="sm" mb="4" color="#4BC970" textAlign="center" fontWeight="medium">{project.result}</Text>
           <Flex gap="2" mb="5" wrap="wrap" justify="center">
             {project.technologies.slice(0, 3).map((tech, index) => (
               <Text key={index} fontSize="sm" bg="rgba(255,255,255,0.2)" px="3" py="1" borderRadius="md">
                 {tech}
               </Text>
             ))}
           </Flex>
           <Flex gap="3">
             <Link href={project.link} target="_blank" onClick={() => trackProjectClick(project.h1)}>
               <Button size="md" colorScheme="green" variant="solid" px="6">
                 Live Demo
               </Button>
             </Link>
             <Link href={project.github} target="_blank">
               <Button size="md" colorScheme="gray" variant="outline" px="6">
                 GitHub
               </Button>
             </Link>
           </Flex>
       </Box>
   </Card>
            ))}
        </SimpleGrid>
       
    </Box>
  )
}

export default Projects