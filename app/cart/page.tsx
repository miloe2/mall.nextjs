import React from 'react';

const Cart = () => {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <div className="p-10 flex justify-around border-b-2">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
            </div>
            <div className="p-10 flex justify-around border-b-2">

            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
            </div>
        </div>
    );
};

export default Cart;