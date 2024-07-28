import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    let totalItems = 0;

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        let cost = 0;
        for (let i = 0; i < cart.items; i++) {
            // cost = cart.items[i].quantity * cart.items[i].cost
            cost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        }
        return cost;
    };

    const handleContinueShopping = (e) => {
        onContinueShopping();
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity(item.quantity++));
    };

    const handleDecrement = (item) => {
        dispatch(updateQuantity(item.quantity--));
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item));

    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
    const allItems = cart.items.find(pdt => item.name ==pdt.name);
      let cost = 0;
        for (let i = 0; i < allItems; i++) {
            cost = allItems[i].quantity * allItems[i].cost
        }
        return cost;
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost}</div>
                            <div className="cart-item-quantity">
                                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
                <br />
                <button className="get-started-button1">Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;


