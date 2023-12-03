import { ICategory } from "../../MODELS/Category";
import style from "../../../public/css/CategoryListComponent.module.scss"

interface CompProps{

    data: ICategory

}

export const CategoryListComponent = ({data}: CompProps) =>{


    return(
        <div className={style.CategoryListComponent}>
            <p>{data.name}</p>
        </div>
    )

}