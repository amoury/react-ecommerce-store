import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../selectors/cart.selectors';
import { toggleCartHidden } from '../../actions/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { cartItems.length ? 
          cartItems.map(item => <CartItem key={item.id} item={item} />) :
          <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton> 
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)( CartDropdown ))
