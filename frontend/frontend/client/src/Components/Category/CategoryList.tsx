import { ICategory } from "../../MODELS/Category"
import { CategoryListComponent } from "./CategoryListComponent";
import style from "../../../public/css/CategoryList.module.scss"

interface CompProps{
    data: ICategory[];
}

export const CategoryList = ({data}: CompProps) =>{

    return(
        <div className={style.categoryListContainer}>
            {data?.map((category)=> <CategoryListComponent key={category.id} data={category}/>)}
        </div>
    )
}