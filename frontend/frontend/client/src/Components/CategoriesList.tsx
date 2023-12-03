import { useSelector } from "react-redux"

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useAppDispatch, useAppSelector } from "../STORE/store"
import { fetchCategories, selectAllCategories } from "../STORE/features/categorySlice"
import { fetchProductById, fetchProducts, selectAllProducts } from "../STORE/features/productSlice"
import { IProduct } from "../MODELS/Product"
import axios from "axios"

export const CategoriesList = () =>{
    //const categories = useAppSelector((state) => state.category.categories);

    //console.log(categories);

    // ta pegando
    const [productBody, setProductBody] = useState({} as any);
    const dispatch = useAppDispatch()
    const categories = useSelector(selectAllCategories)
    const products = useSelector(selectAllProducts);

    /*const dis = dispatch(fetchProductById(1)).unwrap()
    .then((orginalPromiseResult) => {
        setProductBody(orginalPromiseResult);
    })*/
    const [prods, setProds] = useState([] as Array<IProduct>);

    
    // ta pegando const categoryStatus = useSelector((state:RootState) => state.category.status)
    //const categories = useAppSelector((state) => state.category.categories);
    //console.log(categories)
    useEffect(()=>{
        dispatch(fetchCategories())
        
    }, []);
    /*const teste = async () =>{
        const resp = await axios.get("http://127.0.0.1:8002/api/v1/product/");
        return resp.data;
    }
    useEffect(()=>{
        teste().then(res => setProds(res));
    })*/

    //console.log(prods)

    useEffect(()=>{
        dispatch(fetchProducts());
        dispatch(fetchProductById(1)).unwrap()
        .then((orginalPromiseResult) => {
            setProductBody(orginalPromiseResult);
    })
    }, [])

    //const categories = useAppSelector((state) => state.category.categories)

    console.log(categories);
    console.log(products);
    console.log(productBody);
    

    return(
        <div>
            list
        </div>
    )
}