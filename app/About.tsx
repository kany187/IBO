'use client';
import { Box, Card, CardFooter, Flex, Heading, Icon, Progress, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiPencilRuler } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";
import { IoColorPaletteOutline } from "react-icons/io5";

const About = () => {
  return (
    <Box pt='10'w='full' h={{ base: '1350px', sm: '1350px', md: '860px'}} color='gray.500' bgColor='#0A0E19' id='about'>
        <Heading size='sm'textAlign='center' pt='5'>Some keys aspects that define my approach to software development.</Heading>
        <Flex pt='10'  flexDirection={['row', 'row', 'row']}  justifyContent={['space-around', 'space-around', 'space-around']}>
            <Flex flexDirection={['column', 'column', 'row']} justifyContent={['space-around', 'space-around', 'space-around']}>
            <Box textAlign='center'>
                <Icon as={FaMagnifyingGlass} boxSize={{ xs: '5'}} />
                <Heading size={{ xs: '10', md: 'md'}} textAlign='center'>Clean code</Heading>
                <Text textAlign='center'>Because cleaner code is easier to iterate on.</Text>
            </Box>
            <Box textAlign='center' pt={{sm: '5',md: '0'}} ml={{md: '5'}}>
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
            <Box textAlign='center' pt={{sm: '5', md: '0'}} ml={{md: '5'}}>
                <Icon as={IoColorPaletteOutline} boxSize={{ xs: '5'}}/>
                <Heading  size={{ xs: '10', md: 'md'}} textAlign='center'>UI</Heading>
                <Text textAlign='center'>Because a captivating and simple UI is paramount.</Text>
            </Box>
          </Flex>
         
        </Flex>
  
        <Box ml='5' pt='20'  >
                
        <Flex gap='14' alignItems='center'  justifyContent={['center', 'center', 'flex-start']}>
        <Text>CSS3</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={90} height='20px' colorScheme='twitter'/>
        </Box>
        </Flex>
       
      
        <Flex gap='12' alignItems='center' justifyContent={['center', 'center', 'flex-start']}>
        <Text>HTML5</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={90} colorScheme='twitter' height='20px' />
        </Box>
        </Flex>
        <Flex gap='14' alignItems='center' justifyContent={['center', 'center', 'flex-start']} >
        <Text>React</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={90} height='20px' colorScheme='twitter'/>
        </Box>
        </Flex>
        <Flex gap={{base: '8', sm: '6'}} alignItems='center' justifyContent={['center', 'center', 'center']}>
        <Text>Javascript</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={80} height='20px' colorScheme='twitter'/>
        </Box>
        </Flex>
        <Flex gap={{base: '7', sm: '5'}}  alignItems='center'  justifyContent={['center', 'center', 'center']}>
        <Text>TypeScript</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={80} height='20px' colorScheme='twitter'/>
        </Box>
        </Flex>
        <Flex gap={{base: '12', sm: '10'}}  alignItems='center'  justifyContent={['center', 'center', 'center']} >
        <Text>NextJS</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={80} height='20px' colorScheme='twitter'/>
        </Box>
        </Flex>
        <Flex gap={{base: '12', sm: '10'}}  alignItems='center'  justifyContent={['center', 'center', 'center']}>
        <Text>Node.js</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={80} height='20px' colorScheme='twitter'/>
        </Box>
        </Flex>
        <Flex gap={{base: '8', sm: '12'}}  alignItems='center'  justifyContent={['center', 'center', 'flex-end']} mr='5'>
        <Text>Python</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={60} height='20px' colorScheme='twitter'/>
        </Box>
        </Flex>
        <Flex gap={{base: '12', sm: '12'}}  alignItems='center' justifyContent={['center', 'center', 'flex-end']}  mr='5'>
        <Text>Java</Text>
        <Box style={{ width: '20%' }} >
        <Progress value={50} height='20px' colorScheme='twitter'/>
        </Box>
        </Flex>
        </Box>

        <Heading size='sm' pt='10' textAlign='center'>Where I&apos;ve Worked</Heading>
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