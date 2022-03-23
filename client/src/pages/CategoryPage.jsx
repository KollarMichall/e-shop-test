import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import CollectionItem from '../components/CollectionItem';

const CategoryPage = (props) => {
  const { id } = useParams()
  
  const { title, items } = props.collections[id]
  return (
    <Box p={5}>
      <Center>
        <Text p={2} fontSize='2xl'>{title.toUpperCase()}</Text>
      </Center>
      <SimpleGrid columns={{ sm: 2, md: 4 }} gap={5}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
const mapStateToProps = (state) => ({
  collections: state.shop.collections
})

export default connect(mapStateToProps)(CategoryPage)