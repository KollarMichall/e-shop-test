import { Box, Flex, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, column }) => {
    const navigate = useNavigate()
    return (
        <GridItem colSpan={column}>
                <Box
                    onClick={() => navigate(`shop/${title}`)}
                    minW={'30%'}
                    height='400'
                    position={'relative'}
                    bgImage={imageUrl}
                    bgSize='cover'
                    bgPosition={'center'}
                    _hover={{ cursor: 'pointer', opacity: .9 }}

                >
                    <Flex direction={'column'} justify={'center'} align={'center'}>
                        <Box position={'absolute'}
                            top={'50%'}
                            as='button'
                            bg='#999'
                            opacity={.5}
                            color='black'
                            border={'1px'}
                            borderColor={'black'}
                            bgColor='white'
                            px={7}
                            h={100}>
                            {title.toUpperCase()}<br />
                            SHOP NOW
                        </Box>

                    </Flex>
                </Box>
        </GridItem>

    )
}



export default MenuItem