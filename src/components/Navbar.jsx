import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartReducerState = useSelector((state) => state.cartReducer);
  const cartItems = cartReducerState?.cartItems || [];
  const loginState = useSelector((state) => state.loginUserReducer);
  const currentUser = loginState?.currentUser;

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">SHAY SHOP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {currentUser ? (
                <li className="nav-item">
                  <a className="nav-link" href="/profile">{currentUser.email}</a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <i className="fas fa-shopping-cart"></i>{cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
