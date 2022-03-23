import { Grid } from '@chakra-ui/react';
import React from 'react'
import { connect } from 'react-redux';
import MenuItem from './MenuItem';


const Categories = ({ sections }) => {

    return (
        <Grid
            p={5}
            templateRows='repeat(2, 1fr)'
            templateColumns={{ md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
            gap={2}
        >
            {sections.sort((a, b) => a.id - b.id).map(({ id, ...props }) => (
                <MenuItem key={id} {...props} />
            ))}
        </Grid>


    )
}
const mapStateToProps = (state) => ({
    sections: state.category.sections
})

export default connect(mapStateToProps)(Categories)