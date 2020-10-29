import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function Product({id, title, image, price, prating, nrating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log("this is basket", basket);

    
    const addToBasket = () =>{
        //dispatch thr item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title:title,
                image: image,
                price: price,
                prating: prating,
                nrating: nrating,
            },
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{ title } </p>
                <p className="product_price">
                    <small> ₹</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product_rating">
                    {(Array(prating).fill().map((_, i) => <StarIcon className='product_ratingIcon' />))}
                    {(Array(nrating).fill().map((_, i) => <StarIcon/>))}
                    
                    
                </div>
            </div>
            
            <img src={image} alt="prodpic"/>

            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
