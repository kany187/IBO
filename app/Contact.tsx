'use client';
import { Box, Button, Input, Stack, Text, Textarea } from '@chakra-ui/react';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';
import { contactSchema } from './ValidationSchema';
import Spinner from './components/Spinner';
import { trackContactForm } from '../lib/gtag';

type ContactForm = z.infer<typeof contactSchema>

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors} } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });
  const [error, setError] = useState('');
  const [isSubmiting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data : ContactForm) => {
    try {
      setSubmitting(true)
      setError('') // Clear any previous errors
      await axios.post('/api/contact', data)
      toast.success("I'll be in touch soon!")
      trackContactForm() // Track form submission
      reset() // Clear all form fields
      setSubmitting(false) // Reset submitting state immediately
    } catch (error) {
      setSubmitting(false);
      setError('An unexpected error occurred');
    }
  })

  return (
    <>
    <Toaster />
    <Box 
      h={{ base: '1000px', sm: '950px', md: '900px', lg: '850px' }} 
      id='contact'
      bgColor='#0A0E19'
      color='white'
      px={{ base: '4', sm: '6', md: '8', lg: '12' }}
    >
      <Box 
        maxW={{ base: '100%', sm: '600px', md: '700px', lg: '800px' }}
        mx='auto'
        pt={{ base: '200px', sm: '220px', md: '240px', lg: '250px' }}
      >
        <Text 
          fontSize={{ base: '18px', sm: '24px', md: '28px', lg: '32px' }}
          textAlign='center'
          mb={{ base: '8', sm: '10', md: '12' }}
          fontWeight='semibold'
          lineHeight='1.2'
        >
          Have a question or want to work together?
        </Text>
        
        <form onSubmit={onSubmit} noValidate>
          <Stack 
            spacing={{ base: '4', sm: '5', md: '6' }} 
            align='center' 
            pt={{ base: '6', sm: '8', md: '10' }}
          >
            <Box w={{ base: '90%', sm: '80%', md: '60%', lg: '50%' }}>
              <Input 
                type='text'
                placeholder="Name" 
                {...register('name')} 
                required
                size={{ base: 'md', sm: 'lg' }}
                fontSize={{ base: '14px', sm: '16px' }}
                _placeholder={{ color: 'gray.400' }}
                bg='white'
                color='black'
                _focus={{ borderColor: '#4BC970', boxShadow: '0 0 0 1px #4BC970' }}
              />
              {errors.name && <Text color='red' fontSize={{ base: '12px', sm: '14px' }} mt='1'>{errors.name.message}</Text>}
            </Box>
            
            <Box w={{ base: '90%', sm: '80%', md: '60%', lg: '50%' }}>
              <Input 
                type='email'
                placeholder="Email" 
                {...register('email')} 
                required
                size={{ base: 'md', sm: 'lg' }}
                fontSize={{ base: '14px', sm: '16px' }}
                _placeholder={{ color: 'gray.400' }}
                bg='white'
                color='black'
                _focus={{ borderColor: '#4BC970', boxShadow: '0 0 0 1px #4BC970' }}
              />
              {errors.email && <Text color='red' fontSize={{ base: '12px', sm: '14px' }} mt='1'>{errors.email.message}</Text>}
            </Box>
            
            <Box w={{ base: '90%', sm: '80%', md: '60%', lg: '50%' }}>
              <Textarea 
                placeholder='Your message' 
                {...register('message')} 
                required
                size={{ base: 'md', sm: 'lg' }}
                fontSize={{ base: '14px', sm: '16px' }}
                _placeholder={{ color: 'gray.400' }}
                bg='white'
                color='black'
                _focus={{ borderColor: '#4BC970', boxShadow: '0 0 0 1px #4BC970' }}
                minH={{ base: '120px', sm: '140px', md: '160px' }}
                resize='vertical'
              />
              {errors.message && <Text color='red' fontSize={{ base: '12px', sm: '14px' }} mt='1'>{errors.message.message}</Text>}
            </Box>
            
            <Box>
              <Button 
                type='submit' 
                bgColor='#4BC970' 
                color='white' 
                textAlign='center'
                size={{ base: 'md', sm: 'lg' }}
                fontSize={{ base: '14px', sm: '16px' }}
                px={{ base: '6', sm: '8' }}
                py={{ base: '4', sm: '6' }}
                _hover={{ bgColor: '#3BA85A', transform: 'translateY(-1px)' }}
                _active={{ transform: 'translateY(0px)' }}
                transition='all 0.2s ease-in-out'
                isLoading={isSubmiting}
                loadingText='Sending...'
                disabled={isSubmiting}
              >
                {isSubmiting ? 'Sending...' : 'Submit'}
              </Button>
              {error && <Text color='red' mt='2' fontSize={{ base: '12px', sm: '14px' }} textAlign='center'>{error}</Text>}
            </Box>
          </Stack>
        </form>
      </Box>
    </Box>
    </>
   
  )
}

export default Contact