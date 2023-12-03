
import style from "../../../public/css/Product.module.scss";
import { IProduct } from "../../MODELS/Product";
import { Button } from "../ReusableComponents/Button";

interface productProps{
    data: IProduct,
    pixDescPerc: number
}

export const ProductDetailComponent = ({data, pixDescPerc}: productProps) =>{

    let priceDesc = data.price - (data.price*(pixDescPerc/100));

    console.log(data.product_img)

    return(
        
            <div className={style.productDetailContainer}>
                <div className={style.productDetailHead}></div>
                <div className={style.productDetail}>
                    <div className={style.productImg}>
                        <img src={data.product_img}/>
                        
                    </div>
                    <div className={style.productInfo}>
                        <div className={style.productDescription}>
                            <h2>{data.product_name}</h2>
                            <h4>R$ {data.price} em até 10x de R$ {data.price /10} sem juros no cartão de crédito</h4>
                        </div>
                        <div className={style.productPayment}>
                            <div className={style.pixPay}>
                                <div className={style.buy}>
                                    <h3>R$ {priceDesc}</h3>
                                    <div className={style.buyButtonWrapper}>
                                        <Button content="Comprar"/>
                                    </div>
                                </div>
                                <p>Exclusivo Pix</p>
                            </div>

                                <p className={style.moreOp}>Ver mais opções de pagamento {">"}</p>
                            
                            <div className={style.creditCard}>
                                
                                <div className={style.icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="37" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                    </svg>
                                </div>
                                <div className={style.content}>
                                    <p>Parcele sua compra sem cartão de crédito</p>
                                    <p>Em até 24x utilizando o Carnê Digital. <span>Quer saber mais?</span></p>
                                </div>
                                
                               
                            
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        
    )

}