import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cartActions'
import { selectCartItemCount } from '../../../redux/cart/cartSelector'
import { CartContainer, ItemCountContainer, ShoppingIcon } from './CartIconStyles'


const CartIcon = (props) => {
  return (
    <CartContainer onClick={props.toggleCartHidden} >
      <ShoppingIcon />
      <ItemCountContainer>{props.itemCount}</ItemCountContainer>
    </CartContainer>
  )
}
const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)