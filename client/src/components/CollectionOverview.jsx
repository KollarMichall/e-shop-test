import { connect } from 'react-redux'
import React from 'react'
import CollectionPreview from './CollectionPreview'


const CollectionOverview = ({ collections }) => {
    const collectionToMap = Object.keys(collections).map(key => collections[key])
    collectionToMap.pop() // remove last item: _id
    

    return (<>
        {collectionToMap.map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
        ))}
    </>

    )
}
const mapStateToProps = (state) => ({
    collections: state.shop.collections
})

export default connect(mapStateToProps)(CollectionOverview)