import React from 'react';
import OrderSummaryOrganism from './OrderSummaryOrganism';

export default {
    title: 'Components/ShoppingCart/Organisms/OrderSummaryOrganism',
    component: OrderSummaryOrganism,
};

export const Default = () => {
    const sampleProducts = [
        { name: 'Wooden Chair', price: 49.99 },
        { name: 'Dining Table', price: 149.99 },
        { name: 'Office Desk', price: 89.99 },
    ];

    const total = sampleProducts.reduce((sum, product) => sum + product.price, 0);

    const handleRemoveProduct = (index) => {
        alert(`Removed product at index ${index}`);
    };

    return (
        <OrderSummaryOrganism
            products={sampleProducts}
            total={total}
            onRemove={handleRemoveProduct} 
        />
    );
};