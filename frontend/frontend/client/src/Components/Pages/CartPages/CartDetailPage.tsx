import { useSelector } from "react-redux";
import style from "../../../../public/css/Cart.module.scss";
import { RecomendedProductsCartList } from "../../Cart/RecomendedProductsCartList";
import { useAppDispatch } from "../../../STORE/store";
import { useEffect, useState } from "react";
import { fetchProducts, selectAllProducts } from "../../../STORE/features/productSlice";
import { MyCartItens } from "../../Cart/MyCartItens";
import { CartPayment } from "../../Cart/CartPayment";
import { ICart } from "../../../MODELS/Cart";
import { fetchCartByUserId } from "../../../STORE/features/cartSlice";

export const CartDetailPage = () =>{
    const products = useSelector(selectAllProducts);
    const dispatch = useAppDispatch();
    
    const [cartDetail, setCartDetail] = useState({} as ICart);

    const userId = localStorage.getItem("currentuser");

    useEffect(()=>{
        dispatch(fetchCartByUserId(1)/*teste*/)
        .unwrap()
        .then(resp => setCartDetail(resp) )
    })
    
    // fetch recomended products
    useEffect(()=>{
        dispatch(fetchProducts());
    }, []);

    console.log(cartDetail)

    return(
        <div className={style.cartWrapper}>
            <div className={style.cartContainer}>

                {/***  Recomended section ***/}
                <div className={style.recomended}>
                    <div className={style.recomendedTitle}><h5>Aproveite e leve também</h5></div>
                    <div className={style.recomendedProductsCartListWrapper}>
                        <RecomendedProductsCartList data={products}/>
                    </div>
                </div>

                {/***  Mycart section ***/}
                <div className={style.myCart}>
                    <div className={style.mycartTitle}>
                        <h4>My Cart</h4>
                    </div>
                    <div className={style.myCartItensWrapper}>
                        <MyCartItens data={cartDetail}/>
                    </div>
                </div>

                 {/***  savedItens section ***/}
                <div className={style.savedItens}>

                </div>
                
                 {/***  Payment section ***/}
                <div className={style.cartPayment}>
                    <CartPayment/>

                </div>

            </div>
        </div>
    )

}