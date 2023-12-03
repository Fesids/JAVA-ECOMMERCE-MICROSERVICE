import style from "../../../public/css/Cart.module.scss";
import { Button } from "../ReusableComponents/Button";
import { FreteCalculatorForm } from "./FreteCalculatorForm";


export const CartPayment = () =>{

    return(
        <div className={style.cartPaymentContainer}>
            <div className={style.frete}>
                <div className={style.freteCalculatorContainer}>
                    <div className={style.textContent}>
                        <p>Calcule a entrega</p>
                        <p>estimada para sua região.</p>
                    </div>

                    <div className={style.freteCalculatorFormContainer}>
                        <FreteCalculatorForm/>
                    </div>

                   <p>Não sei meu CEP</p>


                </div>
            </div>
            <div className={style.requestAbstract}>
                <div className={style.requestAbstractContainer}>
                    <div className={style.title}>
                        <h5>Resumo do pedido</h5>
                    </div>

                    <div className={style.qtd}>
                        <h5>04 Produtos</h5>
                        <h5>R$ 399,60</h5>
                    </div>

                    <div className={style.total}>
                        <h5>Total</h5>
                        <div>
                            <p>R$ 399,60</p>
                            <h5>ou R$ 392,60</h5>
                            <h5>à vista no pix</h5>
                        </div>

                      

                    </div>
                    <p>Valor sujeito à alteração conforme opção de pagamento</p>
                    <div className={style.buttons}>
                            <div className={style.buymoreButtonWrapper}>
                                <Button content="Comprar mais produtos" color="blue"/>
                            </div>

                            <div className={style.continueButtonWrapper}>
                                <Button content="Continuar a compra"/>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}