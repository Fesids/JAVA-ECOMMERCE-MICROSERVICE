import style from "../../../public/css/GeralSection.module.scss";
import { SectionContainer } from "./SectionContainer";

const sections = [
    {
        sectionName: "Esporte",
        sectionImage: "http://127.0.0.1:3001/icons8-bicycle-100.png"

    },

    {
        sectionName: "Games",
        sectionImage: " http://127.0.0.1:3001/icons8-game-controller-100.png"

    },

    {
        sectionName: "Iphone",
        sectionImage: "http://127.0.0.1:3001/icons8-iphone-100.png"

    },
    {
        sectionName: "Smart TV's",
        sectionImage: "http://127.0.0.1:3001/icons8-tv-100.png"

    },
    {
        sectionName: "Tênis",
        sectionImage: "http://127.0.0.1:3001/icons8-shoes-100.png"

    },
    {
        sectionName: "Mercado",
        sectionImage: "http://127.0.0.1:3001/icons8-shopping-cart-100.png"

    },
    {
        sectionName: "Aparelho de som",
        sectionImage: "http://127.0.0.1:3001/icons8-sound-surround-80.png"

    },
    

]

export const GeralSection = () =>{

    return(
        <div className={style.geralSection}>
            <div className={style.geralSectionTitle}>
                <h2>SHOP APPLICATIONS</h2>
            </div>
            <div className={style.geralSectionContainer}>
                {sections.map(section => <SectionContainer sectionName={section.sectionName} sectionImage={section.sectionImage}/>)}
            </div>
        </div>

    )
}