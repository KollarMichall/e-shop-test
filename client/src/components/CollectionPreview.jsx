import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CollectionItem from './CollectionItem'

const CollectionPreview = ({ routeName, title, items }) => {
  const navigate = useNavigate()
  return (
    <Box p={5}>
      <Text as={'a'} onClick={() => navigate(routeName)} cursor={'pointer'} display='inline-block' p={2} fontSize='2xl'>{title.toUpperCase()}</Text>
      <SimpleGrid columns={{sm: 2, md: 3 , xl: 4}} gap={5}>
        {items.filter((item, index) => index < 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CollectionPreview