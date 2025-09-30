'use client';
import { Box, Card, CardFooter, Flex, Heading, Icon, Progress, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiPencilRuler } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";
import { IoColorPaletteOutline } from "react-icons/io5";

const About = () => {
  return (
    <Box pt='10' w='full' h={{ base: '1800px', sm: '1700px', md: '1200px', lg: '1100px'}} color='gray.500' bgColor='#0A0E19' id='about'>
        {/* <Heading size='lg' textAlign='center' pt='5' color='white' mb='8'>
          My Story & Approach to Software Development
        </Heading> */}
        {/* <Box maxW='800px' mx='auto' px='4' mb='12'>
          <Text fontSize='lg' color='gray.300' textAlign='center' lineHeight='1.6' mb='6'>
            With over 3 years of experience in full-stack development, I&apos;ve helped companies 
            scale their digital infrastructure and improve user experiences. My journey began at 
            Frostburg State University, where I developed a passion for solving complex problems 
            through elegant code.
          </Text>
          <Text fontSize='md' color='gray.400' textAlign='center' lineHeight='1.6'>
            I believe in writing code that not only works but tells a story - clean, maintainable, 
            and scalable solutions that stand the test of time. When I&apos;m not coding, you&apos;ll find me 
            exploring new technologies, contributing to open-source projects, or mentoring fellow developers.
          </Text>
        </Box> */}
        {/* <Heading size='md' textAlign='center' pt='5' color='white' mb='8'>
          Key Principles That Drive My Development Process
        </Heading> */}
        <Flex pt='10'  flexDirection={['row', 'row', 'row']}  justifyContent={['space-around', 'space-around', 'space-around']}>
            <Flex flexDirection={['column', 'column', 'row']} justifyContent={['space-around', 'space-around', 'space-around']}>
            <Box textAlign='center'>
                <Icon as={FaMagnifyingGlass} boxSize={{ xs: '5'}} />
                <Heading size={{ xs: '10', md: 'md'}} textAlign='center'>Clean code</Heading>
                <Text textAlign='center'>Because cleaner code is easier to iterate on.</Text>
            </Box>
            <Box textAlign='center' pt={{base: '50', sm: '5',md: '0'}} ml={{md: '5'}}>
                <Icon as={GoStopwatch} boxSize={{ xs: '5'}}/>
                <Heading  size={{ xs: '10', md: 'md'}} textAlign='center'>Execution</Heading>
                <Text textAlign='center'>Code that not only runs but sprints.</Text>
            </Box>
            </Flex>
          <Flex  flexDirection={['column', 'column', 'row']} justifyContent={['space-around', 'space-around', 'space-around']}>
          <Box textAlign='center'>
                <Icon as={GiPencilRuler} boxSize={{ xs: '5'}}/>
                <Heading  size={{ xs: '10', md: 'md'}} textAlign='center'>Correctness</Heading>
                <Text textAlign='center'>The program meets user expectations seamlessly.</Text>
            </Box>
            <Box textAlign='center' pt={{base: '50', sm: '5', md: '0'}} ml={{md: '5'}}>
                <Icon as={IoColorPaletteOutline} boxSize={{ xs: '5'}}/>
                <Heading  size={{ xs: '10', md: 'md'}} textAlign='center'>UI</Heading>
                <Text textAlign='center'>Because a captivating and simple UI is paramount.</Text>
            </Box>
          </Flex>
         
        </Flex>
  
        <Box ml='5' pt='20' pr='5'>
          <Heading size='sm' textAlign='center' mb='8' color='white'>Technical Skills</Heading>
          
          <Box
            display='grid'
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            }}
            gap={{ base: '4', md: '6', lg: '8' }}
            maxW={{ base: '400px', md: '800px', lg: '1200px' }}
            mx='auto'
            px={{ base: '4', md: '6' }}
          >
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>CSS3</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={90} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>HTML5</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={90} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>React</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={90} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>JavaScript</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={70} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>TypeScript</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={70} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>NextJS</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={70} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>Node.js</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={70} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>Python</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={70} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>Java</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={60} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>Docker</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={75} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>Cloud</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={70} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>Git</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={90} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>SQL</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={80} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>AI</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={65} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
            
            <Flex gap='4' alignItems='center' justifyContent='space-between' w='100%'>
              <Text minW='80px' textAlign='left' color='white' fontSize={{ base: 'sm', md: 'md' }}>ML</Text>
              <Box flex='1' maxW='150px'>
                <Progress value={60} height='16px' colorScheme='cyan' borderRadius='8px'/>
              </Box>
            </Flex>
          </Box>
        </Box>



        <Heading size='md' pt='10' textAlign='center' color='white'>Where I&apos;ve Worked</Heading>
       <Flex flexDirection={['column', 'column', 'row']} gap={{base: '10', sm: '5'}} justifyContent='space-around' alignItems={['center', 'center']} pt={{base: '30px', sm: '30px'}}>

            <Card maxW='150' h='200' borderRadius="10px" overflow="hidden" >  
                <Image src='/integrasys.jpeg' alt='fsu' width='150' height='200' objectFit='cover' />
         
                <CardFooter pt='3' ml='6'>
                <Text textAlign='center' fontSize='13'>Integrasys</Text>
                </CardFooter>
           
            </Card>
            <Card maxW='200' h='140' borderRadius="10px" overflow="hidden" mt={{ sm: '0', md: '10'}}>
                <Image src='/einc.jpeg' alt='einc' width='200' height='200' objectFit='cover'/>
                <CardFooter pt='1' ml='16'>
                <Text fontSize='13'>EINC</Text>
                </CardFooter>

            </Card>
            <Card maxW='150' h='200' borderRadius="10px"   overflow="hidden">
                <Image src='/fsu.png' alt='fsu' width='200' height='300' objectFit='cover' />
                <CardFooter pt='1'>
                <Text fontSize='13' textAlign='center'>Frostburg State University</Text>
                </CardFooter>
            </Card>
        </Flex>     
    </Box>

  )
}

export default About