import { useSelector } from "react-redux"
import style from "../../../public/css/Home.module.scss"
import { HomeImageHighlight } from "../ReusableComponents/HomeImageHighlight"
import { LatestProductList } from "../ReusableComponents/LatestProductList"
import { TitleContainer } from "../ReusableComponents/TitleContainer"
import { fetchProducts, selectAllProducts } from "../../STORE/features/productSlice"
import { useAppDispatch } from "../../STORE/store"
import { useEffect } from "react"
import { GeralSection } from "../ReusableComponents/GeralSection"
import { RecomendedSection } from "../ReusableComponents/RecomendedSection"


export const Home = () =>{
    const products = useSelector(selectAllProducts);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    })

    console.log(products)

    return(
        <div className={style.homeWrapper}>
            <div className={style.home}>
                <HomeImageHighlight/>
                <GeralSection/>
                <div className={style.lastestProductsContainer}>
                        <TitleContainer title="Últimos Produtos"/>
                        <LatestProductList data={products}/>
                </div>
                <div className={style.recomendedSectionContainer}>
                        <RecomendedSection/>
                </div>
            </div>
        </div>
        
    )
}