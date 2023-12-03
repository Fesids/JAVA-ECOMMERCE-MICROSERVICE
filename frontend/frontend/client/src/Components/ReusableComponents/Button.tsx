import style from "../../../public/css/Button.module.scss";

interface ButtonProps{
    content: string,
    color?: string
}


export const Button = ({content, color}: ButtonProps) =>{

    return(
        <button className={style.buttonComponent} style={{color: color}}>
            {content}
        </button>
    )
}