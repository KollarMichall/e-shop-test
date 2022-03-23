import { Flex, Image, Text } from '@chakra-ui/react'
import React, { memo } from 'react'

const CartItem = ({ item }) => {
    const { imageUrl, price, name, quantity } = item
    return (
        <Flex mb={5} h={'80'}>
            <Image
                src={imageUrl}
                boxSize={'100px'}
                objectFit={'cover'}
            />
            <Flex w={'70%'} direction={'column'} alignItems={'flex-start'}  p={5}>
                <Text color={'black'}>
                    {name}
                </Text>
                <Text color={'black'}>
                    {quantity} x ${price}
                </Text>
            </Flex>
        </Flex>
    )
}

export default memo(CartItem)