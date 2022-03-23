import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Container,
    Tfoot,
    Image,
    Text,
    Flex,
} from '@chakra-ui/react'
import { connect, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelector'
import { addItem, clearItemFromCart, removeItem } from '../redux/cart/cartActions'
import StripeCheckoutButton from '../components/StripeCheckoutButton'


const Checkout = (props) => {
    const dispatch = useDispatch();
    return (
        <Container p={10} maxW='full' centerContent>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Product</Th>
                        <Th>Description</Th>
                        <Th>Quantity</Th>
                        <Th>Price</Th>
                        <Th>Remove</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.cartItems.map(item =>
                        <Tr key={item.id}>
                            <Td><Image
                                boxSize={'100px'}
                                objectFit={'cover'}
                                src={item.imageUrl} />
                            </Td>
                            <Td>{item.name}</Td>
                            <Td>
                                <Flex>
                                <Text cursor={'pointer'} mr={2} onClick={() => dispatch(removeItem(item))}>
                                &#10094; 
                                </Text>
                                {item.quantity} 
                                <Text cursor={'pointer'} ml={2} onClick={() => dispatch(addItem(item))}>
                                &#10095; 
                                </Text>
                                </Flex>
                                
                                </Td>
                            <Td>${item.price}</Td>
                            <Td><Text onClick={() => dispatch(clearItemFromCart(item))} pl={5} cursor='pointer'>&#10005;</Text></Td>
                        </Tr>
                    )}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                        <Th><StripeCheckoutButton price={props.total}/></Th>
                        <Th fontSize={15}>TOTAL: ${props.total}</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </Container>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)