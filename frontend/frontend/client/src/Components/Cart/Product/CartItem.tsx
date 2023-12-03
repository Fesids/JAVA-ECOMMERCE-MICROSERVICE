import { useDispatch } from "react-redux"
import { useAppDispatch } from "../../../STORE/store"
import { useEffect, useState } from "react";
import { IProduct } from "../../../MODELS/Product";
import { fetchProductById } from "../../../STORE/features/productSlice";
import style from "../../../../public/css/Cart.module.scss";

interface cartProductProps{
    productId: number,
    pixDescPerc: number
}

export const CartItem = ({productId, pixDescPerc}: cartProductProps) =>{

    const dispatch = useAppDispatch();

    const [product, setProduct] = useState({} as IProduct); 

    useEffect(() =>{
        dispatch(fetchProductById(productId))
        .unwrap()
        .then(resp => setProduct(resp))
    })
    
    const discount = product.price - (product.price*(pixDescPerc/100))

    return(
        <div className={style.cartItem}>
            <div className={style.cartImg}>
                <img src={product.product_img}/>
            </div>

            <div className={style.cartItemInfo}>
                <div className={style.geralInfo}>
                    <div className={style.infoWrapper}>
                        {product.product_name}
                    </div>
                   
                    <p>Remover</p>
                </div>
                <div className={style.price}>
                    <p>R$ {product.price}</p>
                    <h5>ou R$ {discount}</h5>
                    <p>à vista no Pix</p>
                </div>
            </div>

        </div>
    )
}