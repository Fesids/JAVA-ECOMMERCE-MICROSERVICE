import style from "../../../public/css/Button.module.scss";

interface ButtonProps{
    content: string,
    color?: string
}


export const FormButton = ({content, color}: ButtonProps) =>{

    return(
        <input className={style.formButton} style={{color: color}} type="submit" value={content}/>
            
    )
}