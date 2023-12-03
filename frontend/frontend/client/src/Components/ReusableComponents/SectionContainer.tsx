import style from "../../../public/css/GeralSection.module.scss"

interface sectionProps{
    sectionName: string,
    sectionImage: string
}

export const SectionContainer = ({sectionName, sectionImage}: sectionProps) =>{

    return(
        
        <div className={style.sectionContainer}>
            <div className={style.sectionImage}>
                <img src={sectionImage}/>
            </div>
            <p className={style.sectionName}>{sectionName}</p>
        </div>
    )

}