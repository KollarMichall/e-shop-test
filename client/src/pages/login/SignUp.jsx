import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    useToast,
    Text,
    Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../../constants/baseUrl';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            name,
            email,
            password
        };

        axios.post(`${baseUrl}users/register`, user)
            .then(res => {
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            })
            .catch(err => {
                toast({
                    title: 'Something went wrong!',
                    description: "Please try again.",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            })

    }
    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input onChange={(e) => setName(e.target.value)} type="text" />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input onChange={(e) => setEmail(e.target.value)} type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    type='submit'
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'gray.500'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'gray.600',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                        </form>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link onClick={() => navigate('/login')} color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default SignUp