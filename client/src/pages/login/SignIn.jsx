import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    useToast,
    Text,
    Link,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants/baseUrl';
import { setCurrentUser } from '../../redux/user/userActions';

const SignIn = (props) => {
    const toast = useToast();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        };

        axios.post(`${baseUrl}users/login`, user)
            .then(res => {
                toast({
                    title: 'Sign In successfuly.',
                    description: "",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                props.setUser(res.data)
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
                    <Heading fontSize={'4xl'}>Sign in </Heading>

                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="emailSignin">
                                <FormLabel>Email address</FormLabel>
                                <Input onChange={(e) => setEmail(e.target.value)} autoFocus type="email" />
                            </FormControl>
                            <FormControl id="passwordSignin">
                                <FormLabel>Password</FormLabel>
                                <Input onChange={(e) => setPassword(e.target.value)} type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    mt={2}
                                    type='submit'
                                    bg={'gray.500'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'gray.600',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </form>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Don't have an account?<Link onClick={() => navigate('/signup')} color={'blue.400'}>Sign Up</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(SignIn)