import './CartItem.css';

const CartIcon = ({ count, onClick }) => {
    return (
      <div className="cart-icon-container" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="cart-icon"
        >
          <path d="M7 4V6H5V4H3V6H1V4H0V8H1L2 18H22L23 8H7V4H5ZM4.2 8H20.8L19.8 16H4.2L4.2 8ZM7 20C5.9 20 5 20.9 5 22C5 23.1 5.9 24 7 24C8.1 24 9 23.1 9 22C9 20.9 8.1 20 7 20ZM17 20C15.9 20 15 20.9 15 22C15 23.1 15.9 24 17 24C18.1 24 19 23.1 19 22C19 20.9 18.1 20 17 20Z" />
        </svg>
        {count > 0 && <div className="cart-count-badge">{count}</div>}
      </div>
    );
  };
  
  export default CartIcon;