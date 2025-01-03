import React from 'react'
import ProductNameAtom from '../Atoms/ProductNameAtom'
import PriceAtom from '../Atoms/PriceAtom'
import TrashIconAtom from '../Atoms/TrashIconAtom'
import styles from '../Checkout.module.css'

const OrderProductMolecule = ({ name, price, onRemove, image }) => (
    <div className={styles.orderProduct}>
        <img src={image} alt={name} className={styles.productImage} /> 
        <ProductNameAtom name={name} />
        <PriceAtom price={price} />
        <TrashIconAtom onClick={onRemove} />
    </div>
)

export default OrderProductMolecule