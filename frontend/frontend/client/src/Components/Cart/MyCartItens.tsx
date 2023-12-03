import style from "../../../public/css/Cart.module.scss";
import { ICart } from "../../MODELS/Cart";
import { CartItem } from "./Product/CartItem";

interface myCartProps{
    data: ICart
}

export const MyCartItens = ({data}: myCartProps) =>{

    const itensList = data.products;



    return(
        <div className={style.myCartItens}>
            {data.products? data.products.map(item => <CartItem productId={item} pixDescPerc={10}/>): "Nothing found"}
           
           
        </div>
    )
}