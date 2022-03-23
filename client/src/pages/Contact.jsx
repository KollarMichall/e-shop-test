import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        window.open(`mailto:eccomerceapp.example@.com?subject=${name}&body=${message} ${email}`)
    }
    return (
       
        <Box
            borderRadius="lg"
            m={{ base: 5 }}
            p={{ base: 5 }}>
            <Box>
                <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
                    <Heading
                        fontSize={{
                            base: '4xl',
                            md: '5xl',
                        }}>
                        Get in Touch
                    </Heading>

                    <Stack
                        spacing={{ base: 4, md: 8, lg: 20 }}
                        direction={{ base: 'column', md: 'row' }}>
                        <Stack
                            align="center"
                            justify="space-around"
                            direction={{ base: 'row', md: 'column' }}>

                            <Link href="#">
                                <IconButton
                                    aria-label="github"
                                    variant="ghost"
                                    size="lg"
                                    fontSize="3xl"
                                    icon={<BsGithub />}
                                    _hover={{
                                        bg: 'blue.500',
                                        color: useColorModeValue('white', 'gray.700'),
                                    }}
                                    isRound
                                />
                            </Link>

                            <Link href="#">
                                <IconButton
                                    aria-label="twitter"
                                    variant="ghost"
                                    size="lg"
                                    icon={<BsTwitter size="28px" />}
                                    _hover={{
                                        bg: 'blue.500',
                                        color: useColorModeValue('white', 'gray.700'),
                                    }}
                                    isRound
                                />
                            </Link>

                            <Link href="#">
                                <IconButton
                                    aria-label="linkedin"
                                    variant="ghost"
                                    size="lg"
                                    icon={<BsLinkedin size="28px" />}
                                    _hover={{
                                        bg: 'blue.500',
                                        color: useColorModeValue('white', 'gray.700'),
                                    }}
                                    isRound
                                />
                            </Link>
                        </Stack>

                        <Box
                            bg={useColorModeValue('white', 'gray.700')}
                            borderRadius="lg"
                            p={8}
                            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                            shadow="base">
                            <VStack spacing={5}>
                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Your Name" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<MdOutlineEmail />} />
                                        <Input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Message</FormLabel>

                                    <Textarea
                                        onChange={(e) => setMessage(e.target.value)}
                                        name="message"
                                        placeholder="Your Message"
                                        rows={6}
                                        resize="none"
                                    />
                                </FormControl>

                                <Button
                                    onClick={handleSubmit}
                                    colorScheme="blue"
                                    bg="blue.400"
                                    color="white"
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    isFullWidth>
                                    Send Message
                                </Button>
                            </VStack>
                        </Box>
                    </Stack>
                </VStack>
            </Box>
        </Box>
    );
}