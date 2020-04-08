import React from 'react'
import { connect } from 'react-redux';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../selectors/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = (props) => {
  console.log(props.cartTotal)
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block"><span>Product</span></div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block"><span>Remove</span></div>
      </div>
      { props.cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} item={cartItem} />))}
      <div className="total">Total: ${props.cartTotal}</div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
