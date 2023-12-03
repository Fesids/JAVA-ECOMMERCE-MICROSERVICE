import style from "../../../public/css/Product.module.scss";

interface ProductDescProps{
    description?: string
}

export const ProductDescription = ({description}: ProductDescProps) =>{

    return(
        <div className={style.productDesc}>
            <div className={style.descriptionTitle}>
                <h5>Descrição do produto</h5>
            </div>

            <div className={style.description}>
                <p>{description}</p>
            </div>

        </div>
    )
}