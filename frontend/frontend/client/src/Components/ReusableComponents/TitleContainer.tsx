import style from "../../../public/css/Home.module.scss";

interface TitleProps{
    title: string
}

export const TitleContainer = ({title}: TitleProps) =>{

    return(
        <div className={style.titleContainer}>
            <p>Fique por dentro das novidades</p>
            <h2>{title}</h2>
        </div>
    )

}