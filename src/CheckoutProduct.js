import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, prating, nrating }) {
    const  [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={ image }/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {(Array(prating).fill().map((_, i) => <StarIcon className='product_ratingIcon' />))}
                    {(Array(nrating)
                    .fill()
                    .map((_, i) =>       <StarIcon/>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
