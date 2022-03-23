import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Link,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Spacer,
    Button,
    useColorMode,

} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';

import { ReactComponent as Logo } from '../imgs/logo.svg'
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/userActions';
import CartIcon from './cart/cart-icon/CartIcon';
import CartDropdown from './cart/CartDropdown';

const Header = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} align='center' justify={{ base: 'center', md: 'start' }}>
                    <Link
                        href='/'
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        <Logo />
                    </Link>
                    <Spacer />
                    <Flex display={{ base: 'none', md: 'flex' }} >


                        <DesktopNav />
                    </Flex>
                </Flex>
                {props.user ? (
                    <Link
                        onClick={() => props.setUser(null)}
                        pl={2}
                        display={{ base: 'flex', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}>
                        SIGN OUT
                    </Link>
                ) : (
                    <Link
                        pl={3}
                        pr={5}
                        display={{ base: 'flex', md: 'inline-flex' }}
                        href={'/signup'}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                        SIGN IN
                    </Link>
                )}

                <Button mr={2} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <CartIcon />
                {props.toggleHidden &&
                    <CartDropdown />
                }
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction={'row'} >
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};



const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'SHOP',
        href: '/shop',
    },
    {
        label: 'CONTACT',
        href: '/contact',
    },

];
const mapStateToProps = (state) => ({
    user: state.user.currentUser,
    toggleHidden: state.cart.hidden
})


const mapDispatchToProps = (dispatch) => ({
    setUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)