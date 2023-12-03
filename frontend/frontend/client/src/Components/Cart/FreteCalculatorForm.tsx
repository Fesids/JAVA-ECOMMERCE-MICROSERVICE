import style from "../../../public/css/Cart.module.scss";
import { Button } from "../ReusableComponents/Button";

export const FreteCalculatorForm = () =>{


    return(
        <div className={style.freteCalculatorForm}>
            <form method="post">
                <input type="text" className={style.freteInput}/>
                <div className={style.buttonWrapper}>
                    <Button content="Calcular"/>
                </div>
            </form>
        </div>
    )

}