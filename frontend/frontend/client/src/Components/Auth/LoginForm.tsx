
import { useNavigate } from "react-router";
import style from "../../../public/css/Login.module.scss";
import { FormButton } from "../ReusableComponents/FormButton";
import { Button } from "../ReusableComponents/Button";
import { useEffect, useState } from "react";
import { IUser } from "../../MODELS/User";
import { useAppDispatch, useAppSelector } from "../../STORE/store";
import { fetchUserToken } from "../../STORE/features/authSlice";
import axios from "axios";
import { useSelector } from "react-redux";



export const LoginForm = () =>{

    const dispatch = useAppDispatch();
    const [bodyLogin, 
        setBodyLogin] = useState({} as Omit<IUser, "id"|"role"|"username">);
    const [userData, setUserData] = useState({} as IUser);
    const {userInfo, userToken} = useAppSelector((state) => state.auth);

    const handleOnChange = (e:any) =>{
        setBodyLogin({...bodyLogin, [e.target.name]: e.target.value})
    }

    const login = async (data: Omit<IUser, "id" | "username" | "role">, e:any) : Promise<string> =>{
        e.preventDefault()
        await dispatch(fetchUserToken(data))
        .unwrap()
        
        
        return ""
    } 
    const navigate = useNavigate()

    const navigateLogin = () =>{
        navigate("/register")
    }

    console.log(bodyLogin);

    

    console.log(userInfo);
    console.log(userToken)

    return(
        <div className={style.loginForm}>
            <form method="post" onSubmit={(e) => login(bodyLogin, e)}>

                <div className={style.formInput} >
                    <img src="http://127.0.0.1:3002/e-mail.png"/>
                    <input type="text" placeholder="email..." name="email" onChange={(e)=> handleOnChange(e)}/>
                </div>

                <div className={style.formInput}>
                    <img src="http://127.0.0.1:3002/key.png"/>
                    <input type="text" placeholder="senha..." name="password" onChange={(e)=> handleOnChange(e)}/>
                </div>

                <input className={style.formButtonWrapper} type="submit" value={"Login"}/>
                   
                

                <p>Não possui uma conta? realize o seu <span onClick={navigateLogin}>registro</span></p>

            </form>
        </div>
    )

}