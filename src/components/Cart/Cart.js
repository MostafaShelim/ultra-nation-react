import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = cart.reduce((sum, item) => sum + item.population, 0);
    return (
        <div>
            <h4>Population Added: {totalPopulation}</h4>
        </div>
    );
};

export default Cart;