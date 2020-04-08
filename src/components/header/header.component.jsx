import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../selectors/cart.selectors';
import { selectCurrentUser } from '../../selectors/user.selectors';

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link> 
      <div className="options">
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        { currentUser ? 
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :  
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        }
        <CartIcon />
      </div>
      { !cartHidden && <CartDropdown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
  cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
