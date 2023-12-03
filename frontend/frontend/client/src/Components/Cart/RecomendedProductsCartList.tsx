import style from "../../../public/css/Cart.module.scss"
import { IProduct } from "../../MODELS/Product"
import { RecomendedProductCart } from "./RecomendedProductCart"


interface RecomendeProductListProps{
    data: Array<IProduct>
}


export const RecomendedProductsCartList = ({data}: RecomendeProductListProps) =>{

    return(
        <div className={style.recomendedProductsCartList}>
            {data?.slice(2, 5).map(product => 
                <div className={style.recomendedProductCartWrapper}> 
                    <RecomendedProductCart data={product}/>
                </div>
            )}
        </div>
    )
}


