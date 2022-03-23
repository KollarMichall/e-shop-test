import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import CartItem from './CartItem'

const CartDropdown = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <Flex
            w={'250'}
            h={'350'}
            direction={'column'}
            p={5}
            pos={'absolute'}
            top={20}
            right={5}
            zIndex={1}
            bgColor={'white'}
            border={'1px'}
            borderColor={'black'}
        >
            <Flex h={'240'} direction={'column'} overflow={'scroll'}>
                {props.cartItems.length === 0 ? <Text m={'auto'} textAlign={'center'} color={'black'}>Your cart is empty!</Text> : props.cartItems?.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
            </Flex>
            <Button
                onClick={() => {
                    navigate('/checkout')
                    dispatch(toggleCartHidden())
                }}
                bg={'gray.500'}
                color={'white'}
                _hover={{
                    bg: 'gray.600'
                }} mt={'auto'}>GO TO CHECKOUT</Button>
        </Flex>
    )
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,

})


export default connect(mapStateToProps)(CartDropdown)