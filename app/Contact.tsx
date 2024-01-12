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
      await axios.post('/api/contact', data)
      toast.success("We'll be in touch soon!")
      reset()
      setTimeout(() => {
        setSubmitting(false)
      }, 2000)
    } catch (error) {
      setSubmitting(false);
      setError('An unexpeted error occured');
    }
  })

  return (
    <>
    <Toaster />
    <Box h='800' id='contact'>
          <Text fontSize='30' ml='10' pt='250' textAlign='center'>Have a question or want to work together?</Text>
          <form onSubmit={onSubmit}>
            <Stack spacing={3} align='center' pt='10'>
            <Box w='40%'>
            <Input type='text'placeholder="Name" {...register('name')} required/>
            {errors.name && <Text color='red'>{errors.name.message}</Text>}
            </Box>
            <Box w='40%'>
            <Input type='text' placeholder="Email" {...register('email')} required/>
            {errors.email && <Text color='red'>{errors.email.message}</Text>}
              </Box>
              <Box w='40%'>
              <Textarea placeholder='Your message' {...register('message')} required />
              {errors.message && <Text color='red'>{errors.message.message}</Text>}
              </Box>
              <Box>
              <Button type='submit' bgColor='#4BC970' color='white' textAlign='center'>Submit {isSubmiting && <Spinner />} </Button>
              </Box>
            </Stack>
          </form>
    </Box>
    </>
   
  )
}

export default Contact