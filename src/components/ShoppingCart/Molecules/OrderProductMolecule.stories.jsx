import React from 'react';
import OrderProductMolecule from './OrderProductMolecule';

export default {
    title: 'Components/ShoppingCart/Molecules/OrderProductMolecule',
    component: OrderProductMolecule,
};

export const Default = () => (
    <OrderProductMolecule
        name="Wooden Chair"
        price={49.99}
        onRemove={() => alert('Product removed')}
    />
);