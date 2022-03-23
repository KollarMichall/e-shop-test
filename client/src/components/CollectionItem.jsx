import { Box, chakra, Flex, Icon, Image, Tooltip } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi';
import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cartActions';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, imageUrl, price } = item
    return (
        <Box
            key={id}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            >
            <Image
                src={imageUrl}
                objectFit='cover'
                roundedTop="lg"
                boxSize={'400'}
            />

            <Box p="6">
                <Flex 
                onClick={() => addItem(item)}
                justifyContent="end" 
                alignContent="center">
                    <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'1.2em'}>
                        <chakra.a cursor={'pointer'} display={'flex'}>
                            <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                        </chakra.a>
                    </Tooltip>
                </Flex>

                <Flex justifyContent="space-between" alignContent="center">
                <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                        >
                        {name}
                    </Box>
                    <Box fontSize="2xl" >
                        <Box as="span" fontSize="lg">
                            $
                        </Box>
                        {price.toFixed(2)}
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}


const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)