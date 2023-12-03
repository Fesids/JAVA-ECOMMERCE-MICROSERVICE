import style from "../../../public/css/Cart.module.scss";
import { IProduct } from "../../MODELS/Product";
import { Button } from "../ReusableComponents/Button";

interface recomendedProductsCartProps{
    data: IProduct
}

export const RecomendedProductCart = ({data}: recomendedProductsCartProps) =>{

    return(
        <div className={style.recomendedProductCart}>
            <div className={style.productImg}>
                <div className={style.productImgWrapper}>
                    <img src={data.product_img}/>
                </div>
                
            </div>
            <div className={style.productInfo}>
                <div className={style.productInfoWrapper}>
                    <div className={style.name}>{data.product_name}</div>
                    <div className={style.price}>R$ {data.price}</div>
                    <div className={style.buttonWrapper}>
                        <Button content="Adcionar ao carrinho"/>
                    </div>
                </div>
            </div>
        </div>
    )
}